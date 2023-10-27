import { displayFileName, displayFileSize } from "@/utils/fileData";

import FileIcon from "./FileUtils";
import { FileListType } from "@/types/file";
import { v4 as uuidv4 } from "uuid";

interface props {
    FileList: FileListType[]
}

const FileList: React.FC<props> = ({ FileList }) => {
    if (FileList.length === 0) return null;

    return (
        <div className="space-y-3">
            {
                FileList.map((file) => <div
                    key={uuidv4()}
                    className="py-4 space-y-2 lg:py-0 relative cursor-pointer rounded-xl border h-fit lg:h-16 px-4 lg:px-10 flex flex-wrap lg:flex-nowrap items-center justify-between text-gray-300"
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
                </div>

                )
            }
        </div>
    );
};

export default FileList;