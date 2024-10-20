import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TFooter } from "./types/TFooter";
import Flex from "../../Layout/Flex/Flex";
import FooterBrand from "./Footer.Brand";

const Footer = (props: TFooter) => {
  const {
    children,
    className,
    reserved,
    options: {
      bgVariant,
      textVariant,
      reservedVariant,
      childrenDirection,
      childrenJustify,
      childrenAlign,
    },
    ...componenetProps
  } = props;

  // Options
  const bgColor = bgVariant || "white";
  const textColor = textVariant || "black";
  const reservedColor = reservedVariant || "standard";
  const childrenGap = childrenDirection === FlexDir.Row ? "gap-4" : "gap-1";

  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Start,
        align: FlexTypes.Start,
      }}
      className={`bg-${bgColor} text-${textColor} ${className} `}
      {...componenetProps}
    >
      <Flex
        options={{
          direction: childrenDirection,
          justify: childrenJustify,
          align: childrenAlign,
        }}
        className={`w-full ${childrenGap} max-md:flex-col`}
      >
        {children}
      </Flex>
      <p className={`text-center text-xs text-${reservedColor} max-md:my-2`}>
        &copy; {new Date().getFullYear()} {reserved || "Rainbow UI"}
      </p>
    </Flex>
  );
};

Footer.Brand = FooterBrand;
export default Footer;
