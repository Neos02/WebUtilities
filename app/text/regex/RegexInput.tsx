import { Input, inputStyle } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { colorizeAll } from "regex-colorizer";

interface Props {
  pattern: string;
  flags: string;
  onChange: (value: string) => void;
}

const RegexInput = ({ pattern, flags, onChange }: Props) => {
  useEffect(() => {
    colorizeAll("regex");
  }, [pattern]);

  const formatRegex = (regex: string): string => {
    return `/${regex}/${flags}`;
  };

  return (
    <div className="relative">
      <code className={cn(inputStyle(), "regex")}>{formatRegex(pattern)}</code>
      <Input
        className="absolute top-0 left-0 pl-[calc(.75rem+1ch)] text-transparent caret-black bg-transparent font-mono font-bold border-0"
        value={pattern}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default RegexInput;
