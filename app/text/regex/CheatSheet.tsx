"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import CheatSheetContent from "./CheatSheetContent";

const CheatSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToolContainer className="py-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex justify-between items-center w-full py-4">
          <h1 className="font-bold font-lg">Cheatsheet</h1>
          <ChevronDown
            className={cn("w-5 h-5 transition-all", isOpen && "rotate-180")}
          />
        </CollapsibleTrigger>
        <CheatSheetContent />
      </Collapsible>
    </ToolContainer>
  );
};

export default CheatSheet;
