import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";
import Label from "../Label/Component";
import { CheckboxProps } from "./Props";

const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    variant = Variants.Info,
    showBgColor = false,
    ...componentProps
  } = props;

  const ring =
    variant === Variants.Info
      ? "focus:ring-blue-600"
      : variant === Variants.Success
      ? "focus:ring-green-600"
      : variant === Variants.Warning
      ? "focus:ring-yellow-600"
      : variant === Variants.Failure
      ? "focus:ring-red-600"
      : variant === Variants.Cyan
      ? "focus:ring-cyan-600"
      : variant === Variants.Purple
      ? "focus:ring-purple-600"
      : variant === Variants.Pink
      ? "focus:ring-pink-600"
      : variant === Variants.Lime
      ? "focus:ring-lime-700"
      : "focus:ring-blue-600";

  const bgColor =
    variant === Variants.Info
      ? "checked:bg-blue-500 bg-transparent hover:text-blue-500"
      : variant === Variants.Success
      ? "text-green-500 bg-transparent checked:bg-green-500 hover:text-green-500"
      : variant === Variants.Warning
      ? "checked:bg-yellow-500 bg-transparent hover:text-yellow-500"
      : variant === Variants.Failure
      ? "checked:bg-red-500 bg-transparent hover:text-red-500"
      : variant === Variants.Cyan
      ? "checked:bg-cyan-500 bg-transparent hover:text-cyan-500"
      : variant === Variants.Purple
      ? "checked:bg-purple-500 bg-transparent hover:text-purple-500"
      : variant === Variants.Pink
      ? "checked:bg-pink-500 bg-transparent hover:text-pink-500"
      : variant === Variants.Lime
      ? "checked:bg-lime-500 bg-transparent hover:text-lime-500"
      : "checked:bg-blue-500 bg-transparent hover:text-blue-500";

  return (
    <Flex direction={FlexDir.Col} className="gap-1">
      <Flex className="gap-2" align={FlexTypes.Center}>
        <input
          type="checkbox"
          id="checkbox"
          className={`w-4 h-4 rounded-sm ${
            showBgColor ? bgColor : "bg-transparent"
          } ${ring}`}
          {...componentProps}
        />
        <Label htmlFor="checkbox" text={label} />
      </Flex>
    </Flex>
  );
};

export default Checkbox;
