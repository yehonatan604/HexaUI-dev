import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Card from "../Card";

describe("Card Component", () => {
  test("matches snapshot", () => {
    render(<Card data-testid="Card" />);
    expect(screen.getByTestId("Card")).toMatchSnapshot();
  });

  test("renders Card Header correctly", () => {
    render(<Card.Header>Card Header Title</Card.Header>);
    expect(screen.getByText("Card Header Title")).toBeInTheDocument();
  });

  test("renders Card Footer with button correctly", () => {
    render(
      <Card.Footer>
        <button>Submit</button>
      </Card.Footer>
    );
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("renders Card with Header, Body, and Footer", () => {
    render(
      <Card>
        <Card.Header>Card Header</Card.Header>
        <div>Card Body Content</div>
        <Card.Footer>
          <button>Submit</button>
        </Card.Footer>
      </Card>
    );

    expect(screen.getByText("Card Header")).toBeInTheDocument();
    expect(screen.getByText("Card Body Content")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("renders Card with custom options", () => {
    render(
      <Card
        data-testid="Card"
        options={{
          bgVariant: "red-500",
          textVariant: "white",
          rounded: "lg",
          gap: 2,
          border: {
            show: true,
            variant: "blue-500",
            radius: "xl",
          },
          shadow: {
            size: "lg",
            color: "gray-500",
          },
        }}
      >
        <Card.Header>Card Header</Card.Header>
        <div>Card Body Content</div>
        <Card.Footer>
          <button>Submit</button>
        </Card.Footer>
      </Card>
    );

    const card = screen.getByTestId("Card");
    expect(card).toHaveClass(
      "bg-red-500 text-white rounded-lg gap-2 shadow-lg shadow-gray-500 border-2 border-blue-500 rounded-xl"
    );
  });
});
