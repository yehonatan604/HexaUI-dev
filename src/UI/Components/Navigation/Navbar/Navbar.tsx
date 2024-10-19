import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TNavbar } from "./types/TNavbar";
import Flex from "../../Layout/Flex/Flex";
import NavbarBrand from "./Navbar.Brand";
import NavbarCollapse from "./Navbar.Collapse";
import NavbarLink from "./Navbar.Link";
import NavbarToggle from "./Navbar.Toggle";

const Navbar = (props: TNavbar) => {
  const { children, options, className, ...componentProps } = props;

  // Hooks
  const { colors } = useTheme();

  // Options
  const bgColor = options?.bgVariant || colors.primary;
  const textColor = options?.textVariant || colors.white;

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.SpaceBetween,
        align: FlexTypes.Center,
      }}
      {...componentProps}
      className={`bg-${bgColor} text-${textColor} p-4 max-md:flex-col max-md:gap-4 md:flex-row ${className}`}
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
