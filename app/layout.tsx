import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Nav";
import { Theme } from "@radix-ui/themes";
import ToasterProvider from "@/providers/ToastProvider";

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
        <Theme appearance="dark">
          <ToasterProvider />
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;