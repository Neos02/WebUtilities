"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { charCount, mostCommonwords, senCount, wordCount } from "text-count";

const WordCounter = () => {
  const [text, setText] = useState("");

  const results: { label: string; countFunction: () => number }[] = [
    { label: "Characters", countFunction: () => charCount(text) },
    { label: "Words", countFunction: () => wordCount(text) },
    { label: "Sentences", countFunction: () => senCount(text) },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 w-full flex-1">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here"
        className="w-auto flex-1 h-80 md:h-auto resize-none"
      />
      <div className="flex flex-col gap-2 whitespace-nowrap md:w-48">
        <h1 className="font-bold">Results</h1>
        {results.map((result) => (
          <Badge key={result.label} className="flex justify-between px-2 py-1">
            <span>{result.label}</span>
            <span>{result.countFunction()}</span>
          </Badge>
        ))}
        <Separator />
        <h1 className="font-bold">Top Words</h1>
        {text ? (
          Object.entries(mostCommonwords(text)).map(([word, count]) => (
            <Badge key={word} className="flex justify-between px-2 py-1">
              <span>{word}</span>
              <span>{count}</span>
            </Badge>
          ))
        ) : (
          <p className="pt-2 text-center text-sm">
            Start typing to get started
          </p>
        )}
      </div>
    </div>
  );
};

export default WordCounter;
