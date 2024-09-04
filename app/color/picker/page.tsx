import { getPageMetadata } from "@/app/Navbar";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";

const { title, description } = getPageMetadata("/color/picker");

const ColorPickerPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <ColorPicker />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default ColorPickerPage;
