import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import WordCounter from "./WordCounter";

const { title, description } = getPageHeadings("/text/count");

const TextCountPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <WordCounter />
    </ToolLayout>
  );
};

export const metadata: Metadata = {
  title: "Word Counter - Count Words, Characters, and More",
  description:
    "Instantly count words, characters, sentences, and more in your text. Our free online word counter tool provides detailed text statistics.",
};

export default TextCountPage;
