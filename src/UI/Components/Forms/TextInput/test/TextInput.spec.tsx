import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "../TextInput"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("TextInput Component", () => {
  it("should render the text input with a label", () => {
    render(<TextInput label="Username" />);

    // Check if the label is rendered
    expect(screen.getByText("Username")).toBeInTheDocument();

    // Check if the input is rendered
    const inputElement = screen.getByLabelText("Username") as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text"); // Assuming default input type is text
  });

  it("should update the value when typed into", () => {
    render(<TextInput label="Username" />);

    const inputElement = screen.getByLabelText("Username") as HTMLInputElement;

    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: "testuser" } });

    // Check if the value updates correctly
    expect(inputElement.value).toBe("testuser");
  });

  it("should render the helper text", () => {
    render(<TextInput label="Username" options={{ helperText: "This is required" }} />);

    // Check if the helper text is rendered
    expect(screen.getByText("* This is required")).toBeInTheDocument();
  });

  it("should apply custom styles from options", () => {
    render(
      <TextInput
        label="Username"
        options={{
          textVariant: "blue-500",
          bgVariant: "gray-200",
          border: { variant: "red-500", thickness: "2", radius: "lg" },
          ring: { variant: "green-500", thickness: 2 },
          helperText: "Enter your username",
          helperTextVariant: "yellow-600",
        }}
      />
    );

    const inputElement = screen.getByLabelText("Username") as HTMLInputElement;

    // Check if the correct text, background, border, and ring classes are applied
    expect(inputElement).toHaveClass(
      "text-blue-500",
      "bg-gray-200",
      "border-red-500",
      "border-2",
      "rounded-lg",
      "focus:ring-green-500",
      "focus:ring-2"
    );

    // Check if the correct helper text color is applied
    const helperTextElement = screen.getByText("* Enter your username");
    expect(helperTextElement).toHaveClass("text-yellow-600");
  });
});
