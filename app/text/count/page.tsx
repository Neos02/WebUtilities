import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCounter from "./WordCounter";
import { Metadata } from "next";

const TextCountPage = () => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>Word Counter</CardTitle>
        <CardDescription>
          Count the number of words, characters, and sentences
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4 flex-1">
        <WordCounter />
      </CardContent>
    </Card>
  );
};

export const metadata: Metadata = {
  title: "Word Counter",
  description: "Count the number of words, characters, and sentences",
};

export default TextCountPage;
