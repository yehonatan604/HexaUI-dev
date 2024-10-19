import { useEffect } from "react";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../Data/Constants/FlexWrap";
import { TFlex } from "./types/TFlex";

const Flex = (props: TFlex) => {
  const { children, options, className, center, end, ...componentProps } = props;

  // Options
  const bgVariant = options?.bgVariant || "";
  const textVariant = options?.textVariant || "";
  const directionClass = options?.direction || FlexDir.Row;
  const justifyClass = center
    ? FlexTypes.Center
    : end
    ? FlexTypes.End
    : options?.justify || FlexTypes.Start;
  const alignClass = center
    ? FlexTypes.Center
    : end
    ? FlexTypes.End
    : options?.align || FlexTypes.Start;
  const wrapClass = center ? FlexWrap.Wrap : options?.wrap || FlexWrap.NoWrap;

  useEffect(() => {
    if (center && end) {
      console.error("Flex component can't have both center and end props");
    }
  }, [center, end]);

  // JSX
  return (
    <div
      className={`flex flex-${directionClass} bg-${bgVariant} text-${textVariant} justify-${justifyClass} items-${alignClass} flex-${wrapClass} ${className}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default Flex;
