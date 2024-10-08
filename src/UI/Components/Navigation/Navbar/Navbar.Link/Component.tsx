import { Link, useLocation } from "react-router-dom";
import { TNavbarLink } from "../../../../../Data/Types/ComponentTypes/Navigation/Navbar/TNavbarLink";
import useTheme from "../../../../../Core/Hooks/useTheme";

const NavbarLink = (props: TNavbarLink) => {
  const { children, options, to, ...componentProps } = props;

  // Color Palette
  const { colors } = useTheme();

  // Options
  const path = useLocation().pathname.split("/")[1];
  const isActive = path === to.split("/")[1];
  const textColor = options?.textVariant || colors.secondary;
  const activeLinkColor = options?.activeVariant || colors.primary;
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
