"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <CardContent className="flex flex-col items-start gap-5">
        <ColorPicker />
      </CardContent>
    </Card>
  );
};

export default ColorPickerPage;
