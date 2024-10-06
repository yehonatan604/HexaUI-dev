import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";
import { NavbarCollapseProps } from "./Props";

const NavbarCollapse = (props: NavbarCollapseProps) => {
  const { children, isMobileMenuOpen, ...componentProps } = props;

  // JSX
  return (
    <Flex
      direction={isMobileMenuOpen ? FlexDir.Col : FlexDir.Row}
      align={FlexTypes.Center}
      className={` ${isMobileMenuOpen ? "flex md:flex-row" : "max-md:hidden"} gap-4`}
      {...componentProps}
    >
      {children}
    </Flex>
  );
};

export default NavbarCollapse;
