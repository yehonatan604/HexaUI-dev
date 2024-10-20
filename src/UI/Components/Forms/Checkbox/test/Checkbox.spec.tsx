import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox"; // Adjust the import to your path
import { describe, it, expect } from "vitest";

describe("Checkbox Component", () => {
  it("should render the checkbox with the provided label", () => {
    render(<Checkbox label="Accept Terms" />);

    // Check if the label is rendered
    expect(screen.getByText("Accept Terms")).toBeInTheDocument();

    // Check if the checkbox input is present
    const checkbox = screen.getByLabelText("Accept Terms");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });

  it("should toggle the checked state when clicked", () => {
    render(<Checkbox label="Accept Terms" />);

    const checkbox = screen.getByLabelText("Accept Terms");

    // Initially unchecked
    expect(checkbox).not.toBeChecked();

    // Click to check the checkbox
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Click again to uncheck
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should render with ring and background color options", () => {
    render(
      <Checkbox
        label="Accept Terms"
        options={{
          ring: { thickness: 2, variant: "primary" },
          showBgColor: true,
        }}
      />
    );

    const checkbox = screen.getByLabelText("Accept Terms");

    // Check if the correct ring and background classes are applied
    expect(checkbox).toHaveClass("ring-2");
    expect(checkbox).toHaveClass("bg-transparent");
  });

  it("should toggle the checkbox when clicking the label", () => {
    render(<Checkbox label="Accept Terms" />);

    const checkbox = screen.getByLabelText("Accept Terms");

    // Initially unchecked
    expect(checkbox).not.toBeChecked();

    // Click the label to check the checkbox
    fireEvent.click(screen.getByText("Accept Terms"));
    expect(checkbox).toBeChecked();

    // Click the label again to uncheck
    fireEvent.click(screen.getByText("Accept Terms"));
    expect(checkbox).not.toBeChecked();
  });
});
