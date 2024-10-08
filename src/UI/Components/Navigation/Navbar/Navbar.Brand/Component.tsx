import useTheme from "../../../../../Core/Hooks/useTheme";
import { TNavbarBrand } from "../../../../../Data/Types/ComponentTypes/Navigation/Navbar/TNavbarBrand";

const NavbarBrand = (props: TNavbarBrand) => {
  const { children, as, to, options, ...componentProps } = props;
  const { colors, mode } = useTheme();

  // Options
  const brandColor =
    options?.textVariant || (mode === "light" ? colors.secondary : colors.whiteDark);
  const bgColor = options?.bgVariant || "transparent";

  const Component = as || "a";

  // JSX
  return (
    <Component
      className={`text-xl font-bold text-${brandColor} bg-${bgColor} hover:opacity-70`}
      {...componentProps}
      href={to}
      to={to}
    >
      {children}
    </Component>
  );
};

export default NavbarBrand;
