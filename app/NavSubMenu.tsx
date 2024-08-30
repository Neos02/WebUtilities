"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  label: string;
  items: { label: string; href: string }[];
}

const NavSubMenu = ({ label, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full !mx-0"
    >
      <CollapsibleTrigger asChild>
        <button
          className={cn(
            "!w-full flex !justify-between",
            navigationMenuTriggerStyle()
          )}
        >
          <span>{label}</span>
          <FaAngleDown className={`transition-all ${isOpen && "rotate-180"}`} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-1 !w-11/12 ml-auto">
        {items.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link
              href={item.href}
              className={cn(
                "!w-full !justify-start",
                navigationMenuTriggerStyle()
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default NavSubMenu;
