import "../../../../../main.css";
import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import Flex from "../../../Layout/Flex/Flex";
import RangeInput from "../RangeInput";

export default {
  title: "Components/Forms/RangeInput",
  component: RangeInput,
  ...defaultStory,
};

export const RangeInputExamples = () => {
  return (
    <Flex center options={{ direction: "col" }} className="m-auto gap-4 w-3/4">
      <RangeInput label="With Label" />
      <RangeInput
        options={{
          textVariant: "primary",
          rangeVariant: "primary",
        }}
      />
      <RangeInput
        options={{
          textVariant: "warning",
          rangeVariant: "warning",
        }}
      />
      <RangeInput
        options={{
          textVariant: "failure",
          rangeVariant: "failure",
        }}
      />
      <RangeInput
        options={{
          textVariant: "success",
          rangeVariant: "success",
        }}
      />
      <RangeInput
        options={{
          textVariant: "select",
          rangeVariant: "select",
        }}
      />
      <RangeInput
        options={{
          textVariant: "cancel",
          rangeVariant: "cancel",
        }}
      />
      <RangeInput
        options={{
          textVariant: "info",
          rangeVariant: "info",
        }}
      />
      <RangeInput
        options={{
          textVariant: "secondary",
          rangeVariant: "secondary",
        }}
      />
    </Flex>
  );
};
