import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TSidebarHeader } from "./types/TSidebarHeader";
import Flex from "../../Layout/Flex/Flex";

const SidebarHeader = (props: TSidebarHeader) => {
  const { children, options, ...componentProps } = props;

  // Options
  const bgColor = options?.bgVariant || "standard";
  const textColor = options?.textVariant || "standard-l";

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
