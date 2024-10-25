import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { TTextInput } from "./types/TTextInput";
import Flex from "../../Layout/Flex/Flex";
import Label from "../Label/Label";
import generateRandomId from "../../../../Core/Helpers/IdHelper";
import { FaMagnifyingGlass } from "react-icons/fa6";

const TextInput = (props: TTextInput) => {
  const { label, options, className, innerClassName, searchIcon, ...componentProps } =
    props;

  // Options
  const bgColor = options?.bgVariant || "transparent";
  const textColor = options?.textVariant || "text-gray-800 dark:text-gray-200";
  const helperTextColor =
    options?.helperTextVariant ||
    options?.textVariant ||
    "text-gray-600 dark:text-gray-400";

  // Border Options
  const borderColor = options?.border?.variant || "standard";
  const borderThickness = options?.border?.thickness || 1;
  const borderRadius = options?.border?.radius || "md";
  const border = `border-${borderColor} border-${borderThickness} rounded-${borderRadius}`;

  // Ring Options
  const ringColor = options?.ring?.variant || "standard-d";
  const ringThickness = options?.ring?.thickness || 1;
  const focusRing = `focus:ring-${ringColor} focus:ring-${ringThickness}`;

  // Constants
  const randomId = generateRandomId();

  // JSX
  return (
    <Flex options={{ direction: FlexDir.Col }} className="gap-1">
      <div className="relative">
        <input
          id={randomId}
          type="text"
          className={`${border} bg-${bgColor} text-${textColor} p-2 ${searchIcon && "pl-10"} focus:outline-none ${focusRing} ${className}`}
          {...componentProps}
        />
        {searchIcon && (
          <FaMagnifyingGlass className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        )}
      </div>
      <Label text={label} htmlFor={randomId} />
      {options?.helperText && (
        <p className={`text-sm text-${helperTextColor} ${innerClassName}`}>
          * {options.helperText}
        </p>
      )}
    </Flex>
  );
};

export default TextInput;
