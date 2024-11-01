import { Meta } from "@storybook/react";
import Table from "../Table";
import Flex from "../../../Layout/Flex/Flex";

export default {
  title: "Components/DataDisplay/Table",
  component: Table,
  argTypes: {
    rowsArr: {
      control: "object",
      description: "Array of rows containing cells for the table.",
    },
  },
} as Meta<typeof Table>;

export const Default = () => {
  return (
    <Flex center className="m-auto w-3/5">
      <Table
        rowsArr={[
          // Header row
          ["Name", "Age", "email", "Location"],
          // Data rows
          ["John Doe", 25, "john@email.com", "New York"],
          ["Jane Smith", 30, "jane@email.com", "London"],
          ["Bob Johnson", 28, "bob@email.com", "Paris"],
          ["Alice Brown", 28, "alice@email.com", "Tokyo"],
          ["Eve White", 35, "eve@email.com", "Berlin"],
          ["Sam Black", 40, "sam@email.com", "Sydney"],
        ].map((row) => row.map((cell) => <div>{cell}</div>))}
      />
    </Flex>
  );
};

export const UnstripedTable = () => {
  return (
    <Flex center className="m-auto w-3/5">
      <Table
        rowsArr={[
          // Header row
          ["Name", "Age", "email", "Location"],
          // Data rows
          ["John Doe", 25, "john@email.com", "New York"],
          ["Jane Smith", 30, "jane@email.com", "London"],
          ["Bob Johnson", 28, "bob@email.com", "Paris"],
          ["Alice Brown", 28, "alice@email.com", "Tokyo"],
          ["Eve White", 35, "eve@email.com", "Berlin"],
          ["Sam Black", 40, "sam@email.com", "Sydney"],
        ].map((row) => row.map((cell) => <div>{cell}</div>))}
        options={{ striped: false }}
      />
    </Flex>
  );
};
