import {
  Binary,
  Dices,
  Home,
  Info,
  LucideProps,
  Palette,
  Type,
  Wrench,
} from "lucide-react";
import { ForwardRefExoticComponent, ReactElement, RefAttributes } from "react";

export enum Page {
  About,
  BaseConverter,
  ColorPicker,
  Home,
  RandomNumberGenerator,
  WordCounter,
}

export interface NavItem {
  label: string;
  href: string;
  icon: ReactElement;
}

export interface NavSubItem extends NavItem {
  description: string;
}

export interface NavItemSubMenu {
  label: string;
  items: NavSubItem[];
  icon: ReactElement;
}

export function isNavSubMenu(
  item: NavItem | NavItemSubMenu
): item is NavItemSubMenu {
  return (item as NavItemSubMenu).items !== undefined;
}

export type PageDetails = {
  [key in Page]: NavSubItem;
};

function createIcon(
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
) {
  return <Icon className="w-4 h-4 mr-2" />;
}

export const pageDetails: PageDetails = {
  [Page.About]: {
    label: "About Web Utilities",
    description:
      "Your one-stop solution for various online tools. Simplify your tasks with our easy-to-use utilities",
    href: "/about",
    icon: createIcon(Info),
  },
  [Page.BaseConverter]: {
    label: "Base Converter",
    description: "Convert numbers from one base to another",
    href: "/number/convert",
    icon: createIcon(Binary),
  },
  [Page.ColorPicker]: {
    label: "Color Picker",
    description: "Select colors and convert between formats.",
    href: "/color/picker",
    icon: createIcon(Palette),
  },
  [Page.Home]: {
    label: "Welcome to Web Utilities",
    description:
      "Your one-stop solution for various online tools. Simplify your tasks with our easy-to-use utilities.",
    href: "/",
    icon: createIcon(Home),
  },
  [Page.RandomNumberGenerator]: {
    label: "Random Number Generator",
    description: "Generate a random number within a specified range",
    href: "/number/random",
    icon: createIcon(Dices),
  },
  [Page.WordCounter]: {
    label: "Word Counter",
    description:
      "Count the number of words, characters, and sentences in a text",
    href: "/text/count",
    icon: createIcon(Type),
  },
};

export const tools: NavSubItem[] = [
  pageDetails[Page.BaseConverter],
  pageDetails[Page.ColorPicker],
  pageDetails[Page.RandomNumberGenerator],
  pageDetails[Page.WordCounter],
];

export const navLinks: (NavItem | NavItemSubMenu)[] = [
  pageDetails[Page.Home],
  {
    label: "Tools",
    items: tools,
    icon: createIcon(Wrench),
  },
  pageDetails[Page.About],
];
