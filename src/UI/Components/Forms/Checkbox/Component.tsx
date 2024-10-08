import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../Data/Constants/Variants";
import { TCheckbox } from "../../../../Data/Types/ComponentTypes/Forms/Checkbox/TCheckbox";
import Flex from "../../Layout/Flex/Component";
import Label from "../Label/Component";

const Checkbox = (props: TCheckbox) => {
  const { label, options, ...componentProps } = props;

  const ring =
    options?.ring &&
    `ring-${options.ring.thickness} ring-${options.ring.variant || Variants.Primary}`;
  const bgColor = !options?.ring
    ? ""
    : "bg-transparent checked:bg-transparent focus:ring-2 focus:ring-sky-700";

  return (
    <Flex options={{ direction: FlexDir.Col }} className={`gap-1`}>
      <Flex className="gap-2" options={{ align: FlexTypes.Center }}>
        <input
          type="checkbox"
          id="checkbox"
          className={`size-4 rounded-sm ${bgColor} ${ring}`}
          {...componentProps}
        />
        <Label htmlFor="checkbox" text={label} />
      </Flex>
    </Flex>
  );
};

export default Checkbox;
