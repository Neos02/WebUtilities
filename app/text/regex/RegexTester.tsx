"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import RegexInput from "./RegexInput";
import "./RegexTester.css";

const RegexTester = () => {
  const [pattern, setPattern] = useState("[A-Z0-9]\\w+");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  return (
    <ToolContainer className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="regexPattern">Expression</Label>
        <RegexInput
          id="regexPattern"
          pattern={pattern}
          flags={flags}
          onChange={(e) => setPattern(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="textInput">Text</Label>
        <Textarea
          id="textInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here"
          className="min-h-80 p-4 resize-none"
        />
      </div>
    </ToolContainer>
  );
};

export default RegexTester;
