import useTheme from "../../../../Core/Hooks/useTheme";
import { TRing } from "../../../../Data/Types/ComponentTypes/Common/RingBorder/TRingBorder";

const Ring = (props: TRing) => {
  const { children, options, className, ...componentProps } = props;

  // Hooks
  const { colors } = useTheme();

  // Options
  const borerColor = options?.borderVariant || colors.standrad;
  const ringColor = options?.ringVariant || colors.standradDark;
  const bgColor = options?.bgVariant || colors.standradLight;
  const borderWidth = options?.borderThickness || 2;
  const ringWidth = options?.ringThickness || 4;
  const textColor = options?.textVariant || colors.standradDark;
  const padding = options?.padding || 0;
  const rounded = options?.rounded || "md";
  const shadow =
    options?.shadow &&
    `shadow-${options?.shadow?.size || "md"} shadow-${
      options?.shadow?.color || colors.white
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

export default Ring;
