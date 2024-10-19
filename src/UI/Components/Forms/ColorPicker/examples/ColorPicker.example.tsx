import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Flex from "../../../Layout/Flex/Flex";
import ColorPicker from "../ColorPicker";

const ColorPickerExample = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="m-auto my-5 gap-4 w-3/4"
    >
      <ColorPicker />
    </Flex>
  );
};
export default ColorPickerExample;
