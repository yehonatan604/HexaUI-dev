import { render, screen, fireEvent } from "@testing-library/react";
import RangeInput from "../RangeInput"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("RangeInput Component", () => {
  it("should render the range input with the label", () => {
    render(<RangeInput label="Volume" />);

    // Check if the label is rendered with the correct text
    expect(screen.getByText("Volume")).toBeInTheDocument();

    // Check if the input range is present
    const rangeInput = screen.getByLabelText("Volume");
    expect(rangeInput).toBeInTheDocument();
    expect(rangeInput).toHaveAttribute("type", "range");
  });

  it("should update the value when the range is changed", () => {
    render(<RangeInput label="Volume" />);

    const rangeInput = screen.getByLabelText("Volume");
    const valueDisplay = screen.getByText("0"); // The initial value should be 0

    // Simulate changing the range value
    fireEvent.change(rangeInput, { target: { value: "50" } });

    // The value displayed should update
    expect(valueDisplay.textContent).toBe("50");
  });

  it("should apply the correct rangeVariant class", () => {
    render(<RangeInput label="Volume" options={{ rangeVariant: "success" }} />);

    const rangeWrapper = screen.getByLabelText("Volume").parentElement;

    // Check if the correct rangeVariant class is applied
    expect(rangeWrapper).toHaveClass("success");
  });

  it("should render with the correct text color based on the textVariant option", () => {
    render(<RangeInput label="Volume" options={{ textVariant: "green" }} />);

    const valueDisplay = screen.getByText("0"); // The initial value should be 0
    expect(valueDisplay).toHaveClass("text-green");
  });
});
