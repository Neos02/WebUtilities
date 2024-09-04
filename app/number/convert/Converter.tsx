"use client";

import { Button } from "@/components/ui/button";
import { Input, InputWithCopy } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

const defaultFrom = "10";
const defaultTo = "16";

const maxBase = 36;
const minBase = 2;
const bases = new Array(maxBase - minBase + 1)
  .fill(0)
  .map((_, i) => i + minBase);

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

  const swapBases = () => {
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
    <div className="flex flex-col gap-2 max-w-2xl mx-auto">
      <div className="flex flex-col gap-2">
        <Label htmlFor="inputNumber">Input Number</Label>
        <Input
          id="inputNumber"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <Label htmlFor="inputBase">From Base</Label>
          <Select value={fromBase} onValueChange={setFromBase}>
            <SelectTrigger id="inputBase">
              <SelectValue placeholder="Select base" />
            </SelectTrigger>
            <SelectContent>
              {bases.map((base) => (
                <SelectItem key={base} value={base.toString()}>
                  Base {base}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="outputBase">To Base</Label>
          <Select value={toBase} onValueChange={setToBase}>
            <SelectTrigger id="outputBase">
              <SelectValue placeholder="Select base" />
            </SelectTrigger>
            <SelectContent>
              {bases.map((base) => (
                <SelectItem key={base} value={base.toString()}>
                  Base {base}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="outputNumber">Result</Label>
        <InputWithCopy
          id="outputNumber"
          value={result}
          readOnly
          placeholder="Conversion result"
        />
      </div>
      <div className="flex gap-4 mt-2">
        <Button onClick={swapBases} variant="outline" className="flex-1">
          <ArrowLeftRight className="h-4 w-4 mr-2" />
          <span>Swap Bases</span>
        </Button>
        <Button onClick={reset} variant="outline" className="flex-1">
          <RotateCcw className="h-4 w-4 mr-2" />
          <span>Clear</span>
        </Button>
      </div>
    </div>
  );
};

export default Converter;
