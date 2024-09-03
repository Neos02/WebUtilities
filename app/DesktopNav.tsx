import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { PiToolboxFill } from "react-icons/pi";
import { NavbarProps } from "./Navbar";

const DesktopNav = ({ tools, links }: NavbarProps) => {
  return (
    <NavigationMenu
      className={`hidden md:grid grid-cols-1 w-4/5 max-w-screen-lg mx-auto py-2`}
    >
      <NavigationMenuList className="w-full flex justify-between">
        <NavigationMenuItem>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            <PiToolboxFill size={18} />
          </Link>
        </NavigationMenuItem>

        <div className="sm:relative flex justify-between items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {tools.map((tool) => (
                  <li key={tool.label}>
                    <Link
                      href={tool.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {tool.label}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {tool.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {links.map((link) => (
            <NavigationMenuItem key={link.label}>
              <Link href={link.href} className={navigationMenuTriggerStyle()}>
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuViewport />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
