import useColorPalette from "../../../Core/Hooks/useColorPallete";
import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import Select from "../Forms/Select/Component";
import Flex from "../Layout/Flex/Component";

const SelectExamples = () => {
  // Hooks
  const mode = useTheme().mode;
  const { palette } = useColorPalette();

  // Options
  const textColor = mode === "light" ? palette.standradLight : palette.standradDark;

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
          textVariant: palette.primary,
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
          textVariant: palette.success,
          listItemsVariant: palette.success,
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
          textVariant: palette.secondary,
          listItemsVariant: palette.warning,
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
