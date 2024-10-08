import { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import SidebarSeperator from "./Sidebar.Seperator/Component";
import SidebarItem from "./Sidebar.Item/Component";
import SidebarHeader from "./Sidebar.Header/Component";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import Flex from "../../Layout/Flex/Component";
import { TSidebar } from "../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebar";
import useTheme from "../../../../Core/Hooks/useTheme";

const Sidebar = (props: TSidebar) => {
  const { children, options, className, chevron: icon, ...componentProps } = props;

  // Hooks
  const [isOpen, setIsOpen] = useState(true);
  const { colors } = useTheme();

  // Options
  const chevronColor = options?.textVariant || colors.standradLight;
  const transition = "transition-all duration-1000";
  const maxWidth = options?.maxWidth || "w-[280px]";
  const bgColor = options?.bgVariant || colors.standradDark;
  const borderColor = options?.border?.variant || colors.standradDark;
  const borderThickness = options?.border?.thickness || 4;
  const border = `border-r-${borderThickness} border-${borderColor}`;

  // Functions
  const toggleMenu = () => setIsOpen(!isOpen);

  // JSX
  const Chevron = icon ? icon : FiChevronsRight;

  return (
    <Flex>
      <Flex
        options={{
          direction: FlexDir.Col,
        }}
        {...componentProps}
        className={`${isOpen ? `${maxWidth} max-md:w-[95vw]` : "w-[0px]"} bg-${bgColor} ${
          !isOpen && "opacity-5"
        } ${transition} duration-1000 overflow-hidden text-nowrap text-ellipsis gap-4 pb-4 ${
          options?.border && border
        } ${className}`}
      >
        {children}
      </Flex>
      {!options?.disableClose && (
        <Chevron
          onClick={toggleMenu}
          className={`text-2xl ${chevronColor} cursor-pointer ${
            isOpen && "transform rotate-180"
          } ${transition} `}
        />
      )}
    </Flex>
  );
};

Sidebar.Seperator = SidebarSeperator;
Sidebar.Item = SidebarItem;
Sidebar.Header = SidebarHeader;

export default Sidebar;
