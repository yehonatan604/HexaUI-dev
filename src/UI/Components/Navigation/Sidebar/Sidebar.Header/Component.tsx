import useColorPalette from "../../../../../Core/Hooks/useColorPallete";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { TSidebarHeader } from "../../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarHeader";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const SidebarHeader = (props: TSidebarHeader) => {
  const { children, options, ...componentProps } = props;

  // Hooks
  const { palette } = useColorPalette();

  // Options
  const bgColor = options?.bgVariant || palette.standrad;
  const textColor = options?.textVariant || palette.standradLight;

  // JSX
  return (
    <Flex
      options={{
        justify: options?.placement,
        align: FlexTypes.Center,
      }}
      {...componentProps}
      className={`p-4 w-full bg-${bgColor} text-${textColor}`}
    >
      {children}
    </Flex>
  );
};

export default SidebarHeader;
