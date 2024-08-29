import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          `min-h-screen bg-background antialiased ${inter.className}`
        )}
      >
        <div className="w-11/12 md:w-4/5 mx-auto">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
