//import useColorPalette from "../../../../Core/Hooks/useColorPallete";
//import useTheme from "../../../../Core/Hooks/useTheme";
//import { Variants } from "../../../../Data/Enums/Variants.enum";
import { GridProps } from "./Props";

const AutoGrid = (props: GridProps) => {
  const { rowsArr, cols, showBorder, ...componentProps } = props;

  // Hooks
  //const mode = useTheme().mode;

  // Color Palette
  //const { light, dark } = useColorPalette().getColor(Variants.Standard)!;

  // Variables
  const borderColor = `border-zinc-800`;

  // JSX
  return (
    <div
      {...componentProps}
      style={{
        display: "inline-grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {rowsArr.map((row, index) => (
        <div key={index} className={`${showBorder && "border"} ${borderColor}`}>
          {row}
        </div>
      ))}
    </div>
  );
};

export default AutoGrid;
