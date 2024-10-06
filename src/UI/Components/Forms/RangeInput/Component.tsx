import { useState } from "react";
import Label from "../../../../UI/Components/Forms/Label/Component";
import Flex from "../../../../UI/Components/Layout/Flex/Component";
import useTheme from "../../../../Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../Data/Constants/Variants";
import { RangeInputProps } from "./Props";

const RangeInput = (props: RangeInputProps) => {
  const { label, variant = Variants.Standard, ...componentProps } = props;
  const [val, setVal] = useState(0);
  const mode = useTheme().mode;
  const textColor = mode === "light" ? "text-zinc-900" : "text-zinc-200";

  componentProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(parseInt(e.target.value));
  };

  const rangeColor =
    variant === Variants.Info
      ? "info"
      : variant === Variants.Success
      ? "success"
      : variant === Variants.Warning
      ? "warning"
      : variant === Variants.Failure
      ? "failure"
      : variant === Variants.Cyan
      ? "cyan"
      : variant === Variants.Purple
      ? "purple"
      : variant === Variants.Pink
      ? "pink"
      : variant === Variants.Lime
      ? "lime"
      : "standard";

  return (
    <Flex direction={FlexDir.Col} className="gap-1">
      <Label text={label} htmlFor="input" />
      <Flex className={`range ${rangeColor} gap-2`} align={FlexTypes.Center}>
        <input
          type="range"
          id="input"
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
