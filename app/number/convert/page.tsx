import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ConverterControls from "./ConverterControls";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NumberConvertPage = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Base Converter</CardTitle>
        <CardDescription>Base 2 to Base 10</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-5">
        <ConverterControls min={2} max={36} />
        <Input type="number" placeholder="Input" />
        <Textarea
          placeholder="Result"
          disabled
          className="!opacity-100 !cursor-text resize-none"
        />
      </CardContent>
    </Card>
  );
};

export default NumberConvertPage;
