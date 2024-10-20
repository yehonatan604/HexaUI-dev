import { render, screen, fireEvent } from "@testing-library/react";
import DocPanel from "../DocPanel"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("DocPanel Component", () => {
  it("should render the panel with the correct placement", () => {
    render(<DocPanel options={{ placement: "right" }}>Panel Content</DocPanel>);

    // Check if the panel content is rendered
    expect(screen.getByText("Panel Content")).toBeInTheDocument();

    // Check if the panel has the correct class for background
    const panelElement = screen.getByText("Panel Content").parentElement;
    expect(panelElement).toBeInTheDocument();
  });

  it("should render with the correct initial width", () => {
    render(
      <DocPanel options={{ placement: "right" }} panelWidth="300">
        Panel Content
      </DocPanel>
    );

    const panelElement = screen.getByText("Panel Content").parentElement;

    // Check if the initial width is set correctly
    expect(panelElement).toHaveStyle({ width: "300" });
  });

  it("should resize the panel when dragged", () => {
    render(
      <DocPanel options={{ placement: "right" }} panelWidth="300">
        Panel Content
      </DocPanel>
    );

    const panelElement = screen.getByText("Panel Content").parentElement;
    const borderElement = panelElement?.lastChild; // Grabbing the resizable border

    // Check if the initial width is 300px
    expect(panelElement).toHaveStyle({ width: "300" });

    // Ensure that the border element exists
    expect(borderElement).toBeInTheDocument();

    // Simulate the mousedown event on the border to start dragging
    fireEvent.mouseDown(borderElement!);

    // Simulate a mousemove event to resize the panel
    fireEvent.mouseMove(document, { clientX: 400 });

    // Check if the width has been updated correctly after dragging
    expect(panelElement).toHaveStyle({ width: "400" });

    // Simulate mouseup event to end dragging
    fireEvent.mouseUp(document);
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <DocPanel options={{ placement: "right" }} panelWidth="300">
        Panel Content
      </DocPanel>
    );

    // Snapshot the DocPanel structure
    expect(asFragment()).toMatchSnapshot();
  });
});
