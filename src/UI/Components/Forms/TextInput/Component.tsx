import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";
import Label from "../Label/Component";
import { TextInputProps } from "./Props";

const TextInput = (props: TextInputProps) => {
  const { label, color = Variants.Info, helperText, ...componentProps } = props;

  // Hooks
  const mode = useTheme().mode;
  const getColor = useColorPalette().getColor;

  // Color Palette
  const { light, dark, failure, success, ring, standard } = getColor("textInput")!;
  const { light: helperTextLight, dark: helperTextDark } = getColor("helperText")!;

  // Variables
  const bgColor = mode === "light" ? `bg-${dark}` : `bg-${light}`;
  const textColor = mode === "light" ? `text-${light}` : `text-${dark}`;

  const helperTextColor =
    color === Variants.Failure
      ? `text-${failure}`
      : mode === "light"
      ? `text-${helperTextLight}`
      : `text-${helperTextDark}`;

  const border =
    color === Variants.Success
      ? `border border-${success}`
      : color === Variants.Failure
      ? `border border-${failure}`
      : `border border-${standard}`;

  const ringColor =
    color === Variants.Success
      ? `focus:ring-1 focus:ring-${success}`
      : color === Variants.Failure
      ? `focus:ring-1 focus:ring-${failure}`
      : `focus:ring-1 focus:ring-${ring}`;

  // JSX
  return (
    <Flex direction={FlexDir.Col} className="gap-1">
      <Label text={label} htmlFor="text" />
      <input
        id="text"
        className={`${border} ${bgColor} ${textColor} rounded-md p-2 focus:outline-none ${ringColor}`}
        {...componentProps}
      />
      {helperText && <p className={`text-sm ${helperTextColor}`}>* {helperText}</p>}
    </Flex>
  );
};

export default TextInput;
