import ToolContainer from "@/components/layout/ToolContainer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";

type CheatSheetItem = {
  label: string;
  description: string;
};

const cheatSheatItems: { label: string; items: CheatSheetItem[] }[] = [
  {
    label: "Characters",
    items: [
      { label: ".", description: "any character except newline" },
      { label: "\\w \\d \\s", description: "word, digit, whitespace" },
      { label: "\\W \\D \\S", description: "not word, digit, whitespace" },
      { label: "[abc]", description: "any of a, b, or c" },
      { label: "[^abc]", description: "not a, b, or c" },
      { label: "[a-g]", description: "character between a and g" },
    ],
  },
  {
    label: "Anchors",
    items: [
      { label: "^abc$", description: "start / end of the string" },
      { label: "\\b \\B", description: "word boundary, not word boundary" },
    ],
  },
  {
    label: "Escaped Characters",
    items: [
      { label: "\\. \\* \\", description: "escaped special characters" },
      { label: "\\t \\n \\r", description: "tab, linefeed, carriage return" },
    ],
  },
  {
    label: "Groups and Lookaround",
    items: [
      { label: "(abc)", description: "capture group" },
      { label: "\\1", description: "backreference to group #1" },
      { label: "(?:abc)", description: "non-capturing group" },
      { label: "(?=abc)", description: "positive lookahead" },
      { label: "(?!abc)", description: "negative lookahead" },
    ],
  },
  {
    label: "Quantifiers and Alternation",
    items: [
      { label: "a* a+ a?", description: "0 or more, 1 or more, 0 or 1" },
      { label: "a{5} a{2,}", description: "exactly 5, two or more" },
      { label: "a{1, 3}", description: "between 1 and 3" },
      { label: "a+? a{2,}?", description: "match as few as possible" },
      { label: "ab|cd", description: "match ab or cd" },
    ],
  },
];

const CheatSheet = () => {
  return (
    <ToolContainer>
      <Collapsible>
        <CollapsibleTrigger className="flex justify-between items-center w-full">
          <h1 className="font-bold font-lg">Cheatsheet</h1>
          <ChevronDown className="w-5 h-5" />
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-4 mt-4">
          {cheatSheatItems.map((cheatSheatItem) => (
            <div key={cheatSheatItem.label} className="flex flex-col gap-2">
              <h1 className="p-1 rounded-sm bg-accent text-primary font-bold text-center">
                {cheatSheatItem.label}
              </h1>
              <div className="grid grid-cols-[max-content_auto] justify-between gap-1">
                {cheatSheatItem.items.map((item) => (
                  <Fragment key={item.label}>
                    <span className="inline-block w-max py-0.5 px-1 rounded-sm bg-accent font-mono">
                      {item.label}
                    </span>
                    <span>{item.description}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </ToolContainer>
  );
};

export default CheatSheet;
