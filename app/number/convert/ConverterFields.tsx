"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction } from "react";
import { ConverterProps } from "./Converter";

interface Props extends ConverterProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  result: string;
}

const ConverterFields = ({ from, to, input, setInput, result }: Props) => {
  return (
    <>
      <Input
        type="text"
        placeholder="Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Textarea
        placeholder="Result"
        disabled
        className="!opacity-100 !cursor-text resize-none"
        value={result}
      />
    </>
  );
};

export default ConverterFields;
