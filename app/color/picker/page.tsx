import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import ColorPicker from "./ColorPicker";

const ColorPickerPage = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Color Picker</CardTitle>
        <CardDescription>
          Select colors and convert between formats
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4">
        <ColorPicker />
      </CardContent>
    </Card>
  );
};

export const metadata: Metadata = {
  title: "Color Picker",
  description: "Select colors and convert between formats",
};

export default ColorPickerPage;
