import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Component";
import FooterBrand from "./Footer.Brand/Component";
import { FooterProps } from "./Props";

const Footer = (props: FooterProps) => {
  const {
    children,
    className,
    reserved,
    bgColor,
    textColor,
    reservedColor,
    childrenJustify = FlexTypes.Center,
    childrenAlign = FlexTypes.Center,
    childrenDirection = FlexDir.Row,
    ...componenetProps
  } = props;

  const childrenGap = childrenDirection === FlexDir.Row ? "gap-4" : "gap-1";

  return (
    <Flex
      direction={FlexDir.Col}
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      className={`${className} ${bgColor} ${textColor}`}
      {...componenetProps}
    >
      <Flex
        direction={childrenDirection}
        justify={childrenJustify}
        align={childrenAlign}
        className={`w-full ${childrenGap} max-md:flex-col`}
      >
        {children}
      </Flex>
      <p className={`text-center text-xs ${reservedColor} max-md:my-2`}>
        &copy; {new Date().getFullYear()} {reserved || "Rainbow UI"}
      </p>
    </Flex>
  );
};

Footer.Brand = FooterBrand;
export default Footer;
