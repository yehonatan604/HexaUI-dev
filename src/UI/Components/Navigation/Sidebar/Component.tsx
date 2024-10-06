import { useState } from "react";
import { SideMenuProps } from "./Props";
import { FiChevronsRight } from "react-icons/fi";
import SidebarSeperator from "./Sidebar.Seperator/Component";
import SidebarItem from "./Sidebar.Item/Component";
import SidebarHeader from "./Sidebar.Header/Component";
import useColorPalette from "../../../..//Core/Hooks/useColorPallete";
import useTheme from "../../../..//Core/Hooks/useTheme";
import { FlexDir } from "../../../../Data/Constants/FlexDirection";
import { Variants } from "../../../../Data/Constants/Variants";
import Flex from "../../Layout/Flex/Component";

const Sidebar = (props: SideMenuProps) => {
  const { children, maxWidth = "w-[280px]", ...componentProps } = props;

  // Hooks
  const [isOpen, setIsOpen] = useState(true);
  const mode = useTheme().mode;

  // Color Palette
  const { light, dark } = useColorPalette().getColor(Variants.Standard)!;

  // Variables
  const chevronColor = mode === "light" ? `text-${light}` : `text-${dark}`;
  const transition = "transition-all duration-1000";

  // Functions
  const toggleMenu = () => setIsOpen(!isOpen);

  // JSX
  return (
    <Flex>
      <Flex
        direction={FlexDir.Col}
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
