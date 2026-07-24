import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "@/components/Navbar";

describe("mobile navigation", () => {
  it("opens, exposes its controlled menu, and closes after selection", () => {
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Open navigation menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "mobile-navigation");

    fireEvent.click(toggle);

    const closeToggle = screen.getByRole("button", {
      name: "Close navigation menu",
    });
    expect(closeToggle).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = document.getElementById("mobile-navigation");
    expect(mobileNavigation).not.toBeNull();

    fireEvent.click(
      within(mobileNavigation as HTMLElement).getByRole("link", { name: "Work" }),
    );
    expect(
      screen.getByRole("button", { name: "Open navigation menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("closes when Escape is pressed", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));
    fireEvent.keyDown(window, { key: "Escape" });

    expect(
      screen.getByRole("button", { name: "Open navigation menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });
});
