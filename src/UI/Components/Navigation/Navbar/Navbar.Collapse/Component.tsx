import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { TNavbarCollapse } from "../../../../../Data/Types/ComponentTypes/Navigation/Navbar/TNavbarCollapse";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const NavbarCollapse = (props: TNavbarCollapse) => {
  const { children, className, isMobileMenuOpen, ...componentProps } = props;

  // JSX
  return (
    <Flex
      options={{
        direction: isMobileMenuOpen ? FlexDir.Col : FlexDir.Row,
        align: FlexTypes.Center,
      }}
      className={`flex ${
        isMobileMenuOpen ? "md:flex-row" : "max-md:hidden"
      } gap-4 ${className}`}
      {...componentProps}
    >
      {children}
    </Flex>
  );
};

export default NavbarCollapse;
