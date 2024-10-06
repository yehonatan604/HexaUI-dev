import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FlexTypes } from "../../../Data/Constants/FlexTypes";
import ThemeToggler from "../Common/ThemeToggler/Component";
import Flex from "../Layout/Flex/Component";
import Navbar from "../Navigation/Navbar/Component";

const NavbarExample = () => {
  const [isMobileMenuOpen, toggle] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Navbar className="flex flex-col justify-between w-full">
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
          <Flex align={FlexTypes.Center} className="gap-4">
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
