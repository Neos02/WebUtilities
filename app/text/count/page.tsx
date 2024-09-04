import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import WordCounter from "./WordCounter";
import delay from "delay";

const title = "Word Counter";
const description = "Count the number of words, characters, and sentences";

const TextCountPage = async () => {
  await delay(2000);

  return (
    <ToolLayout title={title} description={description}>
      <WordCounter />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default TextCountPage;
