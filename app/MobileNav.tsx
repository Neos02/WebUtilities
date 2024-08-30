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
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { PiToolboxFill } from "react-icons/pi";
import { NavbarProps } from "./Navbar";
import NavSubMenu from "./NavSubMenu";

const MobileNav = ({ tools, links, className }: NavbarProps) => {
  return (
    <NavigationMenu className={`ml-auto py-2 ${className}`}>
      <Drawer direction="right">
        <DrawerTrigger>
          <IoMenu size={40} />
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

            <NavSubMenu label="Tools" items={tools} />

            {links.map((link) => (
              <NavigationMenuItem key={link.label} className="w-full !mx-0">
                <Link
                  href={link.href}
                  className={cn(
                    "!w-full !justify-start",
                    navigationMenuTriggerStyle()
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </DrawerContent>
      </Drawer>
    </NavigationMenu>
  );
};

export default MobileNav;
