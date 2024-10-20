import { render, screen } from "@testing-library/react";
import Footer from "../Footer"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("Footer Component", () => {
  it("should render children correctly", () => {
    render(
      <Footer options={{ childrenDirection: "row" }}>
        <div>Child 1</div>
        <div>Child 2</div>
      </Footer>
    );

    // Check if both children are rendered
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should display the correct reserved text", () => {
    render(
      <Footer reserved="My Company" options={{}}>
        Footer Content
      </Footer>
    );

    // Check if the reserved text is displayed correctly
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} My Company`)).toBeInTheDocument();
  });

  it("should display default reserved text when not provided", () => {
    render(<Footer options={{}}>Footer Content</Footer>);

    // Check if the default reserved text is displayed
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Rainbow UI`)).toBeInTheDocument();
  });

  it("should apply custom background and text colors", () => {
    render(
      <Footer options={{ bgVariant: "blue-500", textVariant: "white" }}>
        Footer Content
      </Footer>
    );

    const footerElement = screen.getByText("Footer Content").parentElement;

    // Check if the custom background and text colors are applied
    expect(footerElement).toHaveClass("bg-blue-500", "text-white");
  });

  it("should apply the correct reserved text variant", () => {
    render(<Footer options={{ reservedVariant: "gray-500" }}>Footer Content</Footer>);

    // Check if the correct reserved text variant is applied
    expect(screen.getByText(/©/)).toHaveClass("text-gray-500");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Footer
        options={{
          bgVariant: "blue-500",
          textVariant: "white",
          reservedVariant: "gray-500",
          childrenDirection: "row",
        }}
      >
        <div>Snapshot Child</div>
      </Footer>
    );

    // Snapshot the Footer structure
    expect(asFragment()).toMatchSnapshot();
  });
});
