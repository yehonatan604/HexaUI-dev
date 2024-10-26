import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TBlock } from "./types/TBlock";

const Block = (props: TBlock) => {
  const { options, inline, children, className, innerClassName, ...componentProps } =
    props;
  const { mode } = useTheme();

  // Options
  const bgColor = options?.bgVariant || "transparent";
  let textColor = mode === "dark" ? "white-d" : "black-l";
  if (options?.textVariant) textColor = options.textVariant as string;
  const borderColor = options?.border?.variant || "transparent";
  const borderWidth = options?.border?.thickness || "border";
  const borderRadius = options?.border?.radius || "rounded";
  const block = inline ? "inline-block" : "block";
  const padding = options?.padding || "4";
  const innerPadding = options?.innerPadding || "4";

  console.log("Block -> options", options);
  console.log(textColor);

  // JSXf
  return (
    <div
      className={`${block} p-${padding} bg-${bgColor} text-${textColor} border-${borderColor} ${borderWidth} ${borderRadius} ${className}`}
      {...componentProps}
    >
      <div
        className={`${inline ? "flex items-center" : block} text-${textColor} p-${innerPadding} space-y-${!inline && innerPadding} gap-${inline && innerPadding} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
