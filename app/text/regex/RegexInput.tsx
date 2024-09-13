import { Input, inputStyle } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChangeEvent, useEffect } from "react";
import { colorizeAll } from "regex-colorizer";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  pattern: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RegexInput = ({ pattern, onChange, ...props }: Props) => {
  useEffect(() => {
    colorizeAll("regex");
  }, [pattern]);

  return (
    <div className="relative">
      <code className={cn(inputStyle(), "regex")}>{pattern}</code>
      <Input
        className="absolute top-0 left-0 text-transparent caret-black bg-transparent font-mono font-bold border-0"
        value={pattern}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default RegexInput;
