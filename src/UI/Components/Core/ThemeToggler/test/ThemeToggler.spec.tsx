import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggler from "../ThemeToggler";
import { describe, beforeEach, it, vi, expect } from "vitest";
import * as themeContext from "../../../../../Core/Context/ThemeContext/hooks/useTheme"; // Import the whole module
import { TColorPalette } from "../../../../../Data/Types/TColorPalette";

// Mock the `useTheme` hook
vi.mock("../../../../../Core/Context/ThemeContext/hooks/useTheme"); // Correctly mock the module

describe("ThemeToggler Component", () => {
  const mockToggleTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock the return value of the `useTheme` hook within the mocked module
    vi.spyOn(themeContext, "default").mockReturnValue({
      mode: "light",
      toggleTheme: mockToggleTheme,
      colors: {} as TColorPalette, // Mock other properties as empty objects or relevant mock data
      setColors: vi.fn(),
      gradients: {} as TColorPalette,
      setGradients: vi.fn(),
    });
  });

  it("renders the correct icon for light mode", () => {
    render(<ThemeToggler darkIcon={<span>🌑</span>} lightIcon={<span>🌞</span>} />);
    expect(screen.getByText("🌑")).toBeInTheDocument();
  });

  it("renders the correct icon for dark mode", () => {
    vi.spyOn(themeContext, "default").mockReturnValue({
      mode: "dark",
      toggleTheme: mockToggleTheme,
      colors: {} as TColorPalette,
      setColors: vi.fn(),
      gradients: {} as TColorPalette,
      setGradients: vi.fn(),
    });

    render(<ThemeToggler darkIcon={<span>🌑</span>} lightIcon={<span>🌞</span>} />);
    expect(screen.getByText("🌞")).toBeInTheDocument();
  });

  it("toggles the theme mode when clicked", () => {
    render(<ThemeToggler darkIcon={<span>🌑</span>} lightIcon={<span>🌞</span>} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it("renders default icons if none are provided", () => {
    render(<ThemeToggler />);
    expect(screen.getByText("🌙")).toBeInTheDocument();

    vi.spyOn(themeContext, "default").mockReturnValue({
      mode: "dark",
      toggleTheme: mockToggleTheme,
      colors: {} as TColorPalette,
      setColors: vi.fn(),
      gradients: {} as TColorPalette,
      setGradients: vi.fn(),
    });

    render(<ThemeToggler />);
    expect(screen.getByText("☀️")).toBeInTheDocument();
  });

  // Snapshot tests to verify output consistency

  it("matches the snapshot for light mode", () => {
    const { asFragment } = render(
      <ThemeToggler darkIcon={<span>🌑</span>} lightIcon={<span>🌞</span>} />
    );
    expect(asFragment()).toMatchSnapshot(); // Snapshot for light mode
  });

  it("matches the snapshot for dark mode", () => {
    vi.spyOn(themeContext, "default").mockReturnValue({
      mode: "dark",
      toggleTheme: mockToggleTheme,
      colors: {} as TColorPalette,
      setColors: vi.fn(),
      gradients: {} as TColorPalette,
      setGradients: vi.fn(),
    });
    const { asFragment } = render(
      <ThemeToggler darkIcon={<span>🌑</span>} lightIcon={<span>🌞</span>} />
    );
    expect(asFragment()).toMatchSnapshot(); // Snapshot for dark mode
  });
});
