import useTheme from "../../../../Core/Hooks/useTheme";
import { Sizes } from "../../../../Data/Constants/Sizes";
import { TButton } from "../../../../Data/Types/ComponentTypes/Common/Button/TButton";

const Button = (props: TButton) => {
  const { options, children, className, ...componentProps } = props;
  const { colors } = useTheme();
  const size = options?.size;
  const rounded = options?.rounded || false;
  const roundedS = options?.roundedS || false;
  const roundedE = options?.roundedE || false;
  const bgColor = options?.bgVariant || colors.secondaryDark;
  const textColor = options?.textVariant || colors.select;

  let buttonSize: string;
  if (size === Sizes.Sm) {
    buttonSize = "px-2 py-1 text-sm";
  } else if (size === Sizes.Lg) {
    buttonSize = "px-4 py-2 text-lg";
  } else if (size === Sizes.Xl) {
    buttonSize = "px-5 py-3 text-xl";
  } else buttonSize = "px-4 py-3 text-base";

  let buttonRounded = "rounded";
  if (rounded) {
    buttonRounded = "";
  } else if (roundedS) {
    buttonRounded = "rounded-tl rounded-bl rounded-tr-0 rounded-br-0";
  } else if (roundedE) {
    buttonRounded = "rounded-tr rounded-br rounded-tl-0 rounded-bl-0";
  }

  return (
    <button
      className={`m-[1px] pb-[6px] py-[2.75px] ${buttonRounded} ${
        buttonSize || size
      } bg-${bgColor} text-${textColor} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-500 ${className}`}
      {...componentProps}
    >
      {children}
    </button>
  );
};

export default Button;
