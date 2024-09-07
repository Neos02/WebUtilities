import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import WordCounter from "./WordCounter";
import { baseUrl } from "@/app/sitemap";

const { heading, subheading } = getPageHeadings("/text/count");

const TextCountPage = () => {
  return (
    <ToolLayout title={heading} description={subheading}>
      <WordCounter />
    </ToolLayout>
  );
};

const title = "Word Counter - Count Words, Characters, and More";
const description =
  "Instantly count words, characters, sentences, and more in your text. Our free online word counter tool provides detailed text statistics.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: new URL("/color/picker", baseUrl),
  },
};

export default TextCountPage;
