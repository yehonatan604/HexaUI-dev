import { TAutoGrid } from "./types/TAutoGrid";

const AutoGrid = (props: TAutoGrid) => {
  const { rowsArr, cols, options, ...componentProps } = props;

  // Options
  const showBorder = options?.border?.show || true;
  const defaultBorderColor = "border-dtandard-d dark:border-standard-l";
  const borderColor = options?.borderVariant || defaultBorderColor;

  // JSX
  return (
    <div
      role="grid"
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
