import { render } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Ring from "../Ring";

describe("Ring Component", () => {
  test("renders correctly and matches the snapshot", () => {
    const { asFragment } = render(<Ring>Content</Ring>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("applies custom border variant", () => {
    const { container } = render(
      <Ring options={{ borderVariant: "success" }}>Content</Ring>
    );
    expect(container.firstChild).toHaveClass("border-success");
  });

  test("applies custom ring thickness", () => {
    const { container } = render(<Ring options={{ ringThickness: 5 }}>Content</Ring>);
    expect(container.firstChild).toHaveClass("ring-5");
  });

  test("applies custom padding", () => {
    const { container } = render(<Ring options={{ padding: 4 }}>Content</Ring>);
    expect(container.firstChild).toHaveClass("p-4");
  });

  test("applies custom shadow styles", () => {
    const { container } = render(
      <Ring options={{ shadow: { size: "xl", color: "black" } }}>Content</Ring>
    );
    expect(container.firstChild).toHaveClass("shadow-xl shadow-black");
  });
});
