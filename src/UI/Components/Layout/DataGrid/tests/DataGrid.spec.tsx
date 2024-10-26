import { render, screen, fireEvent } from "@testing-library/react";
import DataGrid from "../DataGrid";
import { describe, it, expect } from "vitest";

describe("DataGrid Component", () => {
  const mockRowsArr = [
    ["ID", "Name", "Age"], // Header row
    [1, "John Doe", 30],
    [2, "Jane Smith", 25],
    [3, "Alice Johnson", 35],
  ];

  it("renders the DataGrid component with header and rows", () => {
    render(<DataGrid rowsArr={mockRowsArr} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("applies sorting correctly", async () => {
    render(<DataGrid rowsArr={mockRowsArr} />);
    const nameHeader = screen.getByText("Name", { selector: "div" });
    fireEvent.click(nameHeader); // Sort ascending
    fireEvent.click(nameHeader); // Sort descending

    const rows = screen.getAllByRole("row");
    expect(rows[0]).toHaveTextContent("John Doe");
    expect(rows[2]).toHaveTextContent("Alice Johnson");
  });

  it("filters rows based on input", () => {
    render(<DataGrid rowsArr={mockRowsArr} />);
    const filterInput = screen.getByPlaceholderText("Filter value...");
    const bySelect = screen.getAllByRole("combobox")[0];
    const operatorSelect = screen.getAllByRole("combobox")[1];
    fireEvent.change(bySelect, { target: { value: "Name" } });
    fireEvent.change(filterInput, { target: { value: "Jane" } });
    fireEvent.change(operatorSelect, { target: { value: "Contains" } });

    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).toBeNull();
  });

  it("searches rows based on search term", () => {
    render(<DataGrid rowsArr={mockRowsArr} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Alice" } });

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).toBeNull();
  });
});
