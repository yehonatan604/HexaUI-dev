import useTheme from "../../../../Core/Hooks/useTheme";
import { TSelect } from "../../../../Data/Types/ComponentTypes/Forms/Select/TSelect";

const Select = (props: TSelect) => {
  const { options, items, ...componentProps } = props;
  const { mode, colors } = useTheme();

  const textColor = options?.textVariant || colors.standradLight;
  const bgColor =
    options?.bgVariant || (mode === "light" ? colors.standradLight : colors.standradDark);
  const borderColor = options?.borderVariant || colors.standrad;
  const listItemColor = options?.listItemsVariant || colors.standradLight;

  return (
    <select
      {...componentProps}
      className={`rounded border border-${borderColor} bg-${bgColor} text-${textColor}`}
    >
      {items.map((option, index) => (
        <option key={index} value={option.value} className={`text-${listItemColor}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
