import { Meta } from "@storybook/react";
import DataGrid from "../DataGrid";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Flex from "../../../Layout/Flex/Flex";
import ThemeProvider from "../../../../../Core/Context/ThemeContext/providers/Theme.provider";
import ThemeToggler from "../../../Core/ThemeToggler/ThemeToggler";

export default {
  title: "Components/DataDisplay/DataGrid",
  component: DataGrid,
  ...defaultStory,
  argTypes: {
    rowsArr: { control: "object" },
  },
} as Meta<typeof DataGrid>;

export const Default = () => (
  <ThemeProvider>
    <Flex options={{ direction: "col" }} center className="h-96 gap-10">
      <ThemeToggler className="text-4xl" />
      <div className="w-3/4">
        <DataGrid
          rowsArr={[
            ["ID", "Name", "Age", "Country", "Salary"],
            ["654-RYH-943", "John Doe", 30, "USA", 2000],
            ["173-FUI-725", "Jane Smith", 25, "Canada", 1500],
            ["965-YUR-798", "Alice Johnson", 35, "UK", 2500],
          ]}
        />
      </div>
    </Flex>
  </ThemeProvider>
);
