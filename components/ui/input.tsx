import * as React from "react";

import { cn } from "@/lib/utils";
import CopyButton from "./CopyButton";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputWithCopy = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, value, onChange = () => {}, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState(value ?? "");

    return (
      <div className={cn("relative", className)}>
        <Input
          type={type}
          ref={ref}
          value={value}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e);
          }}
          {...props}
        />
        <CopyButton copyValue={inputValue.toString()} />
      </div>
    );
  }
);

export { Input, InputWithCopy };
