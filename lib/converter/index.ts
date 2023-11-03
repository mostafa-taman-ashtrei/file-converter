import { FFmpeg } from "@ffmpeg/ffmpeg";
import { FileListType } from "@/types/file";
import { fetchFile } from "@ffmpeg/util";

const getFileExtension = (fileName: string) => {
    const regex = /(?:\.([^.]+))?$/;
    const match = regex.exec(fileName);

    if (match && match[1]) return match[1];

    // if an extension is not found return an empty string.
    return "";
};

const removeFileExtension = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");

    if (lastDotIndex !== -1) return fileName.slice(0, lastDotIndex);
    return fileName;
};

const convertFiles = async (ffmpeg: FFmpeg, uploadedFile: FileListType) => {
    const { fileName, file, to, fileType } = uploadedFile;
    const fileExtension = getFileExtension(fileName);
    const extensionLessName = removeFileExtension(fileName) + "." + to;

    ffmpeg.writeFile(fileExtension, await fetchFile(file));


    let ffmpegCommands: string[] = [];

    if (to === "3gp") {
        ffmpegCommands = [
            "-i",
            fileExtension,
            "-r",
            "20",
            "-s",
            "352x288",
            "-vb",
            "400k",
            "-acodec",
            "aac",
            "-strict",
            "experimental",
            "-ac",
            "1",
            "-ar",
            "8000",
            "-ab",
            "24k",
            extensionLessName,
        ];
    } else {
        ffmpegCommands = ["-i", fileExtension, extensionLessName];
    }


    await ffmpeg.exec(ffmpegCommands);
    const data = (await ffmpeg.readFile(extensionLessName));
    const blob = new Blob([data], { type: fileType.split("/")[0] });
    const url = URL.createObjectURL(blob);


    return { url, output: extensionLessName };

};

export default convertFiles;
