"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiToolboxFill } from "react-icons/pi";
import { NavbarProps } from "./Navbar";
import { isNavSubMenu } from "./navigation";
import NavSubMenu from "./NavSubMenu";

const MobileNav = ({ links }: NavbarProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between container py-2 md:hidden">
      <Link href="/" className={navigationMenuTriggerStyle()} aria-label="Home">
        <PiToolboxFill size={18} />
      </Link>

      <NavigationMenu>
        <Drawer
          direction="right"
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <DrawerTrigger aria-label="Menu">
            <Menu className="text-black w-6 h-6" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="hidden">
              <DrawerTitle>Navigation</DrawerTitle>
              <DrawerDescription>Navigation Menu</DrawerDescription>
            </DrawerHeader>

            <NavigationMenuList className="flex flex-col items-start gap-1 p-2">
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  <PiToolboxFill size={18} />
                </Link>
              </NavigationMenuItem>

              {links.map((link) =>
                isNavSubMenu(link) ? (
                  <NavSubMenu
                    key={link.label}
                    submenu={link}
                    onClick={() => setIsOpen(false)}
                  />
                ) : (
                  <NavigationMenuItem key={link.label} className="w-full !mx-0">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "!w-full !justify-start !items-center",
                        pathname === link.href && "text-primary !bg-accent/50",
                        navigationMenuTriggerStyle()
                      )}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </DrawerContent>
        </Drawer>
      </NavigationMenu>
    </div>
  );
};

export default MobileNav;
