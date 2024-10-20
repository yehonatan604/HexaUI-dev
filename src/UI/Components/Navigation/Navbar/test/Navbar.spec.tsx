import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Needed for NavbarLink
import Navbar from "../Navbar"; // Adjust the import path
import { describe, it, expect, vi } from "vitest";

// Mock the useTheme hook
vi.mock("../../../../Core/Context/ThemeContext/hooks/useTheme", () => ({
  __esModule: true,
  default: () => ({
    colors: {
      primary: "blue-500",
      secondary: "gray-800",
      white: "white",
      warning: "yellow-500",
    },
    mode: "light",
  }),
}));

describe("Navbar Component", () => {
  it("should render children correctly", () => {
    render(
      <Router>
        <Navbar options={{ bgVariant: "blue-500" }}>
          <div>Child 1</div>
          <div>Child 2</div>
        </Navbar>
      </Router>
    );

    // Check if both children are rendered
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply custom background and text colors", () => {
    render(
      <Router>
        <Navbar options={{ bgVariant: "blue-500", textVariant: "white" }}>
          <div>Navbar Content</div>
        </Navbar>
      </Router>
    );

    const navbarElement = screen.getByText("Navbar Content").parentElement;

    // Check if the custom background and text colors are applied
    expect(navbarElement).toHaveClass("bg-blue-500", "text-white");
  });

  it("should toggle mobile menu visibility on toggle click", () => {
    const toggleMock = vi.fn();
    render(
      <Router>
        <Navbar>
          <Navbar.Toggle toggle={toggleMock}>Toggle Menu</Navbar.Toggle>
          <Navbar.Collapse isMobileMenuOpen={true}>
            <div>Menu Content</div>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );

    const toggleButton = screen.getByText("Toggle Menu");

    // Check if the toggle button is rendered
    expect(toggleButton).toBeInTheDocument();

    // Simulate clicking the toggle button
    fireEvent.click(toggleButton);

    // Check if the toggle function is called
    expect(toggleMock).toHaveBeenCalled();
  });

  it("should highlight active NavbarLink when the route matches", () => {
    render(
      <Router>
        <Navbar>
          <Navbar.Link to="/home">Home</Navbar.Link>
        </Navbar>
      </Router>
    );

    const homeLink = screen.getByText("Home");

    // Check if the link is rendered
    expect(homeLink).toBeInTheDocument();

    // Check if the active link class is applied (default is secondary)
    expect(homeLink).toHaveClass("text-secondary");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Navbar
          options={{
            bgVariant: "blue-500",
            textVariant: "white",
          }}
        >
          <Navbar.Brand to="/">Brand</Navbar.Brand>
          <Navbar.Link to="/home">Home</Navbar.Link>
          <Navbar.Collapse isMobileMenuOpen={false}>
            <div>Menu Content</div>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );

    // Snapshot the Navbar structure
    expect(asFragment()).toMatchSnapshot();
  });
});
