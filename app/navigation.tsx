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
}

export interface NavItemWithDescription extends NavItem {
  description: string;
}

export interface NavItemSubMenu {
  label: string;
  items: NavItemWithDescription[];
}

export function isNavSubMenu(
  item: NavItem | NavItemSubMenu
): item is NavItemSubMenu {
  return (item as NavItemSubMenu).items !== undefined;
}

export type PageDetails = {
  [key in Page]: NavItemWithDescription;
};

export const pageDetails: PageDetails = {
  [Page.About]: {
    label: "About Web Utilities",
    description:
      "Your one-stop solution for various online tools. Simplify your tasks with our easy-to-use utilities",
    href: "/about",
  },
  [Page.BaseConverter]: {
    label: "Base Converter",
    description: "Convert numbers from one base to another",
    href: "/number/convert",
  },
  [Page.ColorPicker]: {
    label: "Color Picker",
    description: "Select colors and convert between formats.",
    href: "/color/picker",
  },
  [Page.Home]: {
    label: "Welcome to Web Utilities",
    description:
      "Your one-stop solution for various online tools. Simplify your tasks with our easy-to-use utilities.",
    href: "/",
  },
  [Page.RandomNumberGenerator]: {
    label: "Random Number Generator",
    description: "Generate a random number within a specified range",
    href: "/number/random",
  },
  [Page.WordCounter]: {
    label: "Word Counter",
    description:
      "Count the number of words, characters, and sentences in a text",
    href: "/text/count",
  },
};

export const tools: NavItemWithDescription[] = [
  pageDetails[Page.BaseConverter],
  pageDetails[Page.ColorPicker],
  pageDetails[Page.RandomNumberGenerator],
  pageDetails[Page.WordCounter],
];

export const navLinks: (NavItem | NavItemSubMenu)[] = [
  { label: "Home", href: "/" },
  {
    label: "Tools",
    items: tools,
  },
  { label: "About", href: "/about" },
];
