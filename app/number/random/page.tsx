import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import RandomNumberGenerator from "./RandomNumberGenerator";

const { title, description } = getPageHeadings("/number/random");

const NumberRandomPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <RandomNumberGenerator />
    </ToolLayout>
  );
};

export const metadata: Metadata = {
  title: "Random Number Generator - Generate Random Values",
  description:
    "Generate random numbers for games, statistics, or any other purpose. Customize ranges with our free online tool.",
};

export default NumberRandomPage;
