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
import { isSubMenu, NavbarProps } from "./Navbar";

const DesktopNav = ({ links }: NavbarProps) => {
  return (
    <NavigationMenu
      className={`hidden md:grid grid-cols-1 container max-w-[1400px] mx-auto py-2`}
    >
      <NavigationMenuList className="w-full flex justify-between">
        <NavigationMenuItem>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            <PiToolboxFill size={18} />
          </Link>
        </NavigationMenuItem>

        <div className="sm:relative flex justify-between items-center gap-2">
          {links.map((link) =>
            isSubMenu(link) ? (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {link.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.label}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={link.label}>
                <Link href={link.href} className={navigationMenuTriggerStyle()}>
                  {link.label}
                </Link>
              </NavigationMenuItem>
            )
          )}
        </div>
      </NavigationMenuList>

      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default DesktopNav;
