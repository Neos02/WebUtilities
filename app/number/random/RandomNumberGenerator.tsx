"use client";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/CopyButton";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const RandomNumberGenerator = () => {
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("100");
  const [random, setRandom] = useState("0");

  const generateRandomInt = () => {
    const minCeiled = Math.ceil(parseInt(min));
    const maxFloored = Math.floor(parseInt(max) + 1);

    setRandom(
      Math.floor(
        Math.random() * (maxFloored - minCeiled) + minCeiled
      ).toString()
    );
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <Input
          type="number"
          placeholder="Minimum"
          min={Number.MIN_SAFE_INTEGER}
          max={Number.MAX_SAFE_INTEGER - 1}
          className="w-32"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <span>To</span>
        <Input
          type="number"
          placeholder="Maximum"
          min={Number.MIN_SAFE_INTEGER}
          max={Number.MAX_SAFE_INTEGER - 1}
          className="w-32"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <div className="relative w-full">
        <h1 className="w-full p-2 font-bold rounded-lg border text-[3rem]">
          {random}
        </h1>
        <CopyButton copyValue={random} />
      </div>
      <Button onClick={generateRandomInt}>Generate</Button>
    </>
  );
};

export default RandomNumberGenerator;
