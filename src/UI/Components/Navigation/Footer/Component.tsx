import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TFooter } from "../../../../Data/Types/ComponentTypes/Navigation/Footer/TFooter";
import Flex from "../../Layout/Flex/Component";
import FooterBrand from "./Footer.Brand/Component";

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

  // Hooks
  const { colors } = useTheme();

  // Options
  const bgColor = bgVariant || colors.white;
  const textColor = textVariant || colors.black;
  const reservedColor = reservedVariant || colors.standrad;
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
