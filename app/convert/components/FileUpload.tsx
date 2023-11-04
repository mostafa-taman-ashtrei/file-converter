"use client";

import Dropzone, { FileRejection } from "react-dropzone";
import { useEffect, useRef, useState } from "react";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { FiUploadCloud } from "react-icons/fi";
import FileList from "./FileList";
import { FileListType } from "@/types/file";
import loadFfmpeg from "@/utils/ffmpeg";
import toast from "react-hot-toast";

const FileUpload: React.FC = () => {
    const [dropEnter, setDropEnter] = useState(false);
    const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
    const [fileList, setFileList] = useState<FileListType[]>([]);

    const ffmpegRef = useRef(new FFmpeg());

    const load = async () => {
        const ffmpeg_response: FFmpeg = await loadFfmpeg();

        ffmpegRef.current = ffmpeg_response;
        setFfmpegLoaded(true);
    };

    useEffect(() => { load(); }, []);

    const handleDragRejected = (fileRejections: FileRejection[]) => {
        throw new Error("Failed To Upload File(s)! Only audio, video and images are allowed!", { cause: fileRejections });
    };

    const handleDragEnter = () => setDropEnter(true);
    const handleDragLeave = () => setDropEnter(false);

    const handleDrop = (acceptedFiles: File[]) => {
        setDropEnter(false);
        const tmp: FileListType[] = [];

        acceptedFiles.forEach((file) => {
            const fileType = file.type.split("/")[0];
            const isAccepted = fileType === "video" || fileType === "audio" || fileType === "image";

            if (!isAccepted) return toast.error(`We currently do not accept ${fileType} files.`);

            tmp.push({
                fileName: file.name,
                fileSize: file.size,
                from: file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2),
                to: null,
                fileType: file.type,
                file,
                isConverted: false,
                isConverting: false,
                isError: false,
            });
        });

        setFileList(tmp);
    };

    return (
        <>
            <Dropzone
                onDrop={handleDrop}
                onDropRejected={handleDragRejected}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDropAccepted={handleDragLeave}
            >
                {({ getRootProps, getInputProps }) => (
                    <div
                        className={`container cursor-pointer my-10 py-20 border border-dashed flex flex-col items-center justify-center mx-auto ${dropEnter ? "bg-gray-800" : ""}`}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <div className="justify-center text-primary flex text-6xl">
                            <FiUploadCloud />
                        </div>
                        <p className="text-gray-500">Drag & drop some files here, or click to select files</p>
                    </div>
                )}
            </Dropzone>

            <div className="mx-6 py-2">
                <FileList
                    FileList={fileList}
                    setFileList={setFileList}
                    ffmpegRef={ffmpegRef}
                    ffmpegLoaded={ffmpegLoaded}
                />
            </div >
        </>
    );
};

export default FileUpload;