import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import Label from "../../Label/Label";
import Checkbox from "../Checkbox";

const CheckboxExamples = () => {
  const { colors } = useTheme();

  return (
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
  );
};

export default CheckboxExamples;
