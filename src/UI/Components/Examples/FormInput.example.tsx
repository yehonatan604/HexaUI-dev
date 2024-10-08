import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Checkbox from "../Forms/Checkbox/Component";
import RangeInput from "../Forms/RangeInput/Component";
import Flex from "../Layout/Flex/Component";
import useColorPalette from "../../../Core/Hooks/useColorPallete";
import Label from "../Forms/Label/Component";
import TextInput from "../Forms/TextInput/Component";

const FormInputExamples = () => {
  const { palette } = useColorPalette();

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
            helperTextVariant: palette.standradLight,
          }}
        />
        <TextInput label="Name" placeholder="Please enter name" defaultValue="John" />
        <TextInput
          label="Email"
          type="email"
          defaultValue={"john@email.com"}
          options={{
            textVariant: palette.success,
            border: {
              variant: palette.success,
              thickness: "2",
            },
          }}
        />
        <TextInput
          label="Password"
          type="password"
          options={{
            textVariant: palette.failure,
            helperText: "Please enter a valid password",
            border: {
              variant: palette.failure,
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
            textVariant: palette.primary,
            rangeVariant: palette.primary,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.warning,
            rangeVariant: palette.warning,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.failure,
            rangeVariant: palette.failure,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.success,
            rangeVariant: palette.success,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.select,
            rangeVariant: palette.select,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.cancel,
            rangeVariant: palette.cancel,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.info,
            rangeVariant: palette.info,
          }}
        />
        <RangeInput
          label="Age"
          options={{
            textVariant: palette.secondary,
            rangeVariant: palette.secondary,
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
            textVariant: palette.primary,
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
              variant: palette.primary,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: palette.warning,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: palette.failure,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: palette.success,
            },
          }}
        />
        <Checkbox
          label="is checked"
          defaultChecked
          options={{
            ring: {
              thickness: 2,
              variant: palette.standrad,
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
