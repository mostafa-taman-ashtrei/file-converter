export const displayFileName = (fileName: string) => {
    const maxSubstrLength = 18;

    if (fileName.length > maxSubstrLength) {
        const fileNameWithoutExtension = fileName.split(".").slice(0, -1).join(".");
        const fileExtension = fileName.split(".").pop();

        if (typeof fileExtension === "undefined") return "";


        // Calculate the length of characters to keep in the middle
        const charsToKeep =
            maxSubstrLength -
            (fileNameWithoutExtension.length + fileExtension.length + 3);


        const newFileName =
            fileNameWithoutExtension.substring(0, maxSubstrLength - fileExtension.length - 3,)
            +
            "..."
            +
            fileNameWithoutExtension.slice(-charsToKeep) +
            "."
            +
            fileExtension;

        return newFileName;
    }

    else return fileName.trim();
};

export const displayFileSize = (fileSize: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

    if (fileSize === 0) return "0 Byte";

    const i = Math.floor(Math.log(fileSize) / Math.log(1024));
    const size = (fileSize / Math.pow(1024, i)).toFixed(2);

    return `${size} ${sizes[i]}`;
};