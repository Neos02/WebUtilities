"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

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

const links: { label: string; href: string }[] = [
  { label: "Suggestions", href: "/suggestions" },
  { label: "Donate", href: "/donate" },
];

export interface NavbarProps {
  tools: typeof tools;
  links: typeof links;
}

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <DesktopNav tools={tools} links={links} />
  ) : (
    <MobileNav tools={tools} links={links} />
  );
};

export default Navbar;
