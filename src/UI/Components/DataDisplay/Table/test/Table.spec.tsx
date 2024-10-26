import { render, screen } from "@testing-library/react";
import Table from "../Table";

describe("Table Component", () => {
  it("renders the table with the correct headers and rows", () => {
    const rowsArr = [
      ["Header 1", "Header 2", "Header 3"],
      ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
      ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
    ];

    render(<Table rowsArr={rowsArr} />);

    // Check if headers are rendered
    expect(screen.getByText("Header 1")).toBeInTheDocument();
    expect(screen.getByText("Header 2")).toBeInTheDocument();
    expect(screen.getByText("Header 3")).toBeInTheDocument();

    // Check if rows are rendered
    expect(screen.getByText("Row 1 Cell 1")).toBeInTheDocument();
    expect(screen.getByText("Row 2 Cell 3")).toBeInTheDocument();
  });

  it("applies striped row classes when enabled", () => {
    const rowsArr = [
      ["Header 1", "Header 2"],
      ["Row 1 Cell 1", "Row 1 Cell 2"],
      ["Row 2 Cell 1", "Row 2 Cell 2"],
    ];
    const options = {
      striped: true,
    };

    render(<Table rowsArr={rowsArr} options={options} />);

    // Get all rows excluding the header
    const rows = screen.getAllByRole("row").slice(1);

    // Check if the striped rows have the appropriate class
    rows.forEach((row, index) => {
      if (index % 2 === 0) {
        expect(row).toHaveClass("bg-gray-800/50");
      } else {
        expect(row).toHaveClass("bg-gray-900");
      }
    });
  });
});
