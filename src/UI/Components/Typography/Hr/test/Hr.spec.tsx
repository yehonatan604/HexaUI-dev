import { render, screen } from "@testing-library/react";
import Hr from "../Hr"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("Hr Component", () => {
  it("should render the Hr component", () => {
    render(<Hr options={{}} />);

    // Check if the hr element is rendered
    const hrElement = screen.getByRole("separator");
    expect(hrElement).toBeInTheDocument();
  });

  it("should apply custom color and width", () => {
    render(
      <Hr
        options={{
          color: "blue-500",
          width: "3/4",
        }}
      />
    );

    const hrElement = screen.getByRole("separator");

    // Check if the custom color and width are applied
    expect(hrElement).toHaveClass("border-blue-500", "w-3/4");
  });

  it("should apply additional class names", () => {
    render(<Hr options={{}} className="custom-class" />);

    const hrElement = screen.getByRole("separator");

    // Check if the additional class name is applied
    expect(hrElement).toHaveClass("custom-class");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Hr
        options={{
          color: "red-500",
          width: "full",
        }}
        className="custom-class"
      />
    );

    // Snapshot the Hr structure
    expect(asFragment()).toMatchSnapshot();
  });
});
