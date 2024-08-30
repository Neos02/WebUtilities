"use client";

import { useEffect, useState } from "react";
import ConverterControls from "./ConverterControls";
import ConverterFields from "./ConverterFields";

export interface ConverterProps {
  from: string;
  to: string;
}

const Converter = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const [toBase, setToBase] = useState("16");

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
