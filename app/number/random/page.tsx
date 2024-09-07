import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import RandomNumberGenerator from "./RandomNumberGenerator";
import { baseUrl } from "@/app/sitemap";

const { heading, subheading } = getPageHeadings("/number/random");

const NumberRandomPage = () => {
  return (
    <ToolLayout title={heading} description={subheading}>
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
