"use client";

import { FiCheck, FiClipboard } from "react-icons/fi";
import { Button, ButtonProps } from "./button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonProps {
  copyValue: string;
}

const CopyButton = ({
  copyValue,
  className,
  onClick = () => {},
  ...props
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    navigator.clipboard
      .writeText(copyValue)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error(`Could not copy text: ${err}`));
  };

  return (
    <Button
      className={cn("absolute top-1 right-1 w-8 h-8", className)}
      variant="ghost"
      size="icon"
      onClick={(e) => {
        handleCopy();
        onClick(e);
      }}
      {...props}
    >
      {isCopied ? <FiCheck /> : <FiClipboard />}
    </Button>
  );
};

export default CopyButton;
