import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TNavbar } from "../../../../Data/Types/ComponentTypes/Navigation/Navbar/TNavbar";
import Flex from "../../Layout/Flex/Component";
import NavbarBrand from "./Navbar.Brand/Component";
import NavbarCollapse from "./Navbar.Collapse/Component";
import NavbarLink from "./Navbar.Link/Component";
import NavbarToggle from "./Navbar.Toggle/Component";

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
