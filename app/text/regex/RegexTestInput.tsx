"use client";

import { inputStyle } from "@/components/ui/input";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Result = {
  start: number;
  end: number;
  isMatch: boolean;
};

interface Props extends TextareaProps {
  value: string;
  pattern: string;
  flags: string;
}

const RegexTestInput = ({
  value,
  pattern,
  flags,
  className,
  ...props
}: Props) => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const matches = [];
    let re, match;

    try {
      re = new RegExp(pattern, flags);
    } catch (err) {
      console.error("Error in regex");
      return;
    }

    while ((match = re.exec(value)) != null) {
      matches.push(match);
    }

    const matchRanges: Result[] = [];

    if (!matches.length) {
      matchRanges.push({ start: 0, end: value.length, isMatch: false });
    }

    for (const match of matches) {
      matchRanges.push({
        start: match.index,
        end: match.index + match[0].length,
        isMatch: true,
      });
    }

    const ranges: Result[] = [matchRanges[0]];

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
    if (matchRanges[matchRanges.length - 1].end !== value.length) {
      ranges.push({
        start: matchRanges[matchRanges.length - 1].end,
        end: value.length,
        isMatch: false,
      });
    }
    setResults(ranges);
  }, [pattern, flags, value, setResults]);

  return (
    <div className={className}>
      <div className={"relative grid h-80 max-h-80 overflow-scroll"}>
        <div
          className={cn(
            inputStyle(),
            "col-start-1 col-end-2 row-start-1 row-end-2 block w-full h-auto whitespace-pre-wrap"
          )}
        >
          {results.map((result) => (
            <span
              key={result.start}
              className={cn(result.isMatch && "bg-primary/25")}
            >
              {value.substring(result.start, result.end)}
            </span>
          ))}
        </div>
        <Textarea
          className="h-auto resize-none bg-transparent text-transparent caret-black col-start-1 col-end-2 row-start-1 row-end-2"
          value={value}
          {...props}
        />
      </div>
    </div>
  );
};

export default RegexTestInput;
