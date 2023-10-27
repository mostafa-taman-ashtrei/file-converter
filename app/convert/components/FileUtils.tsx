import {
    BsFileEarmarkTextFill,
    BsFillCameraVideoFill,
    BsFillImageFill,
} from "react-icons/bs";

import { AiFillFile } from "react-icons/ai";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";

interface props {
    fileType: string;
}

const FileIcon: React.FC<props> = ({ fileType }) => {
    if (fileType.includes("video")) return <BsFillCameraVideoFill />;
    if (fileType.includes("audio")) return <PiSpeakerSimpleHighFill />;
    if (fileType.includes("text")) return <BsFileEarmarkTextFill />;
    if (fileType.includes("image")) return <BsFillImageFill />;
    else return <AiFillFile />;
};

export default FileIcon;