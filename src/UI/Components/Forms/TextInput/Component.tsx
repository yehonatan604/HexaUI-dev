import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { TTextInput } from "../../../../Data/Types/ComponentTypes/Forms/TextInput/TTextInput";
import Flex from "../../Layout/Flex/Component";
import Label from "../Label/Component";
import generateRandomId from "../../../../Core/Helpers/IdHelper";

const TextInput = (props: TTextInput) => {
  const { label, options, ...componentProps } = props;

  // Hooks
  const mode = useTheme().mode;
  const { palette } = useColorPalette();

  // Options
  const bgColor =
    options?.bgVariant ||
    (mode === "light" ? palette.standradLight : palette.standradDark);
  const textColor =
    options?.textVariant ||
    (mode === "light" ? palette.standradDark : palette.standradLight);
  const helperTextColor = options?.helperTextVariant || options?.textVariant;

  // Border Options
  const borderColor = options?.border?.variant || palette.standrad;
  const borderThickness = options?.border?.thickness || 1;
  const borderRadius = options?.border?.radius || "md";
  const border = `border-${borderColor} border-${borderThickness} rounded-${borderRadius}`;

  // Ring Options
  const ringColor = options?.ring?.variant || palette.standradDark;
  const ringThickness = options?.ring?.thickness || 1;
  const focusRing = `focus:ring-${ringColor} focus:ring-${ringThickness}`;

  // Constants
  const randomId = generateRandomId();

  // JSX
  return (
    <Flex options={{ direction: FlexDir.Col }} className="gap-1">
      <Label text={label} htmlFor={randomId} />
      <input
        id={randomId}
        className={`${border} bg-${bgColor} text-${textColor} p-2 focus:outline-none ${focusRing}`}
        {...componentProps}
      />
      {options?.helperText && (
        <p className={`text-sm text-${helperTextColor}`}>* {options.helperText}</p>
      )}
    </Flex>
  );
};

export default TextInput;
