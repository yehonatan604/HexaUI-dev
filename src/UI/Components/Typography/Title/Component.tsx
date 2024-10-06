import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { Sizes } from "../../../../Data/Constants/Sizes";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";
import { TitleProps } from "./Props";

const Title = (props: TitleProps) => {
  const { children, size = Sizes.Md, color, ...componentProps } = props;

  // Hooks
  const mode = useTheme().mode;

  // Color Palette
  const { light, dark } = useColorPalette().getColor(Variants.Standard)!;

  // Colors
  const textColor = !color
    ? mode === "light"
      ? `text-${light}`
      : `text-${dark}`
    : color;

  // Text Size
  const textSize =
    size === Sizes.Sm
      ? "text-lg"
      : size === Sizes.Md
      ? "text-xl"
      : size === Sizes.Lg
      ? "text-2xl"
      : size === Sizes.Xl
      ? "text-3xl"
      : "text-xl";

  // JSX
  return (
    <Flex className="m-auto">
      <h1 className={`p-5 ${textSize} ${textColor} text-center`} {...componentProps}>
        {children}
      </h1>
    </Flex>
  );
};

export default Title;
