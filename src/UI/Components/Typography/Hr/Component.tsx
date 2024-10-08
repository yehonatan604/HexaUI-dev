import useColorPalette from "../../../..//Core/Hooks/useColorPallete";
import { THr } from "../../../../Data/Types/ComponentTypes/Typography/Hr/THr";

const Hr = (props: THr) => {
  const { options, className, ...componenetProps } = props;
  const { palette } = useColorPalette();

  const lineWidth = options?.width || "1/2";
  const lineColor = options?.color || palette.standrad;

  return (
    <hr
      className={`border-1 border-${lineColor} w-${lineWidth} m-auto my-2 ${className}`}
      {...componenetProps}
    />
  );
};

export default Hr;
