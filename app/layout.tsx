import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Format Hub",
  description: "A file converter app.",
  keywords: "image converter, video converter, audio converter, unlimited image converter, unlimited video converter"
};

interface props {
  children: React.ReactNode
}

const RootLayout: React.FC<props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;