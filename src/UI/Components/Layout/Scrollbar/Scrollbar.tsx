import useTheme from "../../../../Core/Hooks/useTheme";
import { TScrollbar } from "../../../../Data/Types/ComponentTypes/Layout/Scrollbar/TScrollbar";

const Scrollbar = (props: TScrollbar) => {
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

export default Scrollbar;
