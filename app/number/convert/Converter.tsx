"use client";

import { useEffect, useState } from "react";
import ConverterControls from "./ConverterControls";
import ConverterFields from "./ConverterFields";

export interface ConverterProps {
  from: string;
  to: string;
}

const defaultFrom = "10";
const defaultTo = "16";

const Converter = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [fromBase, setFromBase] = useState(defaultFrom);
  const [toBase, setToBase] = useState(defaultTo);

  const convert = () => {
    const converted = parseInt(input, parseInt(fromBase)).toString(
      parseInt(toBase)
    );

    setResult(converted && converted != NaN.toString() ? converted : "");
  };

  const handleSwap = () => {
    const tempBase = fromBase;
    const tempInput = input;

    setFromBase(toBase);
    setToBase(tempBase);
    setInput(result);
    setResult(tempInput);
  };

  const reset = () => {
    setInput("");
    setFromBase(defaultFrom);
    setToBase(defaultTo);
  };

  useEffect(() => {
    convert();
  }, [input, fromBase, toBase]);

  return (
    <>
      <ConverterControls
        min={2}
        max={36}
        from={fromBase}
        setFrom={setFromBase}
        to={toBase}
        setTo={setToBase}
        handleSwap={handleSwap}
        handleReset={reset}
      />
      <ConverterFields
        input={input}
        setInput={setInput}
        result={result}
        from={fromBase}
        to={toBase}
      />
    </>
  );
};

export default Converter;
