import { getPageHeadings } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";

const { title, description } = getPageHeadings("/color/picker");

const ColorPickerPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <ColorPicker />
    </ToolLayout>
  );
};

export const metadata: Metadata = {
  title: "Color Picker - Choose, Convert, and Explore Colors",
  description:
    "Find the perfect color for your project. Our color picker tool lets you select, convert between formats, and explore color palettes with ease.",
};

export default ColorPickerPage;
