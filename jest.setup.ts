import "@testing-library/jest-dom";

// Mock fetch API for testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ challenges: [] }),
  })
) as jest.Mock;

// Reset fetch mock before each test
beforeEach(() => {
  (global.fetch as jest.Mock).mockClear();
});

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
