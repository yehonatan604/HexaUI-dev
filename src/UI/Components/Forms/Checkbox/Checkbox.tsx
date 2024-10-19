import generateRandomId from "../../../../Core/Helpers/IdHelper";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../Data/Constants/Variants";
import { TCheckbox } from "./types/TCheckbox";
import Flex from "../../Layout/Flex/Flex";
import Label from "../Label/Label";

const Checkbox = (props: TCheckbox) => {
  const { label, options, ...componentProps } = props;

  // Options
  const ring =
    options?.ring &&
    `ring-${options.ring.thickness} ring-${options.ring.variant || Variants.Primary}`;
  const bgColor = !options?.ring
    ? ""
    : "bg-transparent checked:bg-transparent focus:ring-2 focus:ring-sky-700";

  // Constants
  const randomId = generateRandomId();

  // JSX
  return (
    <Flex options={{ direction: FlexDir.Col }} className={`gap-1`}>
      <Flex className="gap-2" options={{ align: FlexTypes.Center }}>
        <input
          type="checkbox"
          id={randomId}
          className={`size-4 rounded-sm ${bgColor} ${ring}`}
          {...componentProps}
        />
        <Label htmlFor={randomId} text={label} />
      </Flex>
    </Flex>
  );
};

export default Checkbox;
