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
import Converter from "./Converter";

interface Props {
  searchParams: { from: string; to: string };
}

const NumberConvertPage = ({ searchParams }: Props) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Base Converter</CardTitle>
        <CardDescription>
          {searchParams.to && searchParams.from
            ? `Base ${searchParams.from} to Base ${searchParams.to}`
            : "Select Two Bases"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-5">
        <ConverterControls min={2} max={36} />
        <Converter />
      </CardContent>
    </Card>
  );
};

export default NumberConvertPage;
