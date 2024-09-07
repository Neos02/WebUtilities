import { Page, pageDetails } from "@/app/navigation";
import { baseUrl } from "@/app/sitemap";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";

const ColorPickerPage = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.ColorPicker].label}
      description={pageDetails[Page.ColorPicker].description}
    >
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
