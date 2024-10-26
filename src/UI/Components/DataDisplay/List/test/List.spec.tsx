import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import List from "../List";

describe("List Component", () => {
  it("should render list items correctly", () => {
    render(<List options={{ items: ["Item 1", "Item 2", "Item 3"] }} />);

    // Check if the list items are rendered
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should apply custom text size and variant", () => {
    render(
      <List
        options={{
          items: ["Item 1"],
          fontSize: "lg",
          textVariant: "success",
        }}
      />
    );

    const listItem = screen.getByText("Item 1");

    // Check if the custom font size and text variant are applied
    expect(listItem.parentElement.parentElement).toHaveClass("text-lg", "text-success");
  });

  it("should apply custom list style when no icons are provided", () => {
    render(
      <List
        options={{
          items: ["Item 1"],
          listStyle: "circle",
        }}
      />
    );

    const listElement = screen.getByRole("list");

    // Check if the custom list style is applied
    expect(listElement).toHaveStyle("list-style-type: circle");
  });

  it("should render with icons when provided", () => {
    render(
      <List
        options={{
          items: ["Item 1", "Item 2"],
          icons: [
            <FaCheckCircle data-testid="icon-1" />,
            <FaExclamationCircle data-testid="icon-2" />,
          ],
          byOrder: true,
        }}
      />
    );

    // Check if the icons are rendered alongside the list items
    expect(screen.getByTestId("icon-1")).toBeInTheDocument();
    expect(screen.getByTestId("icon-2")).toBeInTheDocument();
  });

  it("should display a warning if icons length is less than items length and byOrder is true", () => {
    const consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});

    render(
      <List
        options={{
          items: ["Item 1", "Item 2", "Item 3"],
          icons: [<FaCheckCircle />],
          byOrder: true,
        }}
      />
    );

    // Check if the warning message is logged
    expect(consoleWarnMock).toHaveBeenCalledWith(
      "Rainbow UI Warning: Icons length is less than items length. byOrder prop is ignored."
    );

    // Restore the original console.warn implementation
    consoleWarnMock.mockRestore();
  });
});
