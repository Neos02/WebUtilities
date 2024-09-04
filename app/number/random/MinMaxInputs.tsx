import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  min: string;
  setMin: (min: string) => void;
  max: string;
  setMax: (max: string) => void;
}

const MinMaxInputs = ({ min, setMin, max, setMax }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 space-y-2">
        <Label htmlFor="minValue">Minimum</Label>
        <Input
          id="minValue"
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Enter minimum value"
        />
      </div>
      <div className="flex-1 space-y-2">
        <Label htmlFor="maxValue">Maximum</Label>
        <Input
          id="maxValue"
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Enter maximum value"
        />
      </div>
    </div>
  );
};

export default MinMaxInputs;
