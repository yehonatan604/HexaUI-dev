import { TSelect } from "./types/TSelect";

const Select = (props: TSelect) => {
  const { options, items, ...componentProps } = props;

  // Options
  const textColor = options?.textVariant || "text-gray-800 dark:text-gray-200";
  const borderColor = options?.border?.variant || "border-gray-300 dark:border-standard";
  const listItemColor = options?.listItemsVariant || "text-gray-800 dark:text-gray-200";
  const listItemsBgColor = options?.listItemsBgVariant || "bg-white dark:bg-gray-800";
  const bgColor = options?.bgVariant || "bg-transparent";

  // JSX
  return (
    <select
      {...componentProps}
      className={`rounded border border-${borderColor} bg-${bgColor} text-${textColor} mb-1`}
    >
      {items.map((option, index) => (
        <option
          key={index}
          value={option.value}
          className={`text-${listItemColor} bg-${listItemsBgColor}`}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
