import useColorPalette from "../../../..//Core/Hooks/useColorPallete";
import { Sizes } from "../../../../Data/Constants/Sizes";
import { HrProps } from "./Props";

const Hr = (props: HrProps) => {
  const { borderColor, borderWidth, borderHeight, className, ...componenetProps } = props;
  const { dark: hrColor } = useColorPalette().getColor("hr")!;

  const lineWidth = !borderWidth
    ? "w-full"
    : borderWidth === Sizes.Sm
    ? "w-1/5"
    : borderWidth === Sizes.Md
    ? "w-1/3"
    : borderWidth === Sizes.Lg
    ? "w-2/3"
    : borderWidth;

  const lineHeight = !borderHeight
    ? "border-1"
    : borderHeight === Sizes.Sm
    ? "border-1"
    : borderHeight === Sizes.Md
    ? "border-2"
    : borderHeight === Sizes.Lg
    ? "border-3"
    : borderHeight === Sizes.Xl
    ? "border-4"
    : borderHeight;

  const lineColor = !borderColor ? hrColor : borderColor;

  return (
    <hr
      className={`border-1 ${lineHeight} ${lineColor} ${lineWidth} m-auto my-2 ${className}`}
      {...componenetProps}
    />
  );
};

export default Hr;
