import useTheme from "../../../../Core/Hooks/useTheme";
import { THr } from "../../../../Data/Types/ComponentTypes/Typography/Hr/THr";

const Hr = (props: THr) => {
  const { options, className, ...componenetProps } = props;
  const { colors } = useTheme();

  const lineWidth = options?.width || "1/2";
  const lineColor = options?.color || colors.standrad;

  return (
    <hr
      className={`border-1 border-${lineColor} w-${lineWidth} m-auto my-2 ${className}`}
      {...componenetProps}
    />
  );
};

export default Hr;
