import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

const title = "Web Utilities";
const description =
  "A collection of various different tools that can be used on the web. Select colors, generate random numbers, and more!";

export const metadata: Metadata = {
  applicationName: "Web Utilities",
  authors: [{ name: "Nicholas Kennedy", url: "https://neos02.github.io/" }],
  creator: "Nicholas Kennedy",
  description,
  generator: "Next.js",
  keywords: ["Tools", "Utilities", "Online", "Free", "Productivity"],
  openGraph: {
    title,
    description,
    url: new URL("/", process.env.NEXT_PUBLIC_URL),
  },
  referrer: "origin-when-cross-origin",
  title,
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
          `grid grid-rows-[min-content_1fr_min-content] min-h-screen h-screen bg-background antialiased ${inter.className}`
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
