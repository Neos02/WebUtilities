import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import WordCounter from "./WordCounter";

const title = "Word Counter";
const description = "Count the number of words, characters, and sentences";

const TextCountPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <WordCounter />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default TextCountPage;
