"use client";

import Dropzone, { FileRejection } from "react-dropzone";

import { FiUploadCloud } from "react-icons/fi";
import acceptedFiles from "@/constants/acceptedFiles";
import { useState } from "react";

const FileUpload: React.FC = () => {
    const [dropEnter, setDropEnter] = useState(false);

    const handleDragRejected = (fileRejections: FileRejection[]) => {
        throw new Error("Failed To Upload File(s)! Only audio, video and images are allowed!", { cause: fileRejections });
    };

    const handleDragEnter = () => setDropEnter(true);
    const handleDragLeave = () => setDropEnter(false);

    const handleDrop = (acceptedFiles: File[]) => {
        // TODO process upload files
        console.log(acceptedFiles);
    };

    return (
        <Dropzone
            onDrop={handleDrop}
            onDropRejected={handleDragRejected}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDropAccepted={handleDragLeave}
            accept={acceptedFiles}
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
    );
};

export default FileUpload;