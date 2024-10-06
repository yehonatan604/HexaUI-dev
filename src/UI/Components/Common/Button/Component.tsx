import { Sizes } from "../../../../Data/Constants/Sizes";
import { Variants } from "../../../../Data/Constants/Variants";
import { ButtonProps } from "./Props";

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = Variants.Info,
    size = Sizes.Md,
    rounded = true,
    roundedS,
    roundedE,
    className,
    ...componentProps
  } = props;

  const buttonSize =
    size === Sizes.Sm
      ? "px-2 py-1 text-sm"
      : size === Sizes.Lg
      ? "px-4 py-2 text-lg"
      : "px-3 py-2 text-base";
  const buttonVariant =
    variant === Variants.Info
      ? "bg-blue-500 text-white"
      : variant === Variants.Success
      ? "bg-green-600 text-white"
      : variant === Variants.Warning
      ? "bg-yellow-500 text-white"
      : variant === Variants.Failure
      ? "bg-red-500 text-white"
      : variant === Variants.Lime
      ? "bg-lime-500 text-white"
      : variant === Variants.Cyan
      ? "bg-cyan-500 text-white"
      : variant === Variants.Purple
      ? "bg-purple-500 text-white"
      : variant === Variants.Pink
      ? "bg-pink-500 text-white"
      : "bg-gray-500 text-white";

  let buttonRounded = rounded ? "rounded" : "";

  if (roundedE || roundedS)
    buttonRounded = roundedS
      ? " rounded-tl rounded-bl rounded-tr-0 rounded-br-0"
      : roundedE
      ? " rounded-tr rounded-br rounded-tl-0 rounded-bl-0"
      : "";

  return (
    <button
      className={`m-[1px] pb-[6px] py-[2.75px] ${buttonRounded} ${buttonSize} ${buttonVariant} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-500 ${className}`}
      {...componentProps}
    >
      {children}
    </button>
  );
};

export default Button;
