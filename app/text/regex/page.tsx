import { Page, pageDetails } from "@/app/navigation";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import CheatSheet from "./CheatSheet";
import RegexTester from "./RegexTester";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.RegexTester].label}
      description={pageDetails[Page.RegexTester].description}
    >
      <div className="flex flex-col gap-4">
        <RegexTester />
        <CheatSheet />
      </div>
    </ToolLayout>
  );
};

const title =
  "Regex Tester - Test and validate your regular expressions with ease";
const description =
  "Test and validate your regular expressions with our easy-to-use Regex Tester. Real-time matching and a handy cheatsheet included!";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(
      pageDetails[Page.RegexTester].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
  title,
  description,
  keywords: [
    "Regex",
    "Testing",
    "Realtime",
    "Cheatsheet",
    "Regular Expression",
  ],
  openGraph: {
    title,
    description,
    url: new URL(
      pageDetails[Page.RegexTester].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
};

export default page;
