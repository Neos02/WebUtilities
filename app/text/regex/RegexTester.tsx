"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import RegexInput from "./RegexInput";
import RegexTestInput from "./RegexTestInput";
import "./RegexTester.css";

type Flag = {
  label: string;
  value: string;
  isActive: boolean;
};

const RegexTester = () => {
  const [pattern, setPattern] = useState("\\w+");
  const [flags, setFlags] = useState<Flag[]>([
    { label: "Global", value: "g", isActive: true },
    { label: "Case Insensitive", value: "i", isActive: false },
    { label: "Multiline", value: "m", isActive: false },
    { label: "Dotall", value: "s", isActive: false },
    { label: "Unicode", value: "u", isActive: false },
    { label: "Sticky", value: "y", isActive: false },
  ]);
  const [text, setText] = useState(
    "Edit the expression and text to see matches."
  );

  const formatFlags = () => {
    return flags
      .filter((flag) => flag.isActive)
      .map((flag) => flag.value)
      .join("");
  };

  return (
    <ToolContainer className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="pattern">Expression</Label>
          <RegexInput
            id="pattern"
            pattern={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-28">
          <Label htmlFor="flags">Flags</Label>
          <DropdownMenu>
            <DropdownMenuTrigger id="flags" asChild>
              <Button
                variant="outline"
                className="flex justify-between items-center text-foreground"
              >
                {formatFlags() ? (
                  <span>{formatFlags()}</span>
                ) : (
                  <span className="text-muted-foreground">Select</span>
                )}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {flags.map((flag) => (
                <DropdownMenuCheckboxItem
                  key={flag.label}
                  checked={flag.isActive}
                  onSelect={(e) => e.preventDefault()}
                  className="cursor-pointer"
                  onCheckedChange={() =>
                    setFlags((prevFlags) =>
                      prevFlags.map((f) =>
                        f === flag ? { ...f, isActive: !flag.isActive } : f
                      )
                    )
                  }
                >
                  <div className="flex-1 flex justify-between items-center gap-4">
                    <span>{flag.label}</span>
                    <span className="py-0.5 px-1 rounded-sm bg-primary/10 font-mono">
                      {flag.value}
                    </span>
                  </div>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
          flags={formatFlags()}
        />
      </div>
    </ToolContainer>
  );
};

export default RegexTester;
