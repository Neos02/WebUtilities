import { getPageMetadata } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import Converter from "./Converter";

const { title, description } = getPageMetadata("/number/convert");

const NumberConvertPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <Converter />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default NumberConvertPage;
