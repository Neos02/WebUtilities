import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import RandomNumberGenerator from "./RandomNumberGenerator";

const title = "Random Number Generator";
const description = "Generate a random number within a specified range";

const NumberRandomPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <RandomNumberGenerator />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default NumberRandomPage;
