import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { TComponent } from "../../../../../Data/Types/TComponent";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const CardFooter = (props: TComponent<"div">) => {
  return (
    <Flex direction={FlexDir.Col} {...props}>
      <hr className="my-2 border-stone-400 w-5/6 m-auto" />
      <Flex
        align={FlexTypes.Center}
        justify={FlexTypes.SpaceEvenly}
        className="w-full p-3"
      >
        {props.children}
      </Flex>
    </Flex>
  );
};

export default CardFooter;
