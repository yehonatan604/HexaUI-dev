import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";
import { SidebarHeaderProps } from "./Props";

const SidebarHeader = (props: SidebarHeaderProps) => {
  const { children, placement, ...componentProps } = props;

  return (
    <Flex
      justify={placement}
      align={FlexTypes.Center}
      {...componentProps}
      className={`p-4 w-full bg-zinc-600 text-zinc-200`}
    >
      {children}
    </Flex>
  );
};

export default SidebarHeader;
