import useColorPalette from "../../../../../Core/Hooks/useColorPallete";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { TSidebarItem } from "../../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarItem";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";

const SidebarItem = (props: TSidebarItem) => {
  const { children, label, icon, options, ...componentProps } = props;

  // Hooks
  const { palette } = useColorPalette();

  // Options
  const labelBgColor = options?.labelBgVariant || palette.standradLight;
  const labelTextColor = options?.labelVariant || palette.standradDark;

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.SpaceBetween,
        align: FlexTypes.Center,
      }}
      {...componentProps}
      className={`p-1 w-[280px]`}
    >
      <Flex
        options={{
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        {...componentProps}
        className="gap-2 hover:opacity-60 cursor-pointer"
      >
        {icon && icon}
        {children}
      </Flex>
      {label && (
        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
          className={`p-2 mr-5 h-[30px] bg-${labelBgColor} text-${labelTextColor} rounded-lg`}
        >
          {label}
        </Flex>
      )}
    </Flex>
  );
};

export default SidebarItem;
