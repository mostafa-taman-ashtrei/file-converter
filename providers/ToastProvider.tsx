"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider: React.FC = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: "#1f2937",
                    color: "#fff",
                }
            }}
        />
    );
};

export default ToasterProvider;