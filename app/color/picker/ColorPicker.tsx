"use client";

import { Input, InputWithCopy } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  ColorService,
  Hue,
  IColor,
  Saturation,
  useColor,
} from "react-color-palette";
import "react-color-palette/css";
import "./ColorPicker.css";

const float = (value: number, decimalPlaces: number) => {
  return Math.round(value * 10 ** decimalPlaces) / 10 ** decimalPlaces;
};

const formatRgb = ({ r, g, b, a }: IColor["rgb"]) => {
  const rgb: any[] = [Math.round(r), Math.round(g), Math.round(b)];
  const alpha = float(a, 3);

  if (alpha < 1) rgb.push(alpha);

  return rgb.join(", ");
};

const formatHsv = ({ h, s, v, a }: IColor["hsv"]) => {
  const hsv: any[] = [
    `${Math.round(h)}°`,
    `${Math.round(s)}%`,
    `${Math.round(v)}%`,
  ];
  const alpha = float(a, 3);

  if (alpha < 1) hsv.push(alpha);

  return hsv.join(", ");
};

const ColorPicker = () => {
  const [color, setColor] = useColor("#5865f2");
  const [fields, setFields] = useState({
    hex: {
      value: color.hex,
      focused: false,
    },
    rgb: {
      value: formatRgb(color.rgb),
      focused: false,
    },
    hsv: {
      value: formatHsv(color.hsv),
      focused: false,
    },
  });

  const handleInputFocus = (field: keyof typeof fields) => {
    setFields((fields) => ({
      ...fields,
      [field]: { ...fields[field], focused: true },
    }));
  };

  const handleInputChange = (field: keyof typeof fields, value: string) => {
    setFields((fields) => ({
      ...fields,
      [field]: { ...fields[field], value },
    }));

    switch (field) {
      case "hex":
        setColor(ColorService.convert("hex", value));
        break;
      case "rgb":
        setColor(ColorService.convert("rgb", ColorService.toRgb(value)));
        break;
      case "hsv":
        setColor(ColorService.convert("hsv", ColorService.toHsv(value)));
        break;
    }
  };

  const handleInputBlur = (field: keyof typeof fields) => {
    setFields((fields) => ({
      ...fields,
      [field]: { ...fields[field], focused: false },
    }));
  };

  useEffect(() => {
    if (!fields.hex.focused) {
      setFields((fields) => ({
        ...fields,
        hex: { ...fields.hex, value: color.hex },
      }));
    }
  }, [fields.hex.focused, color.hex]);

  useEffect(() => {
    if (!fields.rgb.focused) {
      setFields((fields) => ({
        ...fields,
        rgb: { ...fields.rgb, value: formatRgb(color.rgb) },
      }));
    }
  }, [fields.rgb.focused, color.rgb]);

  useEffect(() => {
    if (!fields.hsv.focused) {
      setFields((fields) => ({
        ...fields,
        hsv: { ...fields.hsv, value: formatHsv(color.hsv) },
      }));
    }
  }, [fields.hsv.focused, color.hsv]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg">
          <Saturation height={320} color={color} onChange={setColor} />
        </div>
        <div className="border rounded-lg">
          <Hue color={color} onChange={setColor} />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 h-96">
        <div
          className="h-[98px] rounded-lg border"
          style={{ backgroundColor: color.hex }}
        />

        {(Object.keys(fields) as Array<keyof typeof fields>).map(
          (colorModel) => (
            <Label key={colorModel} className="flex flex-col gap-1">
              <span>{colorModel.toUpperCase()}</span>
              <InputWithCopy
                type="text"
                value={fields[colorModel]?.value}
                onFocus={() => handleInputFocus(colorModel)}
                onChange={(e) => handleInputChange(colorModel, e.target.value)}
                onBlur={() => handleInputBlur(colorModel)}
              />
            </Label>
          )
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
