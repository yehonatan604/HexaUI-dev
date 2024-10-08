import { paddingHelper } from "../../../../../Core/Helpers/Padding.helper";
import useTheme from "../../../../../Core/Hooks/useTheme";
import { TRainbowBorder } from "../../../../../Data/Types/ComponentTypes/Common/Rainbow-border/TRainbowBorder";

const RainbowBorder = (props: TRainbowBorder) => {
  const { children, options, ...componentProps } = props;

  //Hooks
  const { gradients } = useTheme();

  // Options
  const borderThickness = paddingHelper(options.thickness ?? 1.5);
  const gradient = options.gradient ?? gradients.primary;

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
