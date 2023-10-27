export interface FileListType {
    file: File;
    fileName: string;
    fileSize: number;
    from: string;
    to: String | null;
    fileType: string;
    isConverting?: boolean;
    isConverted?: boolean;
    isError?: boolean;
    url?: string;
    output?: string;
}