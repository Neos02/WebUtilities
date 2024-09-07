"use client";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/CopyButton";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dices } from "lucide-react";
import { useState } from "react";
import MinMaxInputs from "./MinMaxInputs";

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
  const [error, setError] = useState("");

  const generateNumber = () => {
    setError("");

    const minNum = parseFloat(min);
    const maxNum = parseFloat(max);
    const decimalPlacesNum = parseInt(decimalPlaces);

    if (isNaN(minNum) || isNaN(maxNum)) {
      return setError("Please enter valid numbers");
    }

    if (minNum > maxNum) {
      return setError("Maximum must be greater than minimum");
    }

    if (
      isNaN(decimalPlacesNum) ||
      decimalPlacesNum < 0 ||
      decimalPlacesNum > 100
    ) {
      return setError("Decimal places must be a number between 0 and 100");
    }

    switch (numberType) {
      default:
      case NumberType.INTEGER:
        setRandom(
          (
            Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
          ).toString()
        );
        break;
      case NumberType.DECIMAL:
        setRandom(
          (Math.random() * (maxNum - minNum) + minNum).toFixed(
            parseInt(decimalPlaces)
          )
        );
        break;
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto overflow-hidden">
      <Tabs
        defaultValue={numberType}
        onValueChange={(value) => setNumberType(value as NumberType)}
        className="flex flex-col gap-4"
      >
        <TabsList className="grid grid-cols-2 w-full bg-card text-gray-600">
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
          <div className="flex flex-col gap-4">
            <MinMaxInputs min={min} setMin={setMin} max={max} setMax={setMax} />
            <div className="flex flex-col gap-2">
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

      <Button onClick={generateNumber}>
        <Dices className="w-4 h-4 mr-2" />
        <span>Generate Number</span>
      </Button>

      <ErrorMessage error={error} />

      <div className="relative p-6 bg-card rounded-lg text-center">
        <h2 className="text-2xl font-bold">Generated Number</h2>
        {random ? (
          <p className="text-4xl font-mono break-all py-4">{random}</p>
        ) : (
          <p className="text-gray-600">
            Click &quot;Generate Number&quot; to get started!
          </p>
        )}
        {random && <CopyButton className="hover:bg-white" copyValue={random} />}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
