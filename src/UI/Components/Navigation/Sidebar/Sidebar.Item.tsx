import { FlexTypes } from "../../../../Data/Constants/FlexTypes";
import { TSidebarItem } from "./types/TSidebarItem";
import Flex from "../../Layout/Flex/Flex";

const SidebarItem = (props: TSidebarItem) => {
  const { children, label, icon, options, className, innerClassName, ...componentProps } =
    props;

  // Options
  const labelBgColor = options?.labelBgVariant || "standard-l";
  const labelTextColor = options?.labelVariant || "standard-d";
  const hoverBgVariant = options?.hoverBgVariant || "standard-l";
  const hoverTextVariant = options?.hoverTextVariant || "standard-l";
  const textColor = options?.textVariant || "primary";
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
