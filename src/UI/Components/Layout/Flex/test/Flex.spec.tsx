import { render, screen } from "@testing-library/react";
import Flex from "../Flex"; // Adjust the import path
import { describe, it, expect, vi } from "vitest";

describe("Flex Component", () => {
  it("should render children correctly", () => {
    render(
      <Flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    );

    // Check if both children are rendered
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply default flex direction and alignment", () => {
    render(
      <Flex>
        <div>Child 1</div>
      </Flex>
    );

    const flexElement = screen.getByText("Child 1").parentElement;

    // Check if the default flex direction is 'row' and default alignment is applied
    expect(flexElement).toHaveClass(
      "flex",
      "flex-row",
      "justify-start",
      "items-start",
      "flex-nowrap"
    );
  });

  it("should apply custom flex direction and alignment from options", () => {
    render(
      <Flex
        options={{
          direction: "col",
          justify: "end",
          align: "center",
          wrap: "wrap",
        }}
      >
        <div>Child 1</div>
      </Flex>
    );

    const flexElement = screen.getByText("Child 1").parentElement;

    // Check if the custom flex direction, justify, align, and wrap classes are applied
    expect(flexElement).toHaveClass(
      "flex",
      "flex-col",
      "justify-end",
      "items-center",
      "flex-wrap"
    );
  });

  it("should apply center prop correctly", () => {
    render(
      <Flex center>
        <div>Centered Child</div>
      </Flex>
    );

    const flexElement = screen.getByText("Centered Child").parentElement;

    // Check if both justify and align are centered
    expect(flexElement).toHaveClass(
      "flex",
      "flex-row",
      "justify-center",
      "items-center",
      "flex-wrap"
    );
  });

  it("should apply end prop correctly", () => {
    render(
      <Flex end>
        <div>End Aligned Child</div>
      </Flex>
    );

    const flexElement = screen.getByText("End Aligned Child").parentElement;

    // Check if both justify and align are set to end
    expect(flexElement).toHaveClass(
      "flex",
      "flex-row",
      "justify-end",
      "items-end",
      "flex-nowrap"
    );
  });

  it("should log an error when both center and end props are provided", () => {
    const consoleErrorSpy = vi.spyOn(console, "error");

    render(
      <Flex center end>
        <div>Error Test</div>
      </Flex>
    );

    // Expect the error to be logged
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Flex component can't have both center and end props"
    );

    consoleErrorSpy.mockRestore(); // Clean up the spy
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Flex
        options={{
          direction: "col",
          justify: "center",
          align: "end",
          wrap: "wrap",
        }}
      >
        <div>Snapshot Test</div>
      </Flex>
    );

    // Snapshot the Flex component structure
    expect(asFragment()).toMatchSnapshot();
  });
});
