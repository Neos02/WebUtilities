import { Page, pageDetails } from "@/app/navigation";
import ToolContainer from "@/components/layout/ToolContainer";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import RandomNumberGenerator from "./RandomNumberGenerator";

const NumberRandomPage = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.RandomNumberGenerator].label}
      description={pageDetails[Page.RandomNumberGenerator].description}
    >
      <ToolContainer>
        <RandomNumberGenerator />
      </ToolContainer>
    </ToolLayout>
  );
};

const title = "Random Number Generator - Generate Random Values";
const description =
  "Generate random numbers for games, statistics, or any other purpose. Customize ranges with our free online tool.";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(
      pageDetails[Page.RandomNumberGenerator].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
  title,
  description,
  keywords: ["Random", "Number", "Generator", "Integer", "Decimal"],
  openGraph: {
    title,
    description,
    url: new URL(
      pageDetails[Page.RandomNumberGenerator].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
};

export default NumberRandomPage;
