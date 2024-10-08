import { useState } from "react";
import Label from "../../../../UI/Components/Forms/Label/Component";
import Flex from "../../../../UI/Components/Layout/Flex/Component";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TRangeInput } from "../../../../Data/Types/ComponentTypes/Forms/RangeInput/TRangeInput";
import generateRandomId from "../../../../Core/Helpers/IdHelper";

const RangeInput = (props: TRangeInput) => {
  const { label, options, ...componentProps } = props;

  // Hooks
  const [val, setVal] = useState(0);
  const { mode, colors } = useTheme();

  // Options
  const textColor =
    options?.textVariant ||
    (mode === "dark" ? colors.standradLight : colors.standradDark);

  // Constants
  const randomId = generateRandomId();

  // Events
  componentProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(parseInt(e.target.value));
  };

  const rangeColor =
    options?.rangeVariant === colors.info
      ? "info"
      : options?.rangeVariant === colors.success
      ? "success"
      : options?.rangeVariant === colors.warning
      ? "warning"
      : options?.rangeVariant === colors.failure
      ? "failure"
      : options?.rangeVariant === colors.info
      ? "cyan"
      : options?.rangeVariant === colors.select
      ? "purple"
      : options?.rangeVariant === colors.cancel
      ? "pink"
      : options?.rangeVariant === colors.primary
      ? "primary"
      : options?.rangeVariant === colors.secondary
      ? "secondary"
      : "standard";

  return (
    <Flex options={{ direction: FlexDir.Col }} className="gap-1">
      <Label text={label} htmlFor={randomId} />
      <Flex
        className={`range ${rangeColor} gap-2`}
        options={{
          align: FlexTypes.Center,
        }}
      >
        <input
          type="range"
          id={randomId}
          className="border-0 rounded-md p-2"
          {...componentProps}
          defaultValue={val}
        />
        <span className={`${textColor}`}>{val}</span>
      </Flex>
    </Flex>
  );
};

export default RangeInput;
