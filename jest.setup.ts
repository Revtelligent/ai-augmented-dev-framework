import "@testing-library/jest-dom";

// Global test setup - Mock ResizeObserver
(global as any).ResizeObserver = function ResizeObserver() {
  return {
    observe: () => {},
    unobserve: () => {},
    disconnect: () => {},
  };
};

// Mock IntersectionObserver
(global as any).IntersectionObserver = function IntersectionObserver() {
  return {
    observe: () => {},
    unobserve: () => {},
    disconnect: () => {},
  };
};

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
