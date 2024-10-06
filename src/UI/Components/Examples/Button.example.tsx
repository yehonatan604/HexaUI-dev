import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import { FlexWrap } from "../../../Data/Constants/FlexWrap";
import { Sizes } from "../../../Data/Constants/Sizes";
import { Variants } from "../../../Data/Constants/Variants";
import Button from "../Common/Button/Component";
import Flex from "../Layout/Flex/Component";

const ButtonExamples = () => {
  const { Info, Success, Warning, Failure, Lime, Cyan, Purple, Pink } = Variants;
  const { Sm, Md, Lg, Xl } = Sizes;

  return (
    <Flex
      align={FlexTypes.Center}
      justify={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="m-auto my-5 gap-4"
    >
      <Button variant={Info} size={Sm}>
        {Info}
      </Button>

      <Button variant={Success} size={Md}>
        {Success}
      </Button>

      <Button variant={Warning} size={Lg}>
        {Warning}
      </Button>

      <Button variant={Failure} size={Xl}>
        {Failure}
      </Button>

      <Button variant={Lime} size={Sm}>
        {Lime}
      </Button>

      <Button variant={Cyan} size={Md}>
        {Cyan}
      </Button>

      <Button variant={Purple} size={Lg} className="text-blue-300">
        {Purple}
      </Button>

      <Button variant={Pink} size={Xl}>
        {Pink}
      </Button>
    </Flex>
  );
};

export default ButtonExamples;
