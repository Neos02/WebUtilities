import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Converter from "./Converter";

const NumberConvertPage = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Base Converter</CardTitle>
        <CardDescription>
          Convert numbers from one base to another
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-5">
        <Converter />
      </CardContent>
    </Card>
  );
};

export default NumberConvertPage;
