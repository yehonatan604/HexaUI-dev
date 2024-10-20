import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Button from "../Button";
import { Sizes } from "../../../../../Data/Constants/Sizes";

test("renders the button correctly", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { asFragment } = render(<Button>Click Me</Button>);
  expect(asFragment()).toMatchSnapshot();
});

test("applies background color variant", () => {
  const { container } = render(<Button options={{ bgVariant: "success" }} />);
  expect(container.firstChild).toHaveClass("bg-success");
});

test("applies text color variant", () => {
  const { container } = render(<Button options={{ textVariant: "success" }} />);
  expect(container.firstChild).toHaveClass("text-success");
});

test("applies rounded styles when rounded prop is true", () => {
  const { container } = render(<Button options={{ notRounded: true }}>Click Me</Button>);
  expect(container.firstChild).toHaveClass("not-rounded");
});

test("applies rounded styles when no rounded prop", () => {
  const { container } = render(<Button>Click Me</Button>);
  expect(container.firstChild).toHaveClass("rounded");
});

test("applies size styles when size prop is small", () => {
  const { container } = render(<Button options={{ size: "sm" }}>Click Me</Button>);
  expect(container.firstChild).toHaveClass("px-2 py-1 text-sm");
});

test("applies size styles when size prop is small using Sizes", () => {
  const { container } = render(<Button options={{ size: Sizes.Sm }}>Click Me</Button>);
  expect(container.firstChild).toHaveClass("px-2 py-1 text-sm");
});

test("triggers onClick handler when clicked", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
