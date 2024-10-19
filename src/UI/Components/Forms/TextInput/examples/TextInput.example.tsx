import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import TextInput from "../TextInput";

const TextInputExamples = () => {
  const { colors } = useTheme();
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Start,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto mb-5 gap-4 w-3/4"
    >
      <TextInput
        label="Name"
        placeholder="Please enter name"
        options={{
          helperText: "required",
          helperTextVariant: colors.standradLight,
        }}
      />
      <TextInput label="Name" placeholder="Please enter name" defaultValue="John" />
      <TextInput
        label="Email"
        type="email"
        defaultValue={"john@email.com"}
        options={{
          textVariant: colors.success,
          border: {
            variant: colors.success,
            thickness: "2",
          },
        }}
      />
      <TextInput
        label="Password"
        type="password"
        options={{
          textVariant: colors.failure,
          helperText: "Please enter a valid password",
          border: {
            variant: colors.failure,
            thickness: "2",
          },
        }}
        defaultValue={"password"}
      />
    </Flex>
  );
};

export default TextInputExamples;
