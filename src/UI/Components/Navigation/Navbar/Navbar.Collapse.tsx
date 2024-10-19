import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TNavbarCollapse } from "./types/TNavbarCollapse";
import Flex from "../../Layout/Flex/Flex";

const NavbarCollapse = (props: TNavbarCollapse) => {
  const { children, className, isMobileMenuOpen, options, ...componentProps } = props;

  const { colors, mode } = useTheme();

  const textColor =
    options?.textVariant || (mode === "light" ? colors.secondary : colors.standradLight);

  // JSX
  return (
    <Flex
      options={{
        direction: isMobileMenuOpen ? FlexDir.Col : FlexDir.Row,
        align: FlexTypes.Center,
      }}
      className={`text-${textColor} flex ${
        isMobileMenuOpen ? "md:flex-row" : "max-md:hidden"
      } gap-4 ${className}`}
      {...componentProps}
    >
      {children}
    </Flex>
  );
};

export default NavbarCollapse;
