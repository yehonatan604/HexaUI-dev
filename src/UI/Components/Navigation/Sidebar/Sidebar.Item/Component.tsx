import useTheme from "../../../../../Core/Hooks/useTheme";
import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { TSidebarItem } from "../../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebarItem";
import Flex from "../../../Layout/Flex/Flex";

const SidebarItem = (props: TSidebarItem) => {
  const { children, label, icon, options, className, innerClassName, ...componentProps } =
    props;

  // Hooks
  const { colors } = useTheme();

  // Options
  const labelBgColor = options?.labelBgVariant || colors.standradLight;
  const labelTextColor = options?.labelVariant || colors.standradDark;
  const hoverBgVariant = options?.hoverBgVariant || colors.standradLight;
  const hoverTextVariant = options?.hoverTextVariant || colors.standradLight;
  const textColor = options?.textVariant || colors.primary;
  const hover = `hover:bg-${options?.hoverBgVariant && hoverBgVariant} hover:text-${
    options?.hoverTextVariant && hoverTextVariant
  }`;

  // JSX
  return (
    <Flex
      options={{
        justify: FlexTypes.SpaceBetween,
        align: FlexTypes.Center,
      }}
      {...componentProps}
      className={`w-full ${className}`}
    >
      <Flex
        options={{
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        {...componentProps}
        className={`w-full p-1 pl-3 gap-5 text-${textColor} ${
          !options?.disableOpacityOnHover && "hover:opacity-60"
        } ${hover} cursor-pointer ${innerClassName}`}
      >
        {icon && icon}
        {children}
        {label && (
          <Flex
            options={{
              justify: FlexTypes.Center,
              align: FlexTypes.Center,
            }}
            className={`p-2 ml-auto mr-7 h-[25px] bg-${labelBgColor} text-${labelTextColor} rounded-lg`}
          >
            {label}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default SidebarItem;
