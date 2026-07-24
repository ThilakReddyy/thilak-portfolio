import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Index from "@/pages/Index";

describe("portfolio", () => {
  it("leads with a clear product and platform positioning", () => {
    render(<Index />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /I build products all the way to production/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer at Maersk/i)).toBeInTheDocument();
    expect(screen.getByText("Jul 2023 — Sep 2026")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Freelance Software Engineer" }),
    ).toBeInTheDocument();
    expect(screen.getByText("May 2026 — Present")).toBeInTheDocument();
    expect(screen.getAllByText(/JNTUH Connect/i).length).toBeGreaterThan(0);
  });

  it("retains the confirmed impact claims", () => {
    render(<Index />);

    expect(screen.getByText("4K+")).toBeInTheDocument();
    expect(screen.getByText("<40ms")).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText("400+")).toBeInTheDocument();
    expect(screen.getByText(/Top 3% Toptal talent/i)).toBeInTheDocument();
    expect(screen.getByText(/zero major post-production defects/i)).toBeInTheDocument();
    expect(screen.getByText(/reduced activation time from 25 days to three days/i)).toBeInTheDocument();
    expect(screen.getByText(/Reduced production bugs by 32%/i)).toBeInTheDocument();
  });

  it("links to the independently visible product evidence", () => {
    render(<Index />);

    expect(screen.getByRole("link", { name: "App Store" })).toHaveAttribute(
      "href",
      "https://apps.apple.com/in/app/jntuh-connect/id6790828236",
    );
    expect(screen.getByRole("link", { name: "Google Play" })).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.dhethi.jntuhconnect",
    );
    expect(screen.getByRole("link", { name: "Live web product" })).toHaveAttribute(
      "href",
      "https://jntuhconnect.dhethi.com/",
    );

    const repositoryLinks = [
      ["Web source", "https://github.com/ThilakReddyy/JNTUHRESULTS-WEB"],
      ["Backend source", "https://github.com/ThilakReddyy/jntuh-backend"],
      ["Android source", "https://github.com/ThilakReddyy/jntuhconnect"],
      ["iOS source", "https://github.com/ThilakReddyy/jntuhconnect-ios"],
    ];

    for (const [name, href] of repositoryLinks) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("has usable landmarks, navigation targets, and safe external links", () => {
    render(<Index />);

    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main-content",
    );

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    for (const link of within(navigation).getAllByRole("link")) {
      const href = link.getAttribute("href");
      if (href?.startsWith("#")) {
        expect(document.querySelector(href)).not.toBeNull();
      }
    }

    for (const link of screen.getAllByRole("link")) {
      if (link.getAttribute("target") === "_blank") {
        expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
        expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
      }
    }
  });
});
