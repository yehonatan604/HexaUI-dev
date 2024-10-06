import { paddingHelper } from "../../../../../Core/Helpers/Padding.helper";
import { Variants } from "../../../../../Data/Constants/Variants";
import { RainbowBorderProps } from "./Props";

const RainbowBorder = (props: RainbowBorderProps) => {
  const {
    children,
    variant = Variants.Info,
    className,
    borderWidth,
    ...componentProps
  } = props;

  const padding = paddingHelper(borderWidth ?? 1.5);

  const gradient =
    variant === Variants.Info
      ? "from-blue-400 via-blue-600 via-blue-800 via-green-500 via-green-800 to-cyan-400"
      : variant === Variants.Success
      ? "from-green-400 via-green-600 via-green-800 via-violet-500 via-violet-800 to-lime-400"
      : variant === Variants.Warning
      ? "from-amber-400 via-amber-600 via-amber-800 via-orange-500 via-yellow-800 to-rose-400"
      : variant === Variants.Failure
      ? "from-red-400 via-red-600 via-rose-300 via-rose-500 to-red-700"
      : variant === Variants.Lime
      ? "from-lime-400 via-lime-600 via-lime-800 via-green-500 via-green-800 to-green-400"
      : variant === Variants.Cyan
      ? "from-cyan-400 via-cyan-600 via-cyan-800 via-yellow-500 via-yellow-800 to-blue-400"
      : variant === Variants.Purple
      ? "from-purple-400 via-purple-600 via-purple-800 via-red-500 via-red-800 to-purple-800"
      : variant === Variants.Pink
      ? "from-pink-400 via-pink-600 via-pink-800 via-yellow-500 via-yellow-800 to-pink-600"
      : "from-blue-400 via-blue-600 via-blue-800 via-green-500 via-green-800 to-cyan-400";

  return (
    <div
      className={`${padding} rounded bg-gradient-to-br ${gradient} ${className}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default RainbowBorder;
