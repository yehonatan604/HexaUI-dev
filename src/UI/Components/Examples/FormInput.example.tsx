import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Checkbox from "../Forms/Checkbox/Component";
import RangeInput from "../Forms/RangeInput/Component";
import Flex from "../Layout/Flex/Component";
import Label from "../Forms/Label/Component";
import TextInput from "../Forms/TextInput/Component";
import useTheme from "../../../Core/Hooks/useTheme";

const FormInputExamples = () => {
  const { colors } = useTheme();

  return (
    <form className="w-full">
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
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
          wrap: FlexWrap.Wrap,
        }}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <RangeInput label="Age" />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.primary,
            rangeVariant: colors.primary,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.warning,
            rangeVariant: colors.warning,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.failure,
            rangeVariant: colors.failure,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.success,
            rangeVariant: colors.success,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.select,
            rangeVariant: colors.select,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.cancel,
            rangeVariant: colors.cancel,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.info,
            rangeVariant: colors.info,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: colors.secondary,
            rangeVariant: colors.secondary,
          }}
        />
      </Flex>
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
          wrap: FlexWrap.Wrap,
        }}
        className="m-auto my-5 gap-4 w-3/4"
      >
        <Label
          text="Checkboxes:"
          options={{
            textVariant: colors.primary,
          }}
        />
        <Checkbox label="is checked" />
        <Checkbox label="is checked" defaultChecked />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: colors.primary,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: colors.warning,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: colors.failure,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: colors.success,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: colors.standrad,
            },
          }}
        />
      </Flex>
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
        }}
        className="m-auto my-5 gap-4 w-3/4"
      ></Flex>
    </form>
  );
};

export default FormInputExamples;
