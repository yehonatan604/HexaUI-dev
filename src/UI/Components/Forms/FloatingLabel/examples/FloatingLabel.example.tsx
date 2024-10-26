import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import FloatingLabel from "../FloatingLabel";

const FloatingLabelExamples = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Start,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto mb-5 gap-4 w-3/4"
    >
      <FloatingLabel label="Email" type="email" />

      <FloatingLabel
        label="Username"
        options={{
          labelTextVariant: "text-purple-600",
          ring: {
            variant: "purple",
          },
          helperText: "Enter your username",
        }}
        className="max-w-md"
        innerClassName="border-purple-200"
      />

      <FloatingLabel
        label="Password"
        type="password"
        options={{
          labelTextVariant: "text-red-500",
          ring: {
            variant: "red",
          },
          helperText: "* Password is required",
          helperTextVariant: "text-red-500",
          type: "underlined",
        }}
        innerClassName="border-red-300"
      />
    </Flex>
  );
};

export default FloatingLabelExamples;
