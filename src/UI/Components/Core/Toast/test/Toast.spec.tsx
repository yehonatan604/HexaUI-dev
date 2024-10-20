import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { toast } from "../../../../../Core/Context/ToastContext/helpers/toast";
import ToastProvider from "../../../../../Core/Context/ToastContext/providers/Toast.provider";
import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";

// Mock the Toast component
vi.mock("../../../../UI/Components/Core/Toast/Toast", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Test component to trigger toast via button click
const TestComponent = () => (
  <ToastProvider>
    <div>Test App</div>
    <button onClick={() => toast.info("This is an info message")}>Show Info Toast</button>
    <button onClick={() => toast.success("This is a success message")}>
      Show Success Toast
    </button>
  </ToastProvider>
);

describe("Toast System", () => {
  // Create the #alert-container for the portal
  beforeEach(() => {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "alert-container");
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    const portalRoot = document.getElementById("alert-container");
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it("should display an info toast using a button click and match the snapshot", async () => {
    const { asFragment } = render(<TestComponent />);

    // Simulate clicking the button to trigger the toast
    fireEvent.click(screen.getByText("Show Info Toast"));

    // The toast should appear in the alert container
    await waitFor(() =>
      expect(screen.getByText("This is an info message")).toBeInTheDocument()
    );

    // Check that the toast has the correct title
    expect(screen.getByText("Info")).toBeInTheDocument();

    // Snapshot the DOM structure after the toast is rendered
    expect(asFragment()).toMatchSnapshot();
  });

  it("should display a success toast using a button click and match the snapshot", async () => {
    const { asFragment } = render(<TestComponent />);

    // Simulate clicking the button to trigger the toast
    fireEvent.click(screen.getByText("Show Success Toast"));

    // The toast should appear in the alert container
    await waitFor(() =>
      expect(screen.getByText("This is a success message")).toBeInTheDocument()
    );

    // Check that the toast has the correct title
    expect(screen.getByText("Success")).toBeInTheDocument();

    // Snapshot the DOM structure after the toast is rendered
    expect(asFragment()).toMatchSnapshot();
  });
});
