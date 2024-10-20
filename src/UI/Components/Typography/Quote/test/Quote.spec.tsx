import { render, screen } from "@testing-library/react";
import Quote from "../Quote"; // Adjust the import path
import { describe, it, expect } from "vitest";
import { TCite } from "../types/TCite";

describe("Quote Component", () => {
  it("should render the quote text and citation", () => {
    render(
      <Quote
        cite={
          {
            url: "https://example.com",
            text: "Source",
            placement: "end",
            variant: "blue-500",
          } as TCite & string
        }
        options={{}}
      >
        This is a test quote.
      </Quote>
    );

    // Check if the quote text is rendered
    expect(screen.getByText(/This is a test quote./)).toBeInTheDocument();

    // Check if the citation is rendered and has the correct link
    const citeElement = screen.getByText("Source");
    expect(citeElement).toBeInTheDocument();
    expect(citeElement).toHaveAttribute("href", "https://example.com");
  });

  it("should apply custom text and cite variants", () => {
    render(
      <Quote
        cite={
          {
            url: "https://example.com",
            text: "Source",
            placement: "end",
            variant: "red-500",
          } as TCite & string
        }
        options={{ textVariant: "green-500" }}
      >
        This is a custom colored quote.
      </Quote>
    );

    const quoteText = screen.getByText(/This is a custom colored quote./);
    const citeElement = screen.getByText("Source");

    // Check if the custom text color for the quote and citation are applied
    expect(quoteText).toHaveClass("text-green-500");
    expect(citeElement).toHaveClass("text-red-500");
  });

  it("should align the citation based on the placement option", () => {
    render(
      <Quote
        cite={
          {
            url: "https://example.com",
            text: "Source",
            placement: "start",
            variant: "blue-500",
          } as TCite & string
        }
        options={{}}
      >
        This is a test quote.
      </Quote>
    );

    const flexContainer = screen.getByRole("presentation");

    // Check if the citation alignment is correct
    expect(flexContainer).toHaveClass("items-start");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Quote
        cite={
          {
            url: "https://example.com",
            text: "Source",
            placement: "end",
            variant: "blue-500",
          } as TCite & string
        }
        options={{ textVariant: "green-500", gap: 2 }}
      >
        This is a snapshot test quote.
      </Quote>
    );

    // Snapshot the Quote structure
    expect(asFragment()).toMatchSnapshot();
  });
});
