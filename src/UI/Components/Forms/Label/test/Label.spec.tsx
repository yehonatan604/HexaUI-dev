import { render, screen } from "@testing-library/react";
import Label from "../Label"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("Label Component", () => {
  it("should render the label with the provided text", () => {
    render(<Label text="Username" />);

    // Check if the label is rendered with the correct text
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("should apply the default CSS classes when no options are provided", () => {
    render(<Label text="Username" />);

    const label = screen.getByText("Username");

    // Check if the default text color and classes are applied
    expect(label).toHaveClass(
      "block",
      "text-sm",
      "font-medium",
      "dark:text-standard-l",
      "text-standard-d"
    );
  });

  it("should apply custom text color when textVariant option is provided", () => {
    render(<Label text="Password" options={{ textVariant: "blue" }} />);

    const label = screen.getByText("Password");

    // Check if the custom text color class is applied
    expect(label).toHaveClass("text-blue");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(<Label text="Snapshot Test" />);

    // Snapshot the label component structure
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with custom textVariant and match the snapshot", () => {
    const { asFragment } = render(
      <Label text="Custom Snapshot" options={{ textVariant: "green" }} />
    );

    // Snapshot the label component structure with custom textVariant
    expect(asFragment()).toMatchSnapshot();
  });
});
