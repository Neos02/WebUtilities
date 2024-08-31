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
    if (type === NumberType.INTEGER && parseInt(min) < parseInt(max) + 1) {
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
      <div className="flex gap-4">
        <div className="flex justify-between items-center gap-4">
          <Input
            type="number"
            placeholder="Minimum"
            min={Number.MIN_SAFE_INTEGER}
            max={max}
            className="w-32"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <span>To</span>
          <Input
            type="number"
            placeholder="Maximum"
            min={min}
            max={Number.MAX_SAFE_INTEGER - 1}
            className="w-32"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <Select
            value={type}
            onValueChange={(value: NumberType) => setType(value)}
          >
            <SelectTrigger className="w-32">
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
        <h1 className="w-full p-2 font-bold rounded-lg border text-[2.5rem]">
          {random}
        </h1>
        <CopyButton copyValue={random} />
      </div>
      <Button onClick={generateRandom}>Generate</Button>
    </>
  );
};

export default RandomNumberGenerator;
