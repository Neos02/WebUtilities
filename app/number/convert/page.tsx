import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
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
      <CardContent className="flex flex-col items-start gap-4">
        <Converter />
      </CardContent>
    </Card>
  );
};

export const metadata: Metadata = {
  title: "Base Converter",
  description: "Convert numbers from one base to another",
};

export default NumberConvertPage;
