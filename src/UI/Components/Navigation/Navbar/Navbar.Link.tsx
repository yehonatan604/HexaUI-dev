import { Link, useLocation } from "react-router-dom";
import { TNavbarLink } from "./types/TNavbarLink";
import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";

const NavbarLink = (props: TNavbarLink) => {
  const { children, options, to, ...componentProps } = props;

  // Color Palette
  const { colors, mode } = useTheme();

  // Options
  const path = useLocation().pathname.split("/")[1];
  const isActive = path === to.split("/")[1];
  const textColor =
    options?.textVariant || (mode === "light" ? colors.secondary : colors.whiteDark);
  const activeLinkColor = options?.activeVariant || colors.warning;
  const linkColor = isActive ? activeLinkColor : textColor;

  // JSX
  return (
    <Link
      className={`text-lg text-${linkColor} font-semibold hover:opacity-70`}
      {...componentProps}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
