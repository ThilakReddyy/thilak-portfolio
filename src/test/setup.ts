import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";

const fetchMock = vi.fn(() => Promise.reject(new Error("Network disabled in tests")));

Object.defineProperty(globalThis, "fetch", {
  writable: true,
  value: fetchMock,
});

afterEach(() => {
  fetchMock.mockReset();
  fetchMock.mockRejectedValue(new Error("Network disabled in tests"));
});

class IntersectionObserverMock {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds = [0];

  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
