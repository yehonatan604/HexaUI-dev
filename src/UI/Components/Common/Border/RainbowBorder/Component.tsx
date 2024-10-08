import { paddingHelper } from "../../../../../Core/Helpers/Padding.helper";
import defaultGradientPalette from "../../../../../Data/Constants/DefaultGradientPalette";
import { TRainbowBorder } from "../../../../../Data/Types/ComponentTypes/Common/Rainbow-border/TRainbowBorder";

const RainbowBorder = (props: TRainbowBorder) => {
  const { children, options, ...componentProps } = props;

  // Options
  const borderThickness = paddingHelper(options.thickness ?? 1.5);
  const gradient = options.gradient ?? defaultGradientPalette.primary;

  // JSX
  return (
    <div
      className={`${borderThickness} rounded bg-gradient-to-br ${gradient}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default RainbowBorder;
