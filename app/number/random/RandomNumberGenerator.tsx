"use client";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/CopyButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import MinMaxInputs from "./MinMaxInputs";
import { Dice5, Dices } from "lucide-react";

enum NumberType {
  INTEGER = "Integer",
  DECIMAL = "Decimal",
}

const RandomNumberGenerator = () => {
  const [min, setMin] = useState("0");
  const [max, setMax] = useState("100");
  const [random, setRandom] = useState<string | null>(null);
  const [numberType, setNumberType] = useState(NumberType.INTEGER);
  const [decimalPlaces, setDecimalPlaces] = useState("2");

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

    if (numberType === NumberType.INTEGER && minInt < maxInt + 1) {
      return;
    }

    if (
      numberType === NumberType.DECIMAL &&
      parseFloat(min) < parseFloat(max)
    ) {
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

    setRandom(
      (Math.random() * (maxNumber - minNumber) + minNumber)
        .toFixed(parseInt(decimalPlaces))
        .toString()
    );
  };

  const generateRandom = () => {
    processNumbers();

    switch (numberType) {
      case NumberType.INTEGER:
        return generateRandomInt();
      case NumberType.DECIMAL:
        return generateRandomFloat();
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      <Tabs
        defaultValue={numberType}
        onValueChange={(value) => setNumberType(value as NumberType)}
        className="space-y-4"
      >
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value={NumberType.INTEGER}>
            {NumberType.INTEGER}
          </TabsTrigger>
          <TabsTrigger value={NumberType.DECIMAL}>
            {NumberType.DECIMAL}
          </TabsTrigger>
        </TabsList>
        <TabsContent value={NumberType.INTEGER}>
          <MinMaxInputs min={min} setMin={setMin} max={max} setMax={setMax} />
        </TabsContent>
        <TabsContent value={NumberType.DECIMAL}>
          <div className="space-y-4">
            <MinMaxInputs min={min} setMin={setMin} max={max} setMax={setMax} />
            <div className="space-y-2">
              <Label htmlFor="decimalPlaces">Decimal Places</Label>
              <Input
                id="decimalPlaces"
                type="number"
                min="0"
                max="10"
                value={decimalPlaces}
                onChange={(e) => setDecimalPlaces(e.target.value)}
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Button onClick={generateRandom}>
        <Dices className="w-4 h-4 mr-2" />
        <span>Generate Number</span>
      </Button>

      <div className="p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-bold">Generated Number</h2>
        {random ? (
          <p className="text-4xl font-mono">{random}</p>
        ) : (
          <p className="text-gray-500">
            Click "Generate Number" to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
