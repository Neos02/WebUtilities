import { Page, pageDetails } from "@/app/navigation";
import ToolContainer from "@/components/layout/ToolContainer";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ImageConverter from "./ImageConverter";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.ImageConverter].label}
      description={pageDetails[Page.ImageConverter].description}
    >
      <ToolContainer>
        <ImageConverter />
      </ToolContainer>
    </ToolLayout>
  );
};

const title =
  "Image Converter - Convert your images between different formats quickly and easily";
const description =
  "Convert your images between different formats quickly and easily. Support for JPG, PNG, and WEBP!";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(
      pageDetails[Page.ImageConverter].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
  title,
  description,
  keywords: ["File", "Convert", "Image", "Download", "png"],
  openGraph: {
    title,
    description,
    url: new URL(
      pageDetails[Page.ImageConverter].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
};

export default page;
