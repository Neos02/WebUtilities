"use client";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/CopyButton";
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
        <CopyButton copyValue={result} />
      </div>
    </>
  );
};

export default ConverterFields;
