import { render, screen } from "@testing-library/react";
import Title from "../Title"; // Adjust the import path
import { describe, it, expect } from "vitest";

describe("Title Component", () => {
  it("should render the title text correctly", () => {
    render(<Title options={{}}>Test Title</Title>);

    // Check if the title text is rendered
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should apply custom size, text, and background variants", () => {
    render(
      <Title
        options={{
          size: "lg",
          textVariant: "blue-500",
          bgVariant: "gray-100",
          padding: "p-8",
        }}
      >
        Custom Title
      </Title>
    );

    const titleElement = screen.getByText("Custom Title");

    // Check if the correct size, text color, background color, and padding are applied
    expect(titleElement).toHaveClass("text-4xl", "text-blue-500", "p-8");
    const parentElement = titleElement.closest("div");
    expect(parentElement).toHaveClass("w-full", "gray-100");
  });

  it("should align the title based on the 'align' option", () => {
    render(
      <Title
        options={{
          align: "start",
        }}
      >
        Aligned Title
      </Title>
    );

    const parentElement = screen.getByText("Aligned Title").closest("div");

    // Check if the title is aligned to the start
    expect(parentElement).toHaveClass("justify-start");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Title options={{ size: "xl", textVariant: "red-500" }}>Snapshot Title</Title>
    );

    // Snapshot the Title structure
    expect(asFragment()).toMatchSnapshot();
  });
});
