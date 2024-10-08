import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Select from "../Forms/Select/Component";
import Flex from "../Layout/Flex/Component";

const SelectExamples = () => {
  // Hooks
  const { mode, colors } = useTheme();

  // Options
  const textColor = mode === "light" ? colors.standradLight : colors.standradDark;

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto mb-5 gap-4 w-1/3 text-2xl"
    >
      <Select
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={{
          textVariant: colors.primary,
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={{
          textVariant: colors.success,
          listItemsVariant: colors.success,
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={{
          textVariant: colors.secondary,
          listItemsVariant: colors.warning,
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
    </Flex>
  );
};

export default SelectExamples;
