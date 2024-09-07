import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";
import { baseUrl } from "@/app/sitemap";

const { heading, subheading } = getPageHeadings("/color/picker");

const ColorPickerPage = () => {
  return (
    <ToolLayout title={heading} description={subheading}>
      <ColorPicker />
    </ToolLayout>
  );
};

const title = "Color Picker - Choose, Convert, and Explore Colors";
const description =
  "Find the perfect color for your project. Our color picker tool lets you select, convert between formats, and explore color palettes with ease.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: new URL("/color/picker", baseUrl),
  },
};

export default ColorPickerPage;
