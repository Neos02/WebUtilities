import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { PiToolboxFill } from "react-icons/pi";

const tools: { label: string; description: string; href: string }[] = [
  {
    label: "Color Picker",
    description: "Select and customize colors and convert between formats.",
    href: "/color/picker",
  },
  {
    label: "Random Number Generator",
    description: "Produce random numbers within a specified range.",
    href: "/number/random",
  },
  {
    label: "Word Counter",
    description:
      "Counts the number of words, characters, and sentences in text.",
    href: "/text/count",
  },
  {
    label: "Base Converter",
    description:
      "Convert numbers between different bases such as binary and decimal.",
    href: "/number/convert",
  },
];

const Navbar = () => {
  return (
    <NavigationMenu className="grid grid-cols-1 max-w-full w-full my-2">
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
          <NavigationMenuItem>
            <Link href="/request" className={navigationMenuTriggerStyle()}>
              Suggestions
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/donate" className={navigationMenuTriggerStyle()}>
              Donate
            </Link>
          </NavigationMenuItem>
          <NavigationMenuViewport className="max-w-full sm:-left-1/2" />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
