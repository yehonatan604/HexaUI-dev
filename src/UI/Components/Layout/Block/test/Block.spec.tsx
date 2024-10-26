import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Block from "../Block";
import ThemeProvider from "../../../../../Core/Context/ThemeContext/providers/Theme.provider";

// Sample props to test different scenarios
const sampleProps = {
  options: {
    bgVariant: "blue-500",
    textVariant: "gray-900",
    border: {
      variant: "blue-300",
      thickness: "border-2",
      radius: "rounded-lg",
    },
    padding: "6",
    innerPadding: "2",
  },
  inline: false,
  className: "custom-class",
  innerClassName: "inner-custom-class",
};

describe("Block Component", () => {
  it("should render with default props", () => {
    const { container } = render(
      <ThemeProvider>
        <Block>Default Block</Block>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with custom options", () => {
    const { container } = render(
      <ThemeProvider>
        <Block {...sampleProps}>Custom Block</Block>
      </ThemeProvider>
    );

    expect(container.querySelector(".bg-blue-500")).toBeDefined();
    expect(container.querySelector(".text-gray-900")).toBeDefined();
    expect(container.querySelector(".border-blue-300")).toBeDefined();
    expect(container.querySelector(".border-2")).toBeDefined();
    expect(container.querySelector(".rounded-lg")).toBeDefined();
    expect(container.querySelector(".p-6")).toBeDefined();
    expect(container.querySelector(".inner-custom-class")).toBeDefined();
  });

  it("should use theme context to determine text color", () => {
    const { container } = render(
      <ThemeProvider>
        <Block>Dark Mode Block</Block>
      </ThemeProvider>
    );

    expect(container.querySelector(".text-white-d")).toBeDefined();
  });

  it("should apply inline styles correctly", () => {
    const { container } = render(
      <ThemeProvider>
        <Block inline>Inline Block</Block>
      </ThemeProvider>
    );

    expect(container.querySelector(".inline-block")).toBeDefined();
  });
});
