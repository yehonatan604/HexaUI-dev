import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Sizes } from "../../../../Data/Constants/Sizes";
import { TTitle } from "../../../../Data/Types/ComponentTypes/Typography/Title/TTitle";
import Flex from "../../Layout/Flex/Component";

const Title = (props: TTitle) => {
  const { children, options, ...componentProps } = props;

  // Hooks
  const { palette: pallete } = useColorPalette();

  // Options
  const size = options?.size || Sizes.Md;
  const textColor = options?.textVariant || pallete.standradLight;
  const bgColor = options?.bgVariant || pallete.standrad;
  const padding = options?.padding || "p-5";
  const align = options?.align || FlexTypes.Center;

  // Text Size
  let textSize = "xl";
  if (size === Sizes.Sm) {
    textSize = "2xl";
  } else if (size === Sizes.Md) {
    textSize = "3l";
  } else if (size === Sizes.Lg) {
    textSize = "4xl";
  } else if (size === Sizes.Xl) {
    textSize = "5xl";
  }

  // JSX
  return (
    <Flex
      className={`w-full ${bgColor}`}
      options={{
        justify: align,
      }}
    >
      <h1 className={`${padding} text-${textSize} text-${textColor}`} {...componentProps}>
        {children}
      </h1>
    </Flex>
  );
};

export default Title;
