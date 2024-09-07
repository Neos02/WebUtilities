import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { navLinks } from "./navigation";

export interface NavbarProps {
  links: typeof navLinks;
}

const Navbar = () => {
  return (
    <div className="shadow-sm border-b">
      <DesktopNav links={navLinks} />
      <MobileNav links={navLinks} />
    </div>
  );
};

export default Navbar;
