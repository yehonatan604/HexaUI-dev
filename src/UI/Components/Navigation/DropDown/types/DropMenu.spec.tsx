import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DropMenu from "../DropMenu";
import { describe, it, expect } from "vitest";

describe("DropMenu Component", () => {
  it("renders the drop menu with title", () => {
    render(<DropMenu title="Menu Title">Content</DropMenu>);
    expect(screen.getByText("Menu Title")).toBeInTheDocument();
  });

  it("toggles dropdown content visibility on click", async () => {
    render(
      <DropMenu title="Menu Title">
        <p>Dropdown Content</p>
      </DropMenu>
    );

    // Click to open the dropdown
    fireEvent.click(screen.getByText("Menu Title"));
    await waitFor(() => {
      expect(screen.getByText("Dropdown Content")).toBeVisible();
    });
  });

  it("renders content correctly based on type", async () => {
    const { rerender } = render(
      <DropMenu title="Horizontal Menu" type="horizontal">
        Content
      </DropMenu>
    );

    const dropdown = screen.getByText("Content");
    await waitFor(() => {
      expect(dropdown).toHaveClass("left-full top-0");
    });

    rerender(
      <DropMenu title="Vertical Menu" type="vertical">
        Content
      </DropMenu>
    );
    expect(dropdown).toHaveClass("top-full left-0");
  });

  it("applies correct CSS classes from props", async () => {
    render(
      <DropMenu
        title="Styled Menu"
        options={{
          bgVariant: "blue-500",
          titleVariant: "white",
          textVariant: "white",
          titleSize: "lg",
        }}
      >
        <p>Content</p>
      </DropMenu>
    );

    const title = screen.getByText("Styled Menu");
    const text = screen.getByText("Content");
    await waitFor(() => {
      expect(title).toHaveClass("text-lg text-white");
      expect(text.parentNode).toHaveClass("bg-blue-500 text-white");
    });
  });
});
