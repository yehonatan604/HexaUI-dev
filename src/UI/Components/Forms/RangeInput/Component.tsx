import { useState } from "react";
import Label from "../../../../UI/Components/Forms/Label/Component";
import Flex from "../../../../UI/Components/Layout/Flex/Component";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TRangeInput } from "../../../../Data/Types/ComponentTypes/Forms/RangeInput/TRangeInput";
import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import generateRandomId from "../../../../Core/Helpers/IdHelper";

const RangeInput = (props: TRangeInput) => {
  const { label, options, ...componentProps } = props;

  // Hooks
  const [val, setVal] = useState(0);
  const mode = useTheme().mode;
  const { palette } = useColorPalette();

  // Options
  const textColor =
    options?.textVariant ||
    (mode === "dark" ? palette.standradLight : palette.standradDark);

  // Constants
  const randomId = generateRandomId();

  // Events
  componentProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(parseInt(e.target.value));
  };

  const rangeColor =
    options?.rangeVariant === palette.info
      ? "info"
      : options?.rangeVariant === palette.success
      ? "success"
      : options?.rangeVariant === palette.warning
      ? "warning"
      : options?.rangeVariant === palette.failure
      ? "failure"
      : options?.rangeVariant === palette.info
      ? "cyan"
      : options?.rangeVariant === palette.select
      ? "purple"
      : options?.rangeVariant === palette.cancel
      ? "pink"
      : options?.rangeVariant === palette.primary
      ? "primary"
      : options?.rangeVariant === palette.secondary
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
