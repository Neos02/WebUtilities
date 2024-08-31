import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCounter from "./WordCounter";

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

export default TextCountPage;
