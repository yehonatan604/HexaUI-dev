import useTheme from "../../../../../Core/Context/ThemeContext/hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../../../Data/Constants/FlexWrap";
import Flex from "../../../Layout/Flex/Flex";
import RangeInput from "../RangeInput";

const RangeInputExamples = () => {
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
  );
};

export default RangeInputExamples;
