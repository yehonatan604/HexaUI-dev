import { useState } from "react";
import Label from "../Label/Label";
import Flex from "../../Layout/Flex/Flex";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TRangeInput } from "./types/TRangeInput";
import generateRandomId from "../../../../Core/Helpers/IdHelper";

const RangeInput = (props: TRangeInput) => {
  const { label, options, ...componentProps } = props;

  // Hooks
  const [val, setVal] = useState(0);

  // Options
  const textColor = options?.textVariant
    ? `text-${options.textVariant}`
    : "dark:text-standard-l text-standard-d";

  // Constants
  const randomId = generateRandomId();

  // Events
  componentProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(parseInt(e.target.value));
  };

  return (
    <Flex options={{ direction: FlexDir.Col }} className="gap-1 w-2/12">
      {label && <Label text={label} htmlFor={randomId} />}
      <Flex
        className={`range ${options?.rangeVariant || "info"} gap-6`}
        options={{
          align: FlexTypes.Center,
        }}
      >
        <input
          type="range"
          id={randomId}
          className="border-0"
          {...componentProps}
          defaultValue={val}
        />
        <span className={`${textColor}`}>{val}</span>
      </Flex>
    </Flex>
  );
};

export default RangeInput;
