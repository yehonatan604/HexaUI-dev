import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Flex";
import CardFooter from "./Card.Footer";
import CardHeader from "./Card.Header";
import { TCard } from "./types/TCard";

const Card = (props: TCard) => {
  const { children, options, className, ...componentProps } = props;
  const { colors } = useTheme();

  // Options
  const bgColor = options?.bgVariant || colors.standradLight;
  const textColor = options?.textVariant || colors.standradDark;
  const padding = options?.padding || 2;
  const rounded = options?.rounded || "md";
  const gap = options?.gap || 4;
  const borderColor = options?.border?.variant || colors.standrad;
  const borderRadius = options?.border?.radius || "md";

  // Border Options
  const border = options?.border?.show
    ? `border-2 border-${borderColor} rounded-${borderRadius}`
    : "";

  // Shadow Options
  const shadow =
    options?.shadow &&
    `shadow-${options?.shadow?.size || "md"} shadow-${
      options?.shadow?.color || colors.white
    }`;

  // JSX
  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Start,
        align: FlexTypes.Start,
      }}
      className={`gap-${gap} text-${textColor} p-${padding} rounded-${rounded} bg-${bgColor} ${shadow} ${border} ${className}`}
      {...componentProps}
    >
      {children}
    </Flex>
  );
};

Card.Header = CardHeader;
Card.Footer = CardFooter;
export default Card;
