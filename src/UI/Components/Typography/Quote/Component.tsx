import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TQuote } from "../../../../Data/Types/ComponentTypes/Typography/Quote/TQuote";
import Flex from "../../Layout/Flex/Component";

const Quote = (props: TQuote) => {
  const { children, cite, options, className, ...componenetProps } = props;

  // Hooks
  const { colors } = useTheme();

  // Colors
  const quoteColor = options?.textVariant || colors.standrad;
  const citeColor = cite.variant || colors.standrad;
  const flexGap = options?.gap || 4;

  // JSX
  return (
    <>
      <blockquote className={`${className} m-auto`} {...componenetProps}>
        <Flex
          options={{
            direction: FlexDir.Col,
            align:
              cite.placement === "start"
                ? FlexTypes.Start
                : cite.placement === "end"
                ? FlexTypes.End
                : FlexTypes.Center,
          }}
          className={`gap-${flexGap} w-1/2 m-auto`}
        >
          <p className={`text-${quoteColor} text-pretty font-serif italic`}>
            " {children} "
          </p>
          <a href={cite.url} className={`text-sm text-${citeColor} hover:opacity-70`}>
            {cite.text}
          </a>
        </Flex>
      </blockquote>
    </>
  );
};

export default Quote;
