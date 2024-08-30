import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  min: number;
  max: number;
}

const ConverterControls = ({ min, max }: Props) => {
  const bases = new Array(max - min + 1).fill(0).map((_, i) => i + min);

  return (
    <div className="inline-flex justify-between items-center gap-4">
      <Select>
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
      <Select>
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
