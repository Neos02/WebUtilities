"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Textarea } from "@/components/ui/textarea";
import { Type } from "lucide-react";
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
    <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      <ToolContainer className="!p-0">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here"
          className="border-none min-h-80 p-4 resize-none"
        />
      </ToolContainer>
      <div className="grid gap-4 md:grid-cols-2">
        {results.map((result) => (
          <ToolContainer
            key={result.label}
            className="flex flex-col gap-2 !p-4"
          >
            <div className="flex flex-row justify-between">
              <span className="text-sm font-medium">{result.label}</span>
              <Type className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold">{result.countFunction()}</div>
          </ToolContainer>
        ))}
        <ToolContainer className="flex flex-col gap-2 !p-4">
          <div className="flex flex-row justify-between">
            <span className="text-sm font-medium">Top Words</span>
            <Type className="w-4 h-4" />
          </div>
          {text ? (
            <ul className="text-sm">
              {Object.entries(mostCommonwords(text.toLowerCase())).map(
                ([word, count]) => (
                  <li key={word} className="flex justify-between">
                    <span>{word}</span>
                    <span>{count}</span>
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">Start typing to get started</p>
          )}
          <div className="text-2xl font-bold"></div>
        </ToolContainer>
      </div>
    </div>
  );
};

export default WordCounter;
