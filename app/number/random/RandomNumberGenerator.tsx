"use client";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/CopyButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

enum NumberType {
  INTEGER = "Integer",
  DECIMAL = "Decimal",
}

const RandomNumberGenerator = () => {
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("100");
  const [random, setRandom] = useState("0");
  const [type, setType] = useState(NumberType.INTEGER);

  const processNumbers = () => {
    const minInt = parseInt(min);
    const maxInt = parseInt(max);

    setMin(
      Math.min(
        Math.max(minInt, Number.MIN_SAFE_INTEGER),
        Number.MAX_SAFE_INTEGER
      ).toString()
    );
    setMax(
      Math.min(
        Math.max(maxInt, Number.MIN_SAFE_INTEGER),
        Number.MAX_SAFE_INTEGER
      ).toString()
    );

    if (type === NumberType.INTEGER && minInt < maxInt + 1) {
      return;
    }

    if (type === NumberType.DECIMAL && parseFloat(min) < parseFloat(max)) {
      return;
    }

    const temp = min;
    setMin(max);
    setMax(temp);
  };

  const generateRandomInt = () => {
    const minCeiled = Math.ceil(parseInt(min));
    const maxFloored = Math.floor(parseInt(max) + 1);

    setRandom(
      Math.floor(
        Math.random() * (maxFloored - minCeiled) + minCeiled
      ).toString()
    );
  };

  const generateRandomFloat = () => {
    const minNumber = parseFloat(min);
    const maxNumber = parseFloat(max);

    setRandom((Math.random() * (maxNumber - minNumber) + minNumber).toString());
  };

  const generateRandom = () => {
    processNumbers();

    switch (type) {
      case NumberType.INTEGER:
        return generateRandomInt();
      case NumberType.DECIMAL:
        return generateRandomFloat();
    }
  };

  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Input
              type="number"
              placeholder="Minimum"
              min={Number.MIN_SAFE_INTEGER}
              max={max}
              className="md:w-44"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
            <span className="hidden md:block">To</span>
            <Input
              type="number"
              placeholder="Maximum"
              min={min}
              max={Number.MAX_SAFE_INTEGER - 1}
              className="md:w-44"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <Select
            value={type}
            onValueChange={(value: NumberType) => setType(value)}
          >
            <SelectTrigger className="md:w-32">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(NumberType).map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="relative w-full">
        <h1 className="w-full p-2 font-bold rounded-lg border text-[2.5rem] overflow-x-scroll">
          {random}
        </h1>
        <CopyButton copyValue={random} />
      </div>
      <Button onClick={generateRandom}>Generate</Button>
    </>
  );
};

export default RandomNumberGenerator;
