import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import delay from "delay";
import ColorPicker from "./ColorPicker";

const ColorPickerPage = async () => {
  await delay(2000);

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

export default ColorPickerPage;
