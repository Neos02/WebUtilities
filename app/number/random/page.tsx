import { Page, pageDetails } from "@/app/navigation";
import { baseUrl } from "@/app/sitemap";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import RandomNumberGenerator from "./RandomNumberGenerator";

const NumberRandomPage = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.RandomNumberGenerator].label}
      description={pageDetails[Page.RandomNumberGenerator].description}
    >
      <RandomNumberGenerator />
    </ToolLayout>
  );
};

const title = "Random Number Generator - Generate Random Values";
const description =
  "Generate random numbers for games, statistics, or any other purpose. Customize ranges with our free online tool.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: new URL("/color/picker", baseUrl),
  },
};

export default NumberRandomPage;
