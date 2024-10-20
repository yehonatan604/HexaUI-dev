import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../Select"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("Select Component", () => {
  const items = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  it("should render the select element with the provided items", () => {
    render(<Select items={items} />);

    // Check if the select element is rendered
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    // Check if all the options are rendered
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("should update the selected option when changed", () => {
    render(<Select items={items} />);

    // Cast to HTMLSelectElement to access the value property
    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;

    // Initially, no option should be selected
    expect(selectElement.value).toBe("1");

    // Select a new option
    fireEvent.change(selectElement, { target: { value: "2" } });

    // The selected value should update
    expect(selectElement.value).toBe("2");
  });

  it("should apply custom text and background colors based on options", () => {
    render(
      <Select
        items={items}
        options={{
          textVariant: "green-500",
          bgVariant: "blue-100",
          border: { variant: "red-500" },
          listItemsVariant: "yellow-500",
          listItemsBgVariant: "gray-300",
        }}
      />
    );

    const selectElement = screen.getByRole("combobox");

    // Check if the correct text, background, and border classes are applied to the select element
    expect(selectElement).toHaveClass("text-green-500", "bg-blue-100", "border-red-500");

    // Check if the correct text and background colors are applied to the list items
    const optionElement = screen.getByText("Option 1");
    expect(optionElement).toHaveClass("text-yellow-500", "bg-gray-300");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(<Select items={items} />);

    // Snapshot the select component structure
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with custom styles and match the snapshot", () => {
    const { asFragment } = render(
      <Select
        items={items}
        options={{
          textVariant: "green-500",
          bgVariant: "blue-100",
          border: { variant: "red-500" },
          listItemsVariant: "yellow-500",
          listItemsBgVariant: "gray-300",
        }}
      />
    );

    // Snapshot the select component structure with custom styles
    expect(asFragment()).toMatchSnapshot();
  });
});
