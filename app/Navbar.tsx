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

export const tools: LinkWithDescription[] = [
  {
    label: "Base Converter",
    description: "Convert numbers from one base to another",
    href: "/number/convert",
  },
  {
    label: "Color Picker",
    description: "Select colors and convert between formats.",
    href: "/color/picker",
  },
  {
    label: "Random Number Generator",
    description: "Generate a random number within a specified range",
    href: "/number/random",
  },
  {
    label: "Word Counter",
    description:
      "Count the number of words, characters, and sentences in a text",
    href: "/text/count",
  },
];

export function getPageHeadings(path: string) {
  const { label: title, description } = tools.find(
    (tool) => tool.href === path
  ) ?? { label: "", description: "" };

  return { title, description };
}

const links: (Link | SubMenu)[] = [
  { label: "Home", href: "/" },
  {
    label: "Tools",
    subItems: tools,
  },
  { label: "About", href: "/about" },
];

export interface NavbarProps {
  links: typeof links;
}

const Navbar = () => {
  return (
    <div className="shadow-sm border-b">
      <DesktopNav links={links} />
      <MobileNav links={links} />
    </div>
  );
};

export default Navbar;
