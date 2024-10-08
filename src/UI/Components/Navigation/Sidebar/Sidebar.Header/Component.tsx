import useTheme from "../../../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { TSidebarHeader } from "../../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarHeader";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const SidebarHeader = (props: TSidebarHeader) => {
  const { children, options, ...componentProps } = props;

  // Hooks
  const { colors } = useTheme();

  // Options
  const bgColor = options?.bgVariant || colors.standrad;
  const textColor = options?.textVariant || colors.standradLight;

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
