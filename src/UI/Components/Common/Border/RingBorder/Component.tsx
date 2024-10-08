import defaultColorPalette from "../../../../../Data/Constants/DefaultColorPalette";
import { TRingBorder } from "../../../../../Data/Types/ComponentTypes/Common/RingBorder/TRingBorder";

const RingBorder = (props: TRingBorder) => {
  const { children, options, className, ...componentProps } = props;

  // Options
  const borerColor = options?.borderVariant || defaultColorPalette.standrad;
  const ringColor = options?.ringVariant || defaultColorPalette.standradDark;
  const bgColor = options?.bgVariant || defaultColorPalette.standradLight;
  const borderWidth = options?.borderThickness || 2;
  const ringWidth = options?.ringThickness || 4;
  const textColor = options?.textVariant || defaultColorPalette.standradDark;
  const padding = options?.padding || 0;
  const rounded = options?.rounded || "md";
  const shadow =
    options?.shadow &&
    `shadow-${options?.shadow?.size || "md"} shadow-${
      options?.shadow?.color || defaultColorPalette.white
    }`;

  // JSX
  return (
    <div
      className={`text-${textColor} p-${padding} rounded-${rounded} border-${borderWidth} border-${borerColor} ring-${ringWidth} ring-${ringColor} bg-${bgColor} ${className} 
      ${shadow}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default RingBorder;
