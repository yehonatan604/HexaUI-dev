import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import ThemeToggler from "../Common/ThemeToggler/Component";
import Flex from "../Layout/Flex/Flex";
import Navbar from "../Navigation/Navbar/Component";
import useTheme from "../../../Core/Hooks/useTheme";

const NavbarExample = () => {
  // Hooks
  const [isMobileMenuOpen, toggle] = useState(false);
  const { mode, colors } = useTheme();

  // Options
  const bgVariant = mode === "light" ? colors.primary : colors.blackDark;
  const textVariant = colors.standrad;

  // JSX
  return (
    <header className="sticky top-0 z-50">
      <Navbar
        options={{
          bgVariant: bgVariant,
          textVariant: textVariant,
          shadow: {
            color: "black",
            size: "md",
          },
        }}
        className="flex flex-col justify-between w-full"
      >
        <Navbar.Brand as={Link} to="/home">
          Rainbow UI
        </Navbar.Brand>
        <Navbar.Toggle toggle={toggle}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse isMobileMenuOpen={isMobileMenuOpen}>
          <Navbar.Link to="/Components">Components</Navbar.Link>
          <Navbar.Link to="/Hooks">Hooks</Navbar.Link>
          <Navbar.Link to="/Helpers">Helpers</Navbar.Link>
          <Navbar.Link to="/Types">Types</Navbar.Link>
          <Navbar.Link to="/download">Download</Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Flex
            options={{
              align: FlexTypes.Center,
            }}
            className="gap-4"
          >
            <ThemeToggler
              darkIcon={<MdOutlineDarkMode />}
              lightIcon={<MdOutlineLightMode />}
            />
            <BiUserCircle size={30} />
          </Flex>
        </Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default NavbarExample;
