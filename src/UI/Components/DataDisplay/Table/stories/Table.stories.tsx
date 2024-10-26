import { Meta, StoryObj } from "@storybook/react";
import Table from "../Table";

const meta: Meta<typeof Table> = {
  title: "Components/DataDisplay/Table",
  component: Table,
  argTypes: {
    options: {
      control: "object",
      description: "Table styling options such as colors, border, padding, etc.",
    },
    rowsArr: {
      control: "object",
      description: "Array of rows containing cells for the table.",
    },
    className: {
      control: "text",
      description: "Additional classnames to apply to the table.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    options: {
      borderVariant: "gray-700",
      headerBgColor: "gray-800",
      headerTextColor: "white",
      rowBgColor: "gray-900",
      rowTextColor: "gray-100",
      rowHoverBgColor: "gray-700",
      rowHoverTextColor: "white",
      stripedBgColor: "gray-800/50",
      stripedTextColor: "gray-100",
      padding: "4",
      striped: true,
      border: {
        thickness: "border",
        radius: "rounded-xl",
      },
    },
    rowsArr: [
      ["Header 1", "Header 2", "Header 3"],
      ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
      ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
      ["Row 3 Cell 1", "Row 3 Cell 2", "Row 3 Cell 3"],
    ],
  },
};

export const NotStriped: Story = {
  args: {
    ...Default.args,
    options: {
      ...Default.args.options,
      striped: false,
    },
  },
};
