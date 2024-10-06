import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../Data/Constants/FlexWrap";
import { FlexProps } from "./Props";

const Flex = (props: FlexProps) => {
  const {
    children,
    direction = FlexDir.Row,
    justify = FlexTypes.Start,
    align = FlexTypes.Start,
    wrap = FlexWrap.NoWrap,
    className,
    ...componentProps
  } = props;

  const directionClass = direction === FlexDir.Row ? "flex-row" : "flex-col";
  const justifyClass =
    justify === FlexTypes.Center
      ? "justify-center"
      : justify === FlexTypes.End
      ? "justify-end"
      : justify === FlexTypes.SpaceBetween
      ? "justify-between"
      : justify === FlexTypes.SpaceAround
      ? "justify-around"
      : justify === FlexTypes.SpaceEvenly
      ? "justify-evenly"
      : "justify-start";
  const alignClass =
    align === FlexTypes.Center
      ? "items-center"
      : align === FlexTypes.End
      ? "items-end"
      : align === FlexTypes.Baseline
      ? "items-baseline"
      : align === FlexTypes.Stretch
      ? "items-stretch"
      : "items-start";
  const wrapClass =
    wrap === FlexWrap.Wrap
      ? "flex-wrap"
      : wrap === FlexWrap.WrapReverse
      ? "flex-wrap-reverse"
      : "flex-nowrap";

  return (
    <div
      className={`flex ${directionClass} ${justifyClass} ${alignClass} ${wrapClass} ${className}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default Flex;
