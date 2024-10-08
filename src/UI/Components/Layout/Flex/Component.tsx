import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../Data/Constants/FlexWrap";
import { TFlex } from "../../../../Data/Types/ComponentTypes/Layout/Flex/TFlex";

const Flex = (props: TFlex) => {
  const { children, options, className, ...componentProps } = props;

  // Options
  const directionClass = options?.direction || FlexDir.Row;
  const justifyClass = options?.justify || FlexTypes.Start;
  const alignClass = options?.align || FlexTypes.Start;
  const wrapClass = options?.wrap || FlexWrap.NoWrap;

  // JSX
  return (
    <div
      className={`flex flex-${directionClass} justify-${justifyClass} items-${alignClass} flex-${wrapClass} ${className}`}
      {...componentProps}
    >
      {children}
    </div>
  );
};

export default Flex;
