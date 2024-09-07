import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import Converter from "./Converter";
import { baseUrl } from "@/app/sitemap";

const { heading, subheading } = getPageHeadings("/number/convert");

const NumberConvertPage = () => {
  return (
    <ToolLayout title={heading} description={subheading}>
      <Converter />
    </ToolLayout>
  );
};

const title = "Base Converter - Convert Numbers Between Different Bases";
const description =
  "Easily convert numbers between binary, decimal, hexadecimal, and more with our free online base converter tool. Fast, accurate, and user-friendly.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: new URL("/color/picker", baseUrl),
  },
};

export default NumberConvertPage;
