import { Meta, StoryFn } from "@storybook/react";
import DataGrid from "../DataGrid";
import { TDataGrid } from "../types/TDataGrid";

export default {
  title: "Components/DataDisplay/DataGrid",
  component: DataGrid,
  argTypes: {
    options: {
      control: {
        type: "object", // Allows the options prop to be edited as an object
      },
    },
    className: {
      control: "text", // Allows className to be edited
    },
    rowsArr: { control: "object" },
  },
} as Meta;

const Template: StoryFn<TDataGrid> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  rowsArr: [
    ["ID", "Name", "Age"], // Header row
    [1, "John Doe", 30],
    [2, "Jane Smith", 25],
    [3, "Alice Johnson", 35],
  ],
  className: "text-2xl",
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  rowsArr: [
    ["ID", "Name", "Age"], // Header row
    [1, "John Doe", 30],
    [2, "Jane Smith", 25],
    [3, "Alice Johnson", 35],
  ],
  className: "text-2xl",
  options: {
    headerBgColor: "stone-800",
    headerTextColor: "white",
    rowBgColor: "zinc-800",
    rowTextColor: "white",
    rowHoverBgColor: "zinc-600",
    rowHoverTextColor: "white",
    borderVariant: "white",
    headerControls: "all",
  },
};
