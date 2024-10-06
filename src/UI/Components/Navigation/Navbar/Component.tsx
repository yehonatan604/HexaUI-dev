import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";
import NavbarBrand from "./Navbar.Brand/Component";
import NavbarCollapse from "./Navbar.Collapse/Component";
import NavbarLink from "./Navbar.Link/Component";
import NavbarToggle from "./Navbar.Toggle/Component";
import { NavbarProps } from "./Props";

const Navbar = (props: NavbarProps) => {
  const { children, variant = Variants.Standard, colors, ...componentProps } = props;

  // Hooks
  const mode = useTheme().mode;
  const getColor = useColorPalette().getColor;

  // Color Palette
  const { light: lightStandard } = getColor(Variants.Standard)!;
  const { light: lightFailure } = getColor(Variants.Failure)!;
  const { light: lightSuccess } = getColor(Variants.Success)!;
  const { light: lightWarning } = getColor(Variants.Warning)!;
  const { light: lightInfo } = getColor(Variants.Info)!;
  const { light: lightLime } = getColor(Variants.Lime)!;
  const { light: lightCyan } = getColor(Variants.Cyan)!;
  const { light: lightPurple } = getColor(Variants.Purple)!;
  const { light: lightPink } = getColor(Variants.Pink)!;
  const { light: navbarTextColor } = getColor("navbarText")!;

  // Variables
  let bgColor: string = "";
  if (variant === Variants.Failure) {
    bgColor = `bg-${lightFailure}`;
  } else if (variant === Variants.Success) {
    bgColor = `bg-${lightSuccess}`;
  } else if (variant === Variants.Warning) {
    bgColor = `bg-${lightWarning}`;
  } else if (variant === Variants.Info) {
    bgColor = `bg-${lightInfo}`;
  } else if (variant === Variants.Lime) {
    bgColor = `bg-${lightLime}`;
  } else if (variant === Variants.Cyan) {
    bgColor = `bg-${lightCyan}`;
  } else if (variant === Variants.Purple) {
    bgColor = `bg-${lightPurple}`;
  } else if (variant === Variants.Pink) {
    bgColor = `bg-${lightPink}`;
  } else {
    bgColor = `bg-${lightStandard}`;
  }
  if (colors) bgColor = mode === "light" ? colors.lightColor : colors.darkColor;

  // JSX
  return (
    <Flex
      justify={FlexTypes.SpaceBetween}
      align={FlexTypes.Center}
      {...componentProps}
      className={`${bgColor} text-${navbarTextColor} p-4 max-md:flex-col max-md:gap-4 md:flex-row`}
    >
      {children}
    </Flex>
  );
};

Navbar.Toggle = NavbarToggle;
Navbar.Brand = NavbarBrand;
Navbar.Collapse = NavbarCollapse;
Navbar.Link = NavbarLink;

export default Navbar;
