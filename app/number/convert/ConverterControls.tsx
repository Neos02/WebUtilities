"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { ConverterProps } from "./Converter";

interface Props extends ConverterProps {
  min: number;
  max: number;
  setFrom: Dispatch<SetStateAction<string>>;
  setTo: Dispatch<SetStateAction<string>>;
  handleSwap: () => void;
  handleReset: () => void;
}

const ConverterControls = ({
  min,
  max,
  from,
  setFrom,
  to,
  setTo,
  handleSwap,
  handleReset,
}: Props) => {
  const bases = new Array(max - min + 1).fill(0).map((_, i) => i + min);

  return (
    <div className="inline-flex justify-between items-center gap-4">
      <Select onValueChange={(value) => setFrom(value)} value={from}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Base" />
        </SelectTrigger>
        <SelectContent>
          {bases.map((base) => (
            <SelectItem key={base} value={`${base}`}>
              Base {base}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span>To</span>
      <Select onValueChange={(value) => setTo(value)} value={to}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Base" />
        </SelectTrigger>
        <SelectContent>
          {bases.map((base) => (
            <SelectItem key={base} value={`${base}`}>
              Base {base}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="secondary" onClick={handleSwap}>
        Swap
      </Button>
      <Button variant="secondary" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default ConverterControls;
