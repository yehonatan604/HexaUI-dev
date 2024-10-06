import useTheme from "../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Variants } from "../../../Data/Constants/Variants";
import Select from "../Forms/Select/Component";
import Flex from "../Layout/Flex/Component";

const SelectExamples = () => {
  const mode = useTheme().mode;
  const textColor = mode === "light" ? "text-zinc-800" : "text-zinc-300";

  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="m-auto mb-5 gap-4 w-1/3 text-2xl"
    >
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
        variant={Variants.Failure}
        listItemsVariant={Variants.Failure}
      />
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
        variant={Variants.Success}
        listItemsVariant={Variants.Purple}
      />
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
        variant={Variants.Cyan}
      />
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
        variant={Variants.Purple}
        listItemsVariant="random"
      />
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
        variant={Variants.Pink}
        listItemsVariant="rainbow"
      />
    </Flex>
  );
};

export default SelectExamples;
