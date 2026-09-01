import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Index from "@/pages/Index";
import { getCurrentRoleLabel } from "@/hooks/use-current-role";

describe("portfolio", () => {
  it("leads with a clear product and platform positioning", () => {
    render(<Index />);

    const heroHeading = screen.getByRole("heading", {
      level: 1,
      name: /I build products all the way to production/i,
    });
    const heroSection = heroHeading.closest("section");

    expect(heroHeading).toBeInTheDocument();
    expect(heroSection).not.toBeNull();
    expect(
      within(heroSection!).getByText(
        /Software Engineer at Maersk|Freelance Software Engineer/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/Jul 2023 — (Present|Sep 2026)/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Freelance Software Engineer" }),
    ).toBeInTheDocument();
    expect(screen.getByText("May 2026 — Present")).toBeInTheDocument();
    expect(screen.getAllByText(/JNTUH Connect/i).length).toBeGreaterThan(0);
  });

  it("switches the hero role after 11 September 2026 in India", () => {
    expect(
      getCurrentRoleLabel(new Date("2026-09-11T23:59:59+05:30")),
    ).toBe("Software Engineer at Maersk");
    expect(
      getCurrentRoleLabel(new Date("2026-09-12T00:00:00+05:30")),
    ).toBe("Freelance Software Engineer");
  });

  it("retains the confirmed impact claims", () => {
    render(<Index />);

    expect(screen.getByText("4K+")).toBeInTheDocument();
    expect(screen.getByText("22K+")).toBeInTheDocument();
    expect(screen.getByText("10K+")).toBeInTheDocument();
    expect(screen.getByText("10K+ downloads")).toBeInTheDocument();
    expect(screen.getByText("56 / 17")).toBeInTheDocument();
    expect(
      screen.getByText(/has 25 ratings and is currently on version 1\.0\.54/i),
    ).toBeInTheDocument();
    expect(screen.getByText("<40ms")).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText(/complete production footprint/i)).toHaveTextContent(
      /under \$14 per month while supporting 4K\+ daily active users and 22K\+ daily API calls/i,
    );
    expect(screen.getByText("400+")).toBeInTheDocument();
    expect(screen.getAllByText(/Toptal Verified Expert/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/Top 3% Toptal talent/i)).not.toBeInTheDocument();
    expect(screen.getByText(/zero major post-production defects/i)).toBeInTheDocument();
    expect(screen.getByText(/reduced activation time from 25 days to three days/i)).toBeInTheDocument();
    expect(screen.getByText(/Reduced production bugs by 32%/i)).toBeInTheDocument();
  });

  it("refreshes GitHub and Google Play figures when the page loads", async () => {
    vi.mocked(fetch).mockImplementation((input) => {
      const url = String(input);
      let payload: Record<string, string | number>;

      if (url.includes("api.github.com")) {
        payload = { stargazers_count: 72, forks_count: 21 };
      } else if (url.includes("downloads")) {
        payload = { value: "50,000+" };
      } else if (url.includes("noOfUsersRated")) {
        payload = { value: "125" };
      } else {
        payload = { value: "2.1.0" };
      }

      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(payload),
      } as Response);
    });

    render(<Index />);

    expect(await screen.findByText("72 / 21")).toBeInTheDocument();
    expect(screen.getByText("50K+ downloads")).toBeInTheDocument();
    expect(
      screen.getByText(/has 125 ratings and is currently on version 2\.1\.0/i),
    ).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(4);
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

  it("offers a clear résumé link", () => {
    render(<Index />);

    expect(screen.getByRole("link", { name: /view résumé on google drive/i })).toHaveAttribute(
      "href",
      "https://drive.google.com/file/d/1QmYEXHZ_ZGAKT3ZwrwBRC1nw2QnDFFd1/view?usp=sharing",
    );
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
