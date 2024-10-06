import useColorPalette from "../../../../../Core/Hooks/useColorPallete";
import { NavbarBrandProps } from "./Props";

const NavbarBrand = (props: NavbarBrandProps) => {
  const { children, as, to, ...componentProps } = props;
  const { dark: brandColor } = useColorPalette().getColor("navbarLink")!;

  // Variables
  const Component = as || "a";

  // JSX
  return (
    <Component
      className={`text-xl font-bold text-${brandColor}`}
      {...componentProps}
      href={to}
      to={to}
    >
      {children}
    </Component>
  );
};

export default NavbarBrand;
