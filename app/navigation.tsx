import {
  Binary,
  Dices,
  Home,
  Image,
  Info,
  LucideProps,
  Palette,
  Regex,
  Type,
  Wrench,
} from "lucide-react";
import { ForwardRefExoticComponent, ReactElement, RefAttributes } from "react";

export enum Page {
  About,
  BaseConverter,
  ColorPicker,
  Home,
  ImageConverter,
  RandomNumberGenerator,
  RegexTester,
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
    label: "About",
    description:
      "Our mission is to provide a comprehensive set of online tools that simplify everyday tasks",
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
  [Page.ImageConverter]: {
    label: "Image Converter",
    description:
      "Convert your images between different formats quickly and easily.",
    href: "/image/convert",
    icon: createIcon(Image),
  },
  [Page.Home]: {
    label: "Home",
    description: "Your one-stop solution for various online tools",
    href: "/",
    icon: createIcon(Home),
  },
  [Page.RandomNumberGenerator]: {
    label: "Random Number Generator",
    description: "Generate a random number within a specified range",
    href: "/number/random",
    icon: createIcon(Dices),
  },
  [Page.RegexTester]: {
    label: "Regex Tester",
    description: "Test and validate your regular expressions with ease",
    href: "/text/regex",
    icon: createIcon(Regex),
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
  pageDetails[Page.ImageConverter],
  pageDetails[Page.RandomNumberGenerator],
  pageDetails[Page.RegexTester],
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
