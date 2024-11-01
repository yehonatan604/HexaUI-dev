import { defaultStory } from "../../../../../Core/Helpers/StoriesHelper";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import TextInput from "../TextInput";

export default {
  title: "Components/Forms/TextInput",
  component: TextInput,
  ...defaultStory,
};

export const TextInputExamples = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Start,
        wrap: FlexWrap.Wrap,
      }}
      className="mt-48 gap-4"
    >
      <TextInput
        label="Name"
        placeholder="Please enter name"
        options={{
          helperText: "required",
          helperTextVariant: "standard-l",
        }}
      />
      <TextInput
        label="Name"
        placeholder="Please enter name"
        defaultValue="John"
        options={{ textVariant: "white-d" }}
      />
      <TextInput
        label="Email"
        type="email"
        defaultValue={"john@email.com"}
        options={{
          textVariant: "success",
          border: {
            variant: "success",
            thickness: "2",
          },
        }}
      />
      <TextInput
        label="Password"
        type="password"
        options={{
          textVariant: "failure",
          helperText: "Please enter a valid password",
          border: {
            variant: "failure",
            thickness: "2",
          },
        }}
        defaultValue={"password"}
      />
    </Flex>
  );
};
