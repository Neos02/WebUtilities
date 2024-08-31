import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RandomNumberGenerator from "./RandomNumberGenerator";
import { Metadata } from "next";

const NumberRandomPage = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Random Number Generator</CardTitle>
        <CardDescription>
          Generate a random number within a range
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4">
        <RandomNumberGenerator />
      </CardContent>
    </Card>
  );
};

export const metadata: Metadata = {
  title: "Random Number Generator",
  description: "Generate a random number within a range",
};

export default NumberRandomPage;
