import { TLabel } from "./types/TLabel";

const Label = (props: TLabel) => {
  const { text, options, ...componentProps } = props;

  // Options
  const textColor = options?.textVariant
    ? `text-${options.textVariant}`
    : "dark:text-standard-l text-standard-d";

  // JSX
  return (
    <label className={`block text-sm font-medium ${textColor}`} {...componentProps}>
      {text}
    </label>
  );
};

export default Label;
