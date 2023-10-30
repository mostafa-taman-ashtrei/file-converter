"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Radix/Select";
import { displayFileName, displayFileSize } from "@/utils/fileData";

import FileIcon from "./FileUtils";
import { FileListType } from "@/types/file";
import { MdClose } from "react-icons/md";
import fileExtensions from "@/constants/fileExtension";
import { v4 as uuidv4 } from "uuid";

interface props {
    FileList: FileListType[];
    setFileList: Dispatch<SetStateAction<FileListType[]>>;
}

const FileList: React.FC<props> = ({ FileList, setFileList }) => {
    const [convertValue, setConvertValue] = useState({ image: "", video: "", audio: "" });

    const handleSelectChange = (value: string, file: FileListType) => {
        setConvertValue((prev) => {
            if (file.fileType.includes("video")) prev.video = value;
            if (file.fileType.includes("audio")) prev.audio = value;
            if (file.fileType.includes("image")) prev.image = value;

            return { ...prev };
        });


        setFileList((prev) => {
            prev.map((prevFile) => {
                if (prevFile.fileType === file.fileType) prevFile.to = value;
            });

            return prev;
        });
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



    if (FileList.length === 0) return null;

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
        </div>
    );
};

export default FileList;