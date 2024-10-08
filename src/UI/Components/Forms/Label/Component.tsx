import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { TLabel } from "../../../../Data/Types/ComponentTypes/Forms/Label/TLabel";

const Label = (props: TLabel) => {
  const { text, options, ...componentProps } = props;

  // Hooks
  const { palette } = useColorPalette();
  const { mode } = useTheme();

  // Options
  const textColor =
    options?.textVariant ||
    (mode === "dark" ? palette.standradLight : palette.standradDark);

  // JSX
  return (
    <label className={`block text-sm font-medium text-${textColor}`} {...componentProps}>
      {text}
    </label>
  );
};

export default Label;
