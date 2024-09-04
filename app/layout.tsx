import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <GoogleAnalytics gaId="G-6ZQPQ9EBN3" />
      <body
        className={cn(
          `grid grid-rows-[min-content_1fr] min-h-screen h-screen bg-background antialiased ${inter.className}`
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
