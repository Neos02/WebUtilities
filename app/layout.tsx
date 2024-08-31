import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Utilities",
  description:
    "A collection of various different tools that can be used on the web. Select colors, generate random numbers, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen h-screen bg-background antialiased ${inter.className}`
        )}
      >
        <div className="relative grid grid-rows-[max-content_1fr] w-11/12 h-full md:w-4/5 max-w-screen-lg mx-auto pb-14">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
