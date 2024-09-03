import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";

const title = "Color Picker";
const description = "Select colors and convert between formats";

const ColorPickerPage = () => {
  return (
    <ToolLayout title={title} description={description}>
      <ColorPicker />
    </ToolLayout>
  );
};

export const metadata: Metadata = { title, description };

export default ColorPickerPage;
