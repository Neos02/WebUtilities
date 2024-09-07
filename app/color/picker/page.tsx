import { Page, pageDetails } from "@/app/navigation";
import ToolContainer from "@/components/layout/ToolContainer";
import ToolLayout from "@/components/layout/ToolLayout";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";

const ColorPickerPage = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.ColorPicker].label}
      description={pageDetails[Page.ColorPicker].description}
    >
      <ToolContainer>
        <ColorPicker />
      </ToolContainer>
    </ToolLayout>
  );
};

const title = "Color Picker - Choose, Convert, and Explore Colors";
const description =
  "Find the perfect color for your project. Our color picker tool lets you select, convert between formats, and explore color palettes with ease.";

export const metadata: Metadata = {
  alternates: {
    canonical: new URL(
      pageDetails[Page.ColorPicker].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
  title,
  description,
  keywords: ["Color", "Picker", "Hex", "RGB", "HSV"],
  openGraph: {
    title,
    description,
    url: new URL(
      pageDetails[Page.ColorPicker].href,
      process.env.NEXT_PUBLIC_URL
    ),
  },
};

export default ColorPickerPage;
