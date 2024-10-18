import useTheme from "../../../../Core/Hooks/useTheme";
import { TAutoGrid } from "../../../../Data/Types/ComponentTypes/Layout/AutoGrid/TAutoGrid";

const AutoGrid = (props: TAutoGrid) => {
  const { rowsArr, cols, options, ...componentProps } = props;

  //Hooks
  const { mode, colors } = useTheme();

  // Options
  const showBorder = options?.border.show || true;
  const defaultBorderColor = mode === "dark" ? colors.standradLight : colors.standradDark;
  const borderColor = options?.borderVariant || defaultBorderColor;

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
        <div key={index} className={`${showBorder && "border"} border-${borderColor}`}>
          {row}
        </div>
      ))}
    </div>
  );
};

export default AutoGrid;
