import { getPageMetadata } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import RandomNumberGenerator from "./RandomNumberGenerator";

const { title, description } = getPageMetadata("/number/random");

const NumberRandomPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <RandomNumberGenerator />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default NumberRandomPage;
