import { render } from "@testing-library/react";
import RainbowBorder from "../RainbowBorder";
import { test, expect, describe } from "vitest";

describe("RainbowBorder Component", () => {
  test("matches snapshot", () => {
    const { container } = render(<RainbowBorder>Content</RainbowBorder>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders the RainbowBorder component correctly", () => {
    const { container } = render(<RainbowBorder>Content</RainbowBorder>);
    expect(container.firstChild).toBeInTheDocument();
  });

  test("applies custom thickness and gradient classes", () => {
    const { container } = render(
      <RainbowBorder
        options={{ thickness: "3px", gradient: "from-blue-500 to-green-500" }}
      >
        Content
      </RainbowBorder>
    );
    expect(container.firstChild).toHaveClass("p-3px");
    expect(container.firstChild).toHaveClass(
      "bg-gradient-to-br from-blue-500 to-green-500"
    );
  });

  test("applies default thickness and gradient when options are not provided", () => {
    const { container } = render(<RainbowBorder>Content</RainbowBorder>);
    expect(container.firstChild).toHaveClass("p-[1.5px]");
    expect(container.firstChild).toHaveClass("bg-gradient-to-br");
  });

  test("renders inner element with correct classes", () => {
    const { container } = render(
      <RainbowBorder options={{ innerBgVariant: "red-500", innerRounded: "lg" }}>
        Inner Content
      </RainbowBorder>
    );
    const innerElement = container.firstChild?.firstChild;
    expect(innerElement).toHaveClass("bg-red-500");
    expect(innerElement).toHaveClass("rounded-lg");
  });

  test("renders children inside the RainbowBorder", () => {
    const { getByText } = render(
      <RainbowBorder>
        <p>Test Content</p>
      </RainbowBorder>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
