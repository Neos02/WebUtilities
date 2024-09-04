import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface Link {
  label: string;
  href: string;
}

interface LinkWithDescription extends Link {
  description: string;
}

interface SubMenu {
  label: string;
  subItems: LinkWithDescription[];
}

export function isSubMenu(item: Link | SubMenu): item is SubMenu {
  return (item as SubMenu).subItems !== undefined;
}

const links: (Link | SubMenu)[] = [
  { label: "Home", href: "/" },
  {
    label: "Tools",
    subItems: [
      {
        label: "Base Converter",
        description:
          "Convert numbers between different bases such as binary and decimal.",
        href: "/number/convert",
      },
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
    ],
  },
  { label: "About", href: "/about" },
];

export interface NavbarProps {
  links: typeof links;
}

const Navbar = () => {
  return (
    <>
      <DesktopNav links={links} />
      <MobileNav links={links} />
    </>
  );
};

export default Navbar;
