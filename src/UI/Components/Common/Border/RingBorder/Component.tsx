import { Variants } from "../../../../../Data/Constants/Variants";
import { RingBorderProps } from "./Props";

const RingBorder = (props: RingBorderProps) => {
  const {
    children,
    className = "",
    variant = Variants.Info,
    borderWidth = "border-2",
    ringWidth = "ring-4",
    ...componentProps
  } = props;

  const bColor =
    variant === Variants.Info
      ? "border-stone-600"
      : variant === Variants.Success
      ? "border-lime-400"
      : variant === Variants.Warning
      ? "border-amber-400"
      : variant === Variants.Failure
      ? "border-red-400"
      : variant === Variants.Lime
      ? "border-green-400"
      : variant === Variants.Cyan
      ? "border-blue-400"
      : variant === Variants.Purple
      ? "border-purple-400"
      : variant === Variants.Pink
      ? "border-pink-400"
      : "border-stone-600";

  const rColor =
    variant === Variants.Info
      ? "ring-stone-700"
      : variant === Variants.Success
      ? "ring-lime-500"
      : variant === Variants.Warning
      ? "ring-amber-500"
      : variant === Variants.Failure
      ? "ring-red-500"
      : variant === Variants.Lime
      ? "ring-green-500"
      : variant === Variants.Cyan
      ? "ring-blue-500"
      : variant === Variants.Purple
      ? "ring-purple-500"
      : variant === Variants.Pink
      ? "ring-pink-500"
      : "ring-stone-700";

  const bgColor =
    variant === Variants.Info
      ? "bg-stone-600"
      : variant === Variants.Success
      ? "bg-lime-100"
      : variant === Variants.Warning
      ? "bg-amber-100"
      : variant === Variants.Failure
      ? "bg-red-100"
      : variant === Variants.Lime
      ? "bg-green-100"
      : variant === Variants.Cyan
      ? "bg-blue-100"
      : variant === Variants.Purple
      ? "bg-purple-100"
      : variant === Variants.Pink
      ? "bg-pink-100"
      : "bg-stone-600";

  return (
    <div
      className={`rounded-md ${bgColor} ${borderWidth} ${bColor} ${ringWidth} ${rColor} ${className}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default RingBorder;
