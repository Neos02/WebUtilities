"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";
import { FiCheck, FiClipboard } from "react-icons/fi";

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  result: string;
}

const ConverterFields = ({ input, setInput, result }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error(`Could not copy text: ${err}`));
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="relative w-full">
        <Textarea
          placeholder="Result"
          disabled
          className="!opacity-100 !cursor-text resize-none"
          value={result}
        />
        <Button
          className="absolute top-1 right-1 w-8 h-8"
          variant="ghost"
          size="icon"
          onClick={handleCopy}
        >
          {isCopied ? <FiCheck /> : <FiClipboard />}
        </Button>
      </div>
    </>
  );
};

export default ConverterFields;
