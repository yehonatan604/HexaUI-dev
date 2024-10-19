import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TScrollArea } from "./types/TScrollArea";

const ScrollArea = (props: TScrollArea) => {
  const { children, className, maxHeight, ...componentProps } = props;
  const { mode } = useTheme();
  // Options
  const customMaxHeight = maxHeight ? `h-${maxHeight}` : "h-screen";
  const customScrollbarClass = mode === "dark" ? `scrollbar-dark` : `scrollbar-light`;

  // JSX
  return (
    <div
      className={`${customMaxHeight} overflow-auto ${customScrollbarClass} ${className}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
