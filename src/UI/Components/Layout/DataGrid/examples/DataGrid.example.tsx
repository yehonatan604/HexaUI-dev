import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import Flex from "../../Flex/Flex";
import DataGrid from "../DataGrid";

const DataGridExamples = () => {
  const rows = [
    // Header row
    ["Name", "Age", "email", "Location"],
    // Data rows
    ["John Doe", 25, "john@email.com", "New York"],
    ["Jane Smith", 30, "jane@email.com", "London"],
    ["Bob Johnson", 28, "bob@email.com", "Paris"],
    ["Alice Brown", 28, "alice@email.com", "Tokyo"],
    ["Eve White", 35, "eve@email.com", "Berlin"],
    ["Sam Black", 40, "sam@email.com", "Sydney"],
  ].map((row) => row.map((cell) => <div>{cell}</div>));

  return (
    <Flex
      center
      options={{ direction: FlexDir.Col }}
      className="m-auto mb-5 gap-4 w-3/5 text-2xl"
    >
      <DataGrid rowsArr={rows} />
    </Flex>
  );
};

export default DataGridExamples;
