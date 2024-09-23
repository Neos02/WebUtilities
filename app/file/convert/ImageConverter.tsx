"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { extension } from "mime-types";
import { useRef, useState } from "react";

enum ImageType {
  JPEG = "image/jpeg",
  PNG = "image/png",
  WEBP = "image/webp",
}

const ImageConverter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [input, setInput] = useState<File>();
  const [typeTo, setTypeTo] = useState(ImageType.JPEG);

  const convert = async () => {
    if (!input) {
      console.log("no file");
      return;
    }

    const fr = new FileReader();

    fr.onload = () => {
      const image = new Image();

      image.onload = () => {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d")!;

          canvasRef.current.width = image.width;
          canvasRef.current.height = image.height;

          ctx.drawImage(image, 0, 0);
          const dataUrl = canvasRef.current.toDataURL(typeTo, 1);

          download(dataUrl);
        }
      };

      image.src = fr.result as string;
    };

    fr.readAsDataURL(input);
  };

  const download = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `test.${extension(typeTo)}`;
    a.click();
    a.remove();
  };

  return (
    <div>
      <canvas ref={canvasRef} hidden />

      <div className="flex flex-col gap-2">
        <Label htmlFor="imageInput">Image</Label>
        <Input
          id="imageInput"
          type="file"
          accept={Object.values(ImageType).join(",")}
          onChange={(e) => setInput(e.target.files?.[0])}
        />
      </div>

      <Button onClick={convert}>Convert</Button>
    </div>
  );
};

export default ImageConverter;
