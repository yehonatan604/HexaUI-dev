import { THr } from "./types/THr";

const Hr = (props: THr) => {
  const { options, className, ...componenetProps } = props;

  const lineWidth = options?.width || "1/2";
  const lineColor = options?.color || "standard";

  return (
    <hr
      className={`border-1 border-${lineColor} w-${lineWidth} m-auto my-2 ${className}`}
      {...componenetProps}
    />
  );
};

export default Hr;
