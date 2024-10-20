import { render, screen } from "@testing-library/react";
import AutoGrid from "../AutoGrid"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("AutoGrid Component", () => {
  const rowsArr = [
    <div key="1">Row 1</div>,
    <div key="2">Row 2</div>,
    <div key="3">Row 3</div>,
    <div key="4">Row 4</div>,
  ];

  it("should render the grid with the correct number of columns", () => {
    render(<AutoGrid rowsArr={rowsArr} cols={2} />);

    // Check if the grid is rendered with the correct column structure
    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument();

    // Check if it has the correct grid style for two columns
    expect(gridElement).toHaveStyle({
      display: "inline-grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    });
  });

  it("should render the correct number of rows", () => {
    render(<AutoGrid rowsArr={rowsArr} cols={2} />);

    // Check if the correct number of row items are rendered
    const rowElements = screen.getAllByText(/Row/);
    expect(rowElements).toHaveLength(rowsArr.length);
  });

  it("should apply default border styles when no borderVariant is provided", () => {
    render(<AutoGrid rowsArr={rowsArr} cols={2} />);

    // Check if each row has the default border class applied
    const rowElements = screen.getAllByText(/Row/);
    rowElements.forEach((row) => {
      expect(row.parentElement).toHaveClass("border");
    });
  });

  it("should apply custom border styles when borderVariant is provided", () => {
    render(
      <AutoGrid rowsArr={rowsArr} cols={2} options={{ borderVariant: "red-500" }} />
    );

    // Check if each row has the custom border class applied
    const rowElements = screen.getAllByText(/Row/);
    rowElements.forEach((row) => {
      expect(row.parentElement).toHaveClass("border", "border-red-500");
    });
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(<AutoGrid rowsArr={rowsArr} cols={2} />);

    // Snapshot the AutoGrid structure
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with custom border styles and match the snapshot", () => {
    const { asFragment } = render(
      <AutoGrid rowsArr={rowsArr} cols={2} options={{ borderVariant: "green-500" }} />
    );

    // Snapshot the AutoGrid structure with custom border
    expect(asFragment()).toMatchSnapshot();
  });
});
