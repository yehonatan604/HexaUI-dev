import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import FloatingLabel from "../FloatingLabel";

vi.mock("../../../../Core/Helpers/IdHelper", () => ({
  default: () => "123",
}));

describe("FloatingLabel Component", () => {
  it("renders the FloatingLabel with a label", () => {
    render(<FloatingLabel label="Test Label" />);
    const labelElement = screen.getByLabelText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("applies the correct default styles", () => {
    render(<FloatingLabel label="Test Label" />);
    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toHaveClass("peer");
    expect(inputElement).toHaveClass("w-full");
    expect(inputElement).toHaveClass("border-gray-300");
  });

  it("applies custom options", () => {
    render(
      <FloatingLabel
        label="Test Label"
        options={{
          labelTextVariant: "text-red-500",
          helperText: "Helper text",
          helperTextVariant: "text-green-500",
          ring: { variant: "yellow" },
          type: "underlined",
        }}
      />
    );

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("text-red-500");

    const helperTextElement = screen.getByText("Helper text");
    expect(helperTextElement).toHaveClass("text-green-500");

    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toHaveClass("border-0", "border-b", "focus:border-b-yellow-500");
  });

  it("applies ring properties correctly", () => {
    render(
      <FloatingLabel
        label="Test Label"
        options={{
          ring: { variant: "purple", thickness: 2 },
        }}
      />
    );

    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toHaveClass("focus:ring-2");
    expect(inputElement).toHaveClass("focus:ring-purple-500/20");
  });

  it("handles input with initial value correctly", () => {
    render(<FloatingLabel label="Test Label" value="Initial Value" />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("text-blue-500");
  });
});
