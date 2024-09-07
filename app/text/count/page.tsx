import { Page, pageDetails } from "@/app/navigation";
import { baseUrl } from "@/app/sitemap";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import WordCounter from "./WordCounter";

const TextCountPage = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.WordCounter].label}
      description={pageDetails[Page.WordCounter].description}
    >
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
