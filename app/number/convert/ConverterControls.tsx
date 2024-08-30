"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  min: number;
  max: number;
}

const ConverterControls = ({ min, max }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bases = new Array(max - min + 1).fill(0).map((_, i) => i + min);

  const setConverterParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="inline-flex justify-between items-center gap-4">
      <Select
        onValueChange={(value) => setConverterParam("from", value)}
        defaultValue={searchParams.get("from") ?? ""}
      >
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
      <Select
        onValueChange={(value) => setConverterParam("to", value)}
        defaultValue={searchParams.get("to") ?? ""}
      >
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
      <Button variant="secondary">Swap</Button>
      <Button variant="secondary">Clear</Button>
    </div>
  );
};

export default ConverterControls;
