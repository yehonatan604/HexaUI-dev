import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { TComponent } from "../../../../../Data/Types/TComponent";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const CardHeader = (props: TComponent<"div">) => {
  const { children, ...componentProps } = props;

  return (
    <Flex direction={FlexDir.Col} {...componentProps}>
      <h1 className="text-2xl font-bold py-2">{children}</h1>
    </Flex>
  );
};

export default CardHeader;
