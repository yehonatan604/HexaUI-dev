import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TBrand } from "../../../../Data/Types/TBrand";

const NavbarBrand = (props: TBrand) => {
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
