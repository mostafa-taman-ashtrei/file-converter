import React, { FC } from "react";

interface props {
    titleText: string;
}

const GradientText: FC<props> = ({ titleText }) => {
    return (
        <p className="bg-gradient-to-br gradient-primary inline-block text-transparent bg-clip-text">
            {titleText}
        </p>
    );
};

export default GradientText;