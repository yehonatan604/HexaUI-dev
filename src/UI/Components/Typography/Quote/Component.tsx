import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Flex from "../../Layout/Flex/Component";
import { QuoteProps } from "./Props";

const Quote = (props: QuoteProps) => {
  const { children, cite, className, gap, ...componenetProps } = props;

  // Hooks
  const mode = useTheme().mode;
  const isLightMode = mode === "light";
  const getColor = useColorPalette().getColor;

  // Color Palette
  const { light: lightQuote, dark: darkQuote } = getColor("quote")!;
  const { light: lightCite, dark: darkCite } = getColor("cite")!;
  const { light: lightCiteHover, dark: darkCiteHover } = getColor("citeHover")!;

  // Colors
  const quoteColor = isLightMode ? `text-${lightQuote}` : `text-${darkQuote}`;
  const citeColor = isLightMode ? `text-${lightCite}` : `text-${darkCite}`;
  const citeHoverColor = isLightMode
    ? `hover:text-${lightCiteHover}`
    : `hover:text-${darkCiteHover}`;
  const flexGap = gap || "gap-1";

  // JSX
  return (
    <>
      <blockquote className={`${className} m-auto`} {...componenetProps}>
        <Flex
          direction={FlexDir.Col}
          align={
            cite.placement === "start"
              ? FlexTypes.Start
              : cite.placement === "end"
              ? FlexTypes.End
              : FlexTypes.Center
          }
          className={`${flexGap} w-1/2 m-auto`}
        >
          <p className={`${quoteColor} text-pretty font-serif italic`}>" {children} "</p>
          <a href={cite.url} className={`text-sm ${citeColor} ${citeHoverColor}`}>
            {cite.text}
          </a>
        </Flex>
      </blockquote>
    </>
  );
};

export default Quote;
