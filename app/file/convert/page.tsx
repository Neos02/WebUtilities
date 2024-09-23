import { Page, pageDetails } from "@/app/navigation";
import ToolContainer from "@/components/layout/ToolContainer";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ImageConverter from "./ImageConverter";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.FileConverter].label}
      description={pageDetails[Page.FileConverter].description}
    >
      <ToolContainer>
        <ImageConverter />
      </ToolContainer>
    </ToolLayout>
  );
};

const title =
  "File Converter - Convert your files between different formats quickly and easily";
const description =
  "Convert your files between different formats quickly and easily. Support for JPG, PNG, and WEBP, with more coming soon!";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(
      pageDetails[Page.FileConverter].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
  title,
  description,
  keywords: ["File", "Convert", "Image", "Download", "Audio"],
  openGraph: {
    title,
    description,
    url: new URL(
      pageDetails[Page.FileConverter].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
};

export default page;
