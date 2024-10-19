import useTheme from "../../../../Core/Context/ThemeContext/hooks/useTheme";
import { TSelect } from "./types/TSelect";

const Select = (props: TSelect) => {
  const { options, items, ...componentProps } = props;
  // Hooks
  const { colors, mode } = useTheme();

  // Options
  const textColor =
    options?.textVariant ||
    (mode === "light" ? colors.standradDark : colors.standradLight);
  const borderColor = options?.border?.variant || colors.standrad;
  const listItemColor =
    options?.listItemsVariant ||
    (mode === "light" ? colors.standradDark : colors.standradLight);
  const listItemsBgColor =
    options?.listItemsBgVariant ||
    (mode === "light" ? colors.backgroundLight : colors.backgroundDark);
  const bgColor = options?.bgVariant || "transparent";

  // JSX
  return (
    <select
      {...componentProps}
      className={`rounded border border-${borderColor} bg-${bgColor} text-${textColor}`}
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
