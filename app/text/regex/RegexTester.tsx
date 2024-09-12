"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Input, inputStyle } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import RegexInput from "./RegexInput";
import "./RegexTester.css";

type ResultRange = {
  start: number;
  end: number;
  isMatch: boolean;
};

const RegexTester = () => {
  const [pattern, setPattern] = useState("\\w+");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState(
    "Edit the expression and text to see matches."
  );
  const [results, setResults] = useState<ResultRange[]>([]);

  useEffect(() => {
    const matches = [];
    let re, match;

    try {
      re = new RegExp(pattern, flags);
    } catch (err) {
      console.error("Error in regex");
      return;
    }

    while ((match = re.exec(text)) != null) {
      matches.push(match);
    }

    const matchRanges: ResultRange[] = [];

    if (!matches.length) {
      matchRanges.push({ start: 0, end: text.length, isMatch: false });
    }

    for (const match of matches) {
      matchRanges.push({
        start: match.index,
        end: match.index + match[0].length,
        isMatch: true,
      });
    }

    const ranges: ResultRange[] = [matchRanges[0]];

    for (let i = 1; i < matchRanges.length; i++) {
      // Add strings between matches
      if (matchRanges[i].start !== matchRanges[i - 1].end) {
        ranges.push({
          start: matchRanges[i - 1].end,
          end: matchRanges[i].start,
          isMatch: false,
        });
      }

      ranges.push(matchRanges[i]);
    }

    // Add string before first match if it exists
    if (matchRanges[0].start !== 0) {
      ranges.unshift({
        start: 0,
        end: matchRanges[0].start - 1,
        isMatch: false,
      });
    }

    // Add string after last match if it exists
    if (matchRanges[matchRanges.length - 1].end !== text.length) {
      ranges.push({
        start: matchRanges[matchRanges.length - 1].end,
        end: text.length,
        isMatch: false,
      });
    }
    setResults(ranges);
  }, [pattern, flags, text, setResults]);

  return (
    <ToolContainer className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="pattern">Expression</Label>
          <RegexInput
            id="pattern"
            pattern={pattern}
            flags={flags}
            onChange={(e) => setPattern(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-28">
          <Label htmlFor="flags">Flags</Label>
          <Input
            id="flags"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="textInput">Text</Label>
        <div className={"relative grid h-80 max-h-80 overflow-scroll"}>
          <div
            className={cn(
              inputStyle(),
              "col-start-1 col-end-2 row-start-1 row-end-2 block w-full h-auto whitespace-pre-wrap"
            )}
          >
            {results.map((result) => (
              <span className={cn(result.isMatch && "match")}>
                {text.substring(result.start, result.end)}
              </span>
            ))}
          </div>
          <Textarea
            id="textInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here"
            className="h-auto resize-none bg-transparent text-transparent caret-black col-start-1 col-end-2 row-start-1 row-end-2"
          />
        </div>
      </div>
    </ToolContainer>
  );
};

export default RegexTester;
