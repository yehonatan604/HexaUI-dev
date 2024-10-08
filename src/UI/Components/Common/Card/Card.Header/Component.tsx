import { FlexDir } from "../../../../../Data/Constants/FlexDirection";
import { TComponent } from "../../../../../Data/Types/ComponentTypes/TComponent";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const CardHeader = (props: TComponent<"div">) => {
  const { children, ...componentProps } = props;

  return (
    <Flex
      options={{
        direction: FlexDir.Col,
      }}
      {...componentProps}
    >
      <h1 className="text-2xl font-bold py-2">{children}</h1>
    </Flex>
  );
};

export default CardHeader;
