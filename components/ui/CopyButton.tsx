"use client";

import { FiCheck, FiClipboard } from "react-icons/fi";
import { Button, ButtonProps } from "./button";
import { useState } from "react";

interface Props {
  copyValue: string;
}

const CopyButton = ({ copyValue }: Props) => {
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
      className="absolute top-1 right-1 w-8 h-8"
      variant="ghost"
      size="icon"
      onClick={handleCopy}
    >
      {isCopied ? <FiCheck /> : <FiClipboard />}
    </Button>
  );
};

export default CopyButton;
