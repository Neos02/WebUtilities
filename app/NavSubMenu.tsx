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
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavItemSubMenu } from "./navigation";

interface Props {
  submenu: NavItemSubMenu;
  onClick: () => void;
}

const NavSubMenu = ({ submenu, onClick }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(
    submenu.items.find((item) => item.href === pathname) !== undefined
  );

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full !mx-0"
    >
      <CollapsibleTrigger asChild>
        <button
          className={cn(
            "!w-full flex !justify-between items-center",
            navigationMenuTriggerStyle()
          )}
        >
          <div className="flex items-center">
            <span>{submenu.icon}</span>
            <span>{submenu.label}</span>
          </div>
          <FaAngleDown className={`transition-all ${isOpen && "rotate-180"}`} />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-1 !w-11/12 ml-auto">
        {submenu.items.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link
              href={item.href}
              className={cn(
                "!w-full !justify-start",
                pathname === item.href && "text-primary !bg-accent",
                navigationMenuTriggerStyle()
              )}
              onClick={onClick}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </NavigationMenuItem>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default NavSubMenu;
