import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Flex from "../../../Layout/Flex/Flex";
import Select from "../Select";

export default {
  title: "Components/Forms/Select",
  component: Select,
  ...defaultStory,
  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },
    options: {
      control: {
        type: "object",
      },
    },
  },
};

export const SelectExamples = () => {
  return (
    <Flex center className="h-96 gap-4">
      <Select
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        options={{ bgVariant: "black", textVariant: "white-d" }}
      />
      <Select
        options={{
          textVariant: "primary",
          bgVariant: "black",
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
      />
      <Select
        options={{
          textVariant: "success",
          bgVariant: "black",
          listItemsVariant: "success",
          border: {
            variant: "approve",
          },
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
      />
    </Flex>
  );
};
