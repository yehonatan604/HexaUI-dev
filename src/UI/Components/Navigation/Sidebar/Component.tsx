import { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import SidebarSeperator from "./Sidebar.Seperator/Component";
import SidebarItem from "./Sidebar.Item/Component";
import SidebarHeader from "./Sidebar.Header/Component";
import useColorPalette from "../../../..//Core/Hooks/useColorPallete";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import Flex from "../../Layout/Flex/Component";
import { TSidebar } from "../../../../Data/Types/ComponentTypes/Navigation/Sidebar/TSidebar";

const Sidebar = (props: TSidebar) => {
  const { children, options, ...componentProps } = props;

  // Hooks
  const [isOpen, setIsOpen] = useState(true);
  const { palette } = useColorPalette();

  // Options
  const chevronColor = options?.textVariant || palette.standradLight;
  const transition = "transition-all duration-1000";
  const maxWidth = options?.maxWidth || "w-[280px]";

  // Functions
  const toggleMenu = () => setIsOpen(!isOpen);

  // JSX
  return (
    <Flex>
      <Flex
        options={{
          direction: FlexDir.Col,
        }}
        {...componentProps}
        className={`${
          isOpen ? `${maxWidth} max-md:w-[95vw]` : "w-[0.5px]"
        }  bg-zinc-700 ${
          !isOpen && "opacity-5"
        } ${transition} duration-1000 overflow-hidden gap-4 pb-4`}
      >
        {children}
      </Flex>
      <FiChevronsRight
        onClick={toggleMenu}
        className={`text-2xl ${chevronColor} cursor-pointer ${
          isOpen && "transform rotate-180"
        } ${transition}`}
      />
    </Flex>
  );
};

Sidebar.Seperator = SidebarSeperator;
Sidebar.Item = SidebarItem;
Sidebar.Header = SidebarHeader;

export default Sidebar;
