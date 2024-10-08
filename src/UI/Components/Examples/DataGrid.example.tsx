import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import Flex from "../Layout/Flex/Component";
import DataGrid from "../Layout/DataGrid/Component";
import { FlexDir } from "../../../Data/Constants/FlexDirection";
import Title from "../Typography/Title/Component";

const DataGridExample = () => {
  // Hooks
  const { mode, colors } = useTheme();

  // Options
  const textColor = mode === "dark" ? colors.infoLight : colors.infoDark;

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        direction: FlexDir.Col,
      }}
      className="m-auto mb-5 gap-4 w-3/5 text-2xl"
    >
      <Title options={{ size: "xl", textVariant: colors.secondary }}>Data Grid</Title>
      <DataGrid
        cols={3}
        rowsArr={[
          <p className="p-2">item 1</p>,
          <p className="p-2">item 2</p>,
          <p className="p-2">item 3</p>,
          <p className="p-2">item 4</p>,
          <p className="p-2">item 5</p>,
          <p className="p-2">item 6</p>,
          <p className="p-2">item 7</p>,
          <p className="p-2">item 8</p>,
          <p className="p-2">item 9</p>,
        ]}
        className={`text-${textColor} text-sm`}
      />
    </Flex>
  );
};

export default DataGridExample;
