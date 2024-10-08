import { Link, useLocation } from "react-router-dom";
import useColorPalette from "../../../../../Core/Hooks/useColorPallete";
import { TNavbarLink } from "../../../../../Data/Types/ComponentTypes/Navigation/Navbar/TNavbarLink";

const NavbarLink = (props: TNavbarLink) => {
  const { children, options, to, ...componentProps } = props;

  // Color Palette
  const { palette } = useColorPalette();

  // Options
  const path = useLocation().pathname.split("/")[1];
  const isActive = path === to.split("/")[1];
  const textColor = options?.textVariant || palette.secondary;
  const activeLinkColor = options?.activeVariant || palette.primary;
  const linkColor = isActive ? activeLinkColor : textColor;

  // JSX
  return (
    <Link
      className={`text-lg text-${linkColor} font-semibold`}
      {...componentProps}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
