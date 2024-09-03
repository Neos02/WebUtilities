import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import Converter from "./Converter";

const title = "Base Converter";
const description = "Convert numbers from one base to another";

const NumberConvertPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <Converter />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default NumberConvertPage;
