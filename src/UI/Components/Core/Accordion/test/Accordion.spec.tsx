import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Accordion from "../Accordion";

test("renders Accordion header correctly", () => {
  render(
    <Accordion options={{ title: "Accordion Header" }}>Accordion Content</Accordion>
  );
  expect(screen.getByText("Accordion Header")).toBeInTheDocument();
});

test("renders Accordion content when clicked", () => {
  render(
    <Accordion options={{ title: "Accordion Header" }}>Accordion Content</Accordion>
  );
  const header = screen.getByText("Accordion Header");
  fireEvent.click(header);
  expect(screen.getByText("Accordion Content")).toBeInTheDocument();
});

test("toggles content visibility on multiple clicks", () => {
  render(
    <Accordion options={{ title: "Accordion Header" }}>Accordion Content</Accordion>
  );
  const header = screen.getByText("Accordion Header");

  // Click to open
  fireEvent.click(header);
  expect(screen.getByText("Accordion Content")).toBeVisible();

  // Click again to close
  fireEvent.click(header);
  expect(screen.queryByText("Accordion Content")).not.toBeInTheDocument();
});

test("applies custom border color variant", () => {
  const { container } = render(
    <Accordion options={{ title: "Accordion Header", border: { variant: "blue-500" } }}>
      Accordion Content
    </Accordion>
  );
  expect(container.firstChild).toHaveClass("border-blue-500");
});

test("renders multiple accordions independently", () => {
  render(
    <>
      <Accordion options={{ title: "Accordion 1" }}>Content 1</Accordion>
      <Accordion options={{ title: "Accordion 2" }}>Content 2</Accordion>
    </>
  );

  // Open Accordion 1
  fireEvent.click(screen.getByText("Accordion 1"));
  expect(screen.getByText("Content 1")).toBeVisible();

  // Open Accordion 2
  fireEvent.click(screen.getByText("Accordion 2"));
  expect(screen.getByText("Content 2")).toBeVisible();
});

test("applies custom text color variant", () => {
  const { container } = render(
    <Accordion options={{ title: "Accordion Header", textVariant: "success" }}>
      Accordion Content
    </Accordion>
  );
  expect(container.firstChild.firstChild.lastChild).toHaveClass("text-success");
});

test("applies custom title color variant", () => {
  const { container } = render(
    <Accordion options={{ title: "Accordion Header", titleVariant: "approve" }}>
      Accordion Content
    </Accordion>
  );
  expect(container.firstChild.firstChild.firstChild).toHaveClass("text-approve");
});

test("applies custom background color variant", () => {
  const { container } = render(
    <Accordion options={{ title: "Accordion Header", bgVariant: "bg-green-500" }}>
      Accordion Content
    </Accordion>
  );
  expect(container.firstChild.firstChild).toHaveClass("bg-green-500");
});

test("applies custom border", () => {
  const { container } = render(
    <Accordion options={{ title: "Accordion Header", border: { radius: "xl" } }}>
      Accordion Content
    </Accordion>
  );
  expect(container.firstChild).toHaveClass("rounded-xl");
});
