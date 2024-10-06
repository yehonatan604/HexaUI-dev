import useTheme from "../../../../Core/Hooks/useTheme";
import { LabelProps } from "./Props";

const Label = (props: LabelProps) => {
  const { text, ...componentProps } = props;
  const mode = useTheme().mode;

  const textColor = mode === "light" ? "text-gray-800" : "text-slate-200";

  return (
    <label className={`block text-sm font-medium ${textColor}`} {...componentProps}>
      {text}
    </label>
  );
};

export default Label;
