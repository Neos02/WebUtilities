"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import RegexInput from "./RegexInput";
import "./RegexTester.css";
import RegexTestInput from "./RegexTestInput";

const RegexTester = () => {
  const [pattern, setPattern] = useState("\\w+");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState(
    "Edit the expression and text to see matches."
  );

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
            autoComplete="false"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="testInput">Text</Label>
        <RegexTestInput
          id="testInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here"
          pattern={pattern}
          flags={flags}
        />
      </div>
    </ToolContainer>
  );
};

export default RegexTester;
