import { Page, pageDetails } from "@/app/navigation";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import Converter from "./Converter";

const NumberConvertPage = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.BaseConverter].label}
      description={pageDetails[Page.BaseConverter].description}
    >
      <Converter />
    </ToolLayout>
  );
};

const title = "Base Converter - Convert Numbers Between Different Bases";
const description =
  "Easily convert numbers between binary, decimal, hexadecimal, and more with our free online base converter tool. Fast, accurate, and user-friendly.";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(
      pageDetails[Page.BaseConverter].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
  title,
  description,
  keywords: ["Base", "Convert", "Binary", "Decimal", "Hexadecimal"],
  openGraph: {
    title,
    description,
    url: new URL(
      pageDetails[Page.BaseConverter].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
};

export default NumberConvertPage;
