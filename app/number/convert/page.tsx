import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import Converter from "./Converter";

const { title, description } = getPageHeadings("/number/convert");

const NumberConvertPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <Converter />
    </ToolLayout>
  );
};

export const metadata: Metadata = {
  title: "Base Converter - Convert Numbers Between Different Bases",
  description:
    "Easily convert numbers between binary, decimal, hexadecimal, and more with our free online base converter tool. Fast, accurate, and user-friendly.",
};

export default NumberConvertPage;
