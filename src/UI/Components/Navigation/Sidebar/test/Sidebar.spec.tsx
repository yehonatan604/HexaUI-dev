import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../Sidebar"; // Adjust the import path
import { describe, it, expect } from "vitest";
import { FiChevronsRight } from "react-icons/fi";

describe("Sidebar Component", () => {
  it("should render children correctly", () => {
    render(
      <Sidebar options={{}}>
        <div>Sidebar Child 1</div>
        <div>Sidebar Child 2</div>
      </Sidebar>
    );

    // Check if both children are rendered
    expect(screen.getByText("Sidebar Child 1")).toBeInTheDocument();
    expect(screen.getByText("Sidebar Child 2")).toBeInTheDocument();
  });

  it("should apply custom background color and max width", () => {
    render(
      <Sidebar options={{ bgVariant: "blue-500", maxWidth: "w-80" }}>
        <div>Sidebar Content</div>
      </Sidebar>
    );

    const sidebarElement = screen.getByText("Sidebar Content").parentElement;

    // Check if the custom background and width are applied
    expect(sidebarElement).toHaveClass("bg-blue-500", "w-80");
  });

  it("should toggle sidebar visibility when the chevron is clicked", () => {
    const { container } = render(
      <Sidebar options={{}} chevron={FiChevronsRight}>
        <div>Sidebar Content</div>
      </Sidebar>
    );

    const chevronIcon = container.querySelector("svg");
    const sidebarElement = screen.getByText("Sidebar Content").parentElement;

    // Check if sidebar is open initially
    expect(sidebarElement).toHaveClass("w-[280px]");

    // Simulate clicking the chevron icon
    fireEvent.click(chevronIcon!);

    // Check if sidebar closes
    expect(sidebarElement).toHaveClass("w-[0px]");
  });

  it("should disable sidebar closing when disableClose is set", () => {
    render(
      <Sidebar options={{ disableClose: true }}>
        <div>Sidebar Content</div>
      </Sidebar>
    );

    const sidebarElement = screen.getByText("Sidebar Content").parentElement;
    const chevronIcon = screen.queryByRole("button");

    // Check that the chevron icon is not rendered when disableClose is true
    expect(chevronIcon).toBeNull();

    // Check if the sidebar remains open
    expect(sidebarElement).toHaveClass("w-[280px]");
  });

  it("should render Sidebar.Item with icon and label", () => {
    render(
      <Sidebar options={{}}>
        <Sidebar.Item label="Item Label" icon={<FiChevronsRight />}>
          Sidebar Item
        </Sidebar.Item>
      </Sidebar>
    );

    // Check if the item and its label are rendered
    expect(screen.getByText("Sidebar Item")).toBeInTheDocument();
    expect(screen.getByText("Item Label")).toBeInTheDocument();

    // Check if the icon is rendered
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
  });

  it("should render Sidebar.Header with custom background and text color", () => {
    render(
      <Sidebar options={{}}>
        <Sidebar.Header
          options={{ placement: "top", bgVariant: "failure", textVariant: "white" }}
        >
          Sidebar Header
        </Sidebar.Header>
      </Sidebar>
    );

    const headerElement = screen.getByText("Sidebar Header").parentElement;

    // Check if the custom background and text color are applied
    expect(headerElement.firstChild).toHaveClass("bg-failure");
  });

  it("should render and match the snapshot", () => {
    const { asFragment } = render(
      <Sidebar
        options={{
          bgVariant: "blue-500",
          maxWidth: "w-80",
        }}
      >
        <Sidebar.Header
          options={{ placement: "top", bgVariant: "gray-800", textVariant: "white" }}
        >
          Header
        </Sidebar.Header>
        <Sidebar.Item label="Item Label" icon={<FiChevronsRight />}>
          Item Content
        </Sidebar.Item>
        <Sidebar.Seperator />
      </Sidebar>
    );

    // Snapshot the Sidebar structure
    expect(asFragment()).toMatchSnapshot();
  });
});
