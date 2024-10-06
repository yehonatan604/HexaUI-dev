import { FlexTypes } from "../../../../../Data/Constants/FlexTypes";
import { Variants } from "../../../../../Data/Constants/Variants";
import Flex from "../../../../../UI/Components/Layout/Flex/Component";
import { SidebarItemProps } from "./Props";

const SidebarItem = (props: SidebarItemProps) => {
  const { children, label, labelVariant, icon, ...componentProps } = props;

  let labelBgColor = "bg-slate-900";
  if (labelVariant === Variants.Warning) {
    labelBgColor = "bg-red-600";
  } else if (labelVariant === Variants.Info) {
    labelBgColor = "bg-blue-600";
  } else if (labelVariant === Variants.Success) {
    labelBgColor = "bg-green-600";
  } else if (labelVariant === Variants.Failure) {
    labelBgColor = "bg-red-600";
  } else if (labelVariant === Variants.Cyan) {
    labelBgColor = "bg-cyan-600";
  } else if (labelVariant === Variants.Purple) {
    labelBgColor = "bg-purple-600";
  } else if (labelVariant === Variants.Lime) {
    labelBgColor = "bg-yellow-600";
  } else if (labelVariant === Variants.Pink) {
    labelBgColor = "bg-pink-600";
  }

  return (
    <Flex
      justify={FlexTypes.SpaceBetween}
      align={FlexTypes.Center}
      {...componentProps}
      className={`p-1 w-[280px] text-zinc-200`}
    >
      <Flex
        justify={FlexTypes.Start}
        align={FlexTypes.Center}
        {...componentProps}
        {...componentProps}
        className="text-zinc-200 gap-2 hover:opacity-60 cursor-pointer"
      >
        {icon && icon}
        {children}
      </Flex>
      {label && (
        <Flex
          justify={FlexTypes.Center}
          align={FlexTypes.Center}
          className={`p-2 mr-5 h-[30px] ${labelBgColor} text-zinc-300 rounded-lg`}
        >
          {label}
        </Flex>
      )}
    </Flex>
  );
};

export default SidebarItem;
