import { LuPipette } from "react-icons/lu";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import Button from "../../Core/Button/Button";
import Flex from "../../Layout/Flex/Flex";
import { THsvColor } from "../../../../Data/Types/THsvColor";

export type ColorDisplayProps = {
  color: THsvColor;
  hexColor: string;
  pipeta: boolean;
  setColorType: (type: string) => void;
  setPipeta: (pipeta: boolean) => void;
};

const ColorDisplay = (props: ColorDisplayProps) => {
  const { color, hexColor, pipeta, setColorType, setPipeta } = props;

  return (
    <Flex
      options={{ justify: FlexTypes.SpaceEvenly, align: FlexTypes.Center }}
      className="gap-4"
    >
      <div
        className="w-8 h-8 rounded-lg"
        style={{
          backgroundColor: hexColor,
          opacity: color.a / 100,
        }}
      />
      <LuPipette
        size={30}
        className="cursor-pointer"
        onClick={() => setPipeta(!pipeta)}
      />
      <Flex className="gap-4">
        {["hsv", "rgb", "hex"].map((type) => (
          <Button key={type} onClick={() => setColorType(type)}>
            {type}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default ColorDisplay;
