"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Converter = () => {
  const searchParams = useSearchParams();
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    if (!searchParams.get("from") || !searchParams.get("to")) return;

    const from = parseInt(searchParams.get("from")!);
    const to = parseInt(searchParams.get("to")!);

    const converted = parseInt(input, from).toString(to);

    setResult(converted && converted != NaN.toString() ? converted : "");
  };

  useEffect(() => {
    convert();
  }, [input, searchParams]);

  return (
    <>
      <Input
        type="text"
        placeholder="Input"
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

export default Converter;
