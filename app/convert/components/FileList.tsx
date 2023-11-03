"use client";

import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Radix/Select";
import { displayFileName, displayFileSize } from "@/utils/fileData";

import { BiSolidCloudDownload } from "react-icons/bi";
import { Button } from "@/components/Radix/Button";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import FileIcon from "./FileUtils";
import { FileListType } from "@/types/file";
import { MdClose } from "react-icons/md";
import convert from "@/lib/converter";
import fileExtensions from "@/constants/fileExtension";
import { v4 as uuidv4 } from "uuid";

interface props {
    FileList: FileListType[];
    setFileList: Dispatch<SetStateAction<FileListType[]>>;
    ffmpegRef: MutableRefObject<FFmpeg>;
    ffmpegLoaded: boolean;
}

const FileList: React.FC<props> = ({ FileList, setFileList, ffmpegRef, ffmpegLoaded }) => {
    const [convertValue, setConvertValue] = useState({ image: "", video: "", audio: "" });
    const [isConverting, setIsConverting] = useState(false);

    const handleSelectChange = (value: string, file: FileListType) => {
        setConvertValue((prev) => {
            if (file.fileType.includes("video")) prev.video = value;
            if (file.fileType.includes("audio")) prev.audio = value;
            if (file.fileType.includes("image")) prev.image = value;

            return { ...prev };
        });

        setFileList((prev) => {
            prev.map((prevFile) => { if (prevFile.fileType === file.fileType) prevFile.to = value; });
            return prev;
        });
    };

    const download = (action: FileListType) => {
        const a = document.createElement("a");

        if (typeof action.output === "undefined" || typeof action.url === "undefined") return;

        a.style.display = "none";
        a.href = action.url;
        a.download = action.output;

        document.body.appendChild(a);
        a.click();

        // Clean up after download
        URL.revokeObjectURL(action.url);
        document.body.removeChild(a);
    };

    const getFileExntesions = (fileType: string) => {
        if (fileType.includes("video")) return fileExtensions.video;
        if (fileType.includes("audio")) return fileExtensions.audio;
        return fileExtensions.image;
    };

    const getFileExtensionValue = (fileType: string) => {
        if (fileType.includes("video")) return convertValue.video;
        if (fileType.includes("audio")) return convertValue.audio;
        return convertValue.image;
    };

    const handleDeleteFile = (deletedFile: FileListType) => {
        setFileList((prev) => prev.filter((file) => file.fileName !== deletedFile.fileName));
    };


    const handleConvertingFiles = async () => {
        setIsConverting(true);
        let tmpFiles = FileList.map((prev) => ({ ...prev, isConverting: true }));

        setFileList(tmpFiles);

        for (let file of tmpFiles) {
            try {
                const { url, output } = await convert(ffmpegRef.current, file);

                tmpFiles = tmpFiles.map((prev) =>
                    prev === file
                        ? {
                            ...prev,
                            isConverted: true,
                            isConverting: false,
                            url,
                            output,
                        }
                        : prev
                );

                setFileList(tmpFiles);
            } catch (error) {
                throw new Error(`Failed to convert file ${file.fileName} due to ${error}`,);
            } finally {
                setIsConverting(false);
            }
        }
    };

    if (FileList.length === 0) return null;

    if (!ffmpegLoaded) return <div className="mx-6 bg-primary rounded-full h-2.5 mb-4 animate-pulse" />;

    return (
        <div className="space-y-3">
            {
                FileList.map((file) => <div
                    key={uuidv4()}
                    className="py-4 space-y-2 lg:py-0 relative cursor-pointer rounded-xl  h-fit lg:h-16 px-4 lg:px-10 flex flex-wrap lg:flex-nowrap items-center justify-between text-gray-300"
                >
                    <div className="flex gap-4 items-center">
                        <span className="text-2xl text-primary">
                            <FileIcon fileType={file.fileType} />
                        </span>
                        <div className="flex items-center gap-1 w-96">
                            <span className="text-md font-medium overflow-x-hidden">
                                {displayFileName(file.fileName)}
                            </span>
                            <span className="text-gray-400 text-sm">
                                ({displayFileSize(file.fileSize)})
                            </span>
                        </div>
                    </div>


                    <div className="flex gap-4 items-center">
                        <Select
                            onValueChange={(value) => handleSelectChange(value, file)}
                            value={getFileExtensionValue(file.fileType)}
                        >
                            <SelectTrigger className="w-32 outline-none focus:outline-none focus:ring-0 text-center text-gray-600 bg-gray-50 text-md font-medium">
                                <SelectValue placeholder="Convert To" />
                            </SelectTrigger>
                            <SelectContent className="h-fit">
                                <div className="grid grid-cols-2 gap-1 w-fit bg-gray-700 rounded-lg p-2 text-white">
                                    {
                                        getFileExntesions(file.fileType).map((extension) =>
                                            <SelectItem
                                                value={extension}
                                                className="mx-auto hover:bg-gray-600 cursor-pointer rounded-lg"
                                                key={uuidv4()}
                                            >
                                                <div className="flex text-center items-center">
                                                    {extension}
                                                </div>
                                            </SelectItem>
                                        )
                                    }
                                </div>
                            </SelectContent>
                        </Select>

                        {file.isConverted &&
                            <Button
                                onClick={() => download(file)}
                                variant="outline"
                            >
                                <BiSolidCloudDownload />
                                <span className="mx-2">Download</span>
                            </Button>
                        }

                        <span
                            onClick={() => handleDeleteFile(file)}
                            className="cursor-pointer hover:bg-gray-50 rounded-full h-10 w-10 flex items-center justify-center text-2xl text-gray-400"
                        >
                            <MdClose />
                        </span>
                    </div>

                </div>
                )
            }

            <div className="flex justify-center">
                <Button
                    disabled={isConverting}
                    size="icon"
                    className="rounded-xl font-semibold relative text-md flex items-center w-1/2 my-6"
                    onClick={handleConvertingFiles}
                >
                    {
                        isConverting
                            ? <span className="text-gray-400 animate-bounce">Converting {FileList.length} files ...</span>
                            : <span>Convert All</span>
                    }

                </Button>
            </div>
        </div>
    );
};

export default FileList;