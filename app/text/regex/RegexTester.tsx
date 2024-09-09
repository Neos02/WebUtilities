"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Input, inputStyle } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { colorizeAll } from "regex-colorizer";
import "./RegexTester.css";

const RegexTester = () => {
  const [pattern, setPattern] = useState("[A-Z0-9]\\w+");
  const [flags, setFlags] = useState("g");

  useEffect(() => {
    colorizeAll("regex");
  }, [pattern]);

  const formatRegex = (regex: string): string => {
    return `/${regex}/${flags}`;
  };

  return (
    <ToolContainer>
      <div className="relative">
        <code className={cn(inputStyle(), "regex")}>
          {formatRegex(pattern)}
        </code>
        <Input
          className="absolute top-0 left-0 pl-[calc(.75rem+1ch)] text-transparent caret-black bg-transparent font-mono font-bold border-0"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        />
      </div>
    </ToolContainer>
  );
};

export default RegexTester;
