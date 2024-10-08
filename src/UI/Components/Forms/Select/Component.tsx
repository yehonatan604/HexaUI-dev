import useColorPalette from "../../../../Core/Hooks/useColorPallete";
import useTheme from "../../../../Core/Hooks/useTheme";
import { TSelect } from "../../../../Data/Types/ComponentTypes/Forms/Select/TSelect";

const Select = (props: TSelect) => {
  const { options, items, ...componentProps } = props;
  const { palette } = useColorPalette();
  const { mode } = useTheme();

  const textColor = options?.textVariant || palette.standradLight;
  const bgColor =
    options?.bgVariant ||
    (mode === "light" ? palette.standradLight : palette.standradDark);
  const borderColor = options?.borderVariant || palette.standrad;
  const listItemColor = options?.listItemsVariant || palette.standradLight;

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
