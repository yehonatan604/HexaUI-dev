import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../Data/Constants/FlexWrap";
import { TFlex } from "../../../../Data/Types/ComponentTypes/Layout/Flex/TFlex";
import Flex from "./Flex";

const FlexCenter = (props: TFlex) => {
  const { children, options, className, ...componentProps } = props;

  // Options
  const direction = options?.direction || FlexDir.Row;
  const wrap = options?.wrap || FlexWrap.NoWrap;

  // JSX
  return (
    <Flex
      options={{ ...options, justify: FlexTypes.Center, align: FlexTypes.Center }}
      className={`flex-${direction} flex-${wrap} ${className}`}
      {...componentProps}
    >
      {children}
    </Flex>
  );
};

export default FlexCenter;
