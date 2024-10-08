import useColorPalette from "../../../../../Core/Hooks/useColorPallete";
import { TNavbarBrand } from "../../../../../Data/Types/ComponentTypes/Navigation/Navbar/TNavbarBrand";

const NavbarBrand = (props: TNavbarBrand) => {
  const { children, as, to, options, ...componentProps } = props;
  const { palette } = useColorPalette();

  // Options
  const brandColor = options?.textVariant || palette.primary;
  const bgColor = options?.bgVariant || "transparent";
  const Component = as || "a";

  // JSX
  return (
    <Component
      className={`text-xl font-bold text-${brandColor} bg-${bgColor}`}
      {...componentProps}
      href={to}
      to={to}
    >
      {children}
    </Component>
  );
};

export default NavbarBrand;
