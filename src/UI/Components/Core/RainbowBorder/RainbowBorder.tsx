import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TRainbowBorder } from "./types/TRainbowBorder";

const RainbowBorder = (props: TRainbowBorder) => {
  const { children, options, className, innerClassName, ...componentProps } = props;

  //Hooks
  const { gradients, colors } = useTheme();

  // Options
  const borderThickness = options?.thickness || "[1.5px]";
  const gradient = options?.gradient || gradients.primary;
  const rounded = `${options?.rounded ? "rounded-" + options?.rounded : "rounded"}`;

  // Inner Options
  const innerBgColor = options?.innerBgVariant || colors.black;
  const innerTextColor = options?.innerTextVariant || colors.white;
  const innerRounded = `${
    options?.innerRounded
      ? "rounded-" + options?.innerRounded
      : options?.rounded
      ? "rounded-" + options?.rounded
      : "rounded"
  }`;

  // JSX
  return (
    <div
      className={`p-${borderThickness} ${rounded} bg-gradient-to-br ${gradient} ${className}`}
      {...componentProps}
    >
      <div
        className={`text-${innerTextColor} bg-${innerBgColor} ${innerRounded} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default RainbowBorder;
