import { getPageMetadata } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import WordCounter from "./WordCounter";

const { title, description } = getPageMetadata("/text/count");

const TextCountPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <WordCounter />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default TextCountPage;
