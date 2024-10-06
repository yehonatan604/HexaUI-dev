import { getRandomColor } from "../../../../Core/Helpers/Color.helper";
import useTheme from "../../../../Core/Hooks/useTheme";
import { Variants } from "../../../../Data/Constants/Variants";
import { SelectProps } from "./Props";

const Select = (props: SelectProps) => {
  const {
    options,
    variant = Variants.Standard,
    listItemsVariant = Variants.Standard,
    ...componentProps
  } = props;
  const mode = useTheme().mode;

  const textColor =
    variant === Variants.Failure
      ? "text-red-500"
      : variant === Variants.Success
      ? "text-green-500"
      : variant === Variants.Warning
      ? "text-yellow-500"
      : variant === Variants.Info
      ? "text-blue-500"
      : variant === Variants.Lime
      ? "text-lime-500"
      : variant === Variants.Cyan
      ? "text-cyan-500"
      : variant === Variants.Purple
      ? "text-purple-500"
      : variant === Variants.Pink
      ? "text-pink-500"
      : mode === "light"
      ? "text-zinc-800"
      : "text-zinc-300";
  const bgColor = mode === "light" ? "bg-zinc-100" : "bg-zinc-800";

  const borderColor =
    variant === Variants.Failure
      ? "border-red-500"
      : variant === Variants.Success
      ? "border-green-500"
      : variant === Variants.Warning
      ? "border-yellow-500"
      : variant === Variants.Info
      ? "border-blue-500"
      : variant === Variants.Lime
      ? "border-lime-500"
      : variant === Variants.Cyan
      ? "border-cyan-500"
      : variant === Variants.Purple
      ? "border-purple-500"
      : variant === Variants.Pink
      ? "border-pink-500"
      : mode === "light"
      ? "border-zinc-800"
      : "border-zinc-300";

  const listItemColor =
    listItemsVariant === Variants.Failure
      ? "text-red-500"
      : listItemsVariant === Variants.Success
      ? "text-green-500"
      : listItemsVariant === Variants.Warning
      ? "text-yellow-500"
      : listItemsVariant === Variants.Info
      ? "text-blue-500"
      : listItemsVariant === Variants.Lime
      ? "text-lime-500"
      : listItemsVariant === Variants.Cyan
      ? "text-cyan-500"
      : listItemsVariant === Variants.Purple
      ? "text-purple-500"
      : listItemsVariant === Variants.Pink
      ? "text-pink-500"
      : listItemsVariant === "random"
      ? getRandomColor()
      : mode === "light"
      ? "text-zinc-800"
      : "text-zinc-300";

  return (
    <select
      {...componentProps}
      className={`rounded border ${borderColor} ${textColor} ${bgColor} cursor-pointer`}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          className={`${
            listItemsVariant
              ? listItemsVariant === "rainbow"
                ? getRandomColor()
                : listItemColor
              : textColor
          }`}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
