import { Link, useLocation } from "react-router-dom";
import { NavbarLinkProps } from "./Props";
import useColorPalette from "../../../../../Core/Hooks/useColorPallete";

const NavbarLink = (props: NavbarLinkProps) => {
  const { children, to, activeColor, ...componentProps } = props;

  // Color Palette
  const { active: activeLinkColor, dark: normalLinkColor } =
    useColorPalette().getColor("navbarLink")!;

  // Variables
  const path = useLocation().pathname.split("/")[1];
  const isActive = path === to.split("/")[1];
  const linkColor = isActive
    ? `text-${activeLinkColor}`
    : isActive && activeColor
    ? activeColor
    : `text-${normalLinkColor}`;

  // JSX
  return (
    <Link className={`text-lg ${linkColor} font-semibold`} {...componentProps} to={to}>
      {children}
    </Link>
  );
};

export default NavbarLink;
