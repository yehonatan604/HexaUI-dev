import { render, screen } from "@testing-library/react";
import ScrollArea from "../ScrollArea"; // Adjust the import path
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the useTheme hook
let mockTheme = { mode: "light" }; // Default mock to light mode

vi.mock("../../../../Core/Context/ThemeContext/hooks/useTheme", () => ({
  __esModule: true,
  default: () => mockTheme, // Return the current mockTheme value
}));

describe("ScrollArea Component", () => {
  beforeEach(() => {
    mockTheme = { mode: "light" }; // Reset to light mode before each test
  });

  it("should render children correctly", () => {
    render(
      <ScrollArea maxHeight="96">
        <div>Child 1</div>
        <div>Child 2</div>
      </ScrollArea>
    );

    // Check if both children are rendered
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply the correct max height class", () => {
    render(
      <ScrollArea maxHeight="96">
        <div>Child</div>
      </ScrollArea>
    );

    const scrollAreaElement = screen.getByText("Child").parentElement;

    // Check if the correct height class is applied
    expect(scrollAreaElement).toHaveClass("h-96");
  });

  it("should apply the correct scrollbar class based on theme mode (light)", () => {
    render(
      <ScrollArea maxHeight="96">
        <div>Light Theme Child</div>
      </ScrollArea>
    );

    const scrollAreaElement = screen.getByText("Light Theme Child").parentElement;

    // Check if the light scrollbar class is applied
    expect(scrollAreaElement).toHaveClass("scrollbar-light");
  });

  it("should apply the correct scrollbar class based on theme mode (dark)", () => {
    // Set mockTheme to dark before rendering
    mockTheme = { mode: "dark" };

    render(
      <ScrollArea maxHeight="96">
        <div>Dark Theme Child</div>
      </ScrollArea>
    );

    const scrollAreaElement = screen.getByText("Dark Theme Child").parentElement;

    // Check if the dark scrollbar class is applied
    expect(scrollAreaElement).toHaveClass("scrollbar-dark");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <ScrollArea maxHeight="96">
        <div>Snapshot Test</div>
      </ScrollArea>
    );

    // Snapshot the ScrollArea structure
    expect(asFragment()).toMatchSnapshot();
  });
});
