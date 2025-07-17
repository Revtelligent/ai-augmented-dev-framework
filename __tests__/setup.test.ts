/**
 * Jest Setup Verification Test
 *
 * This test file verifies that your Jest testing framework is properly configured.
 * Once you confirm everything is working, you can delete this file and start
 * writing your actual tests.
 */

describe("Jest Setup Verification", () => {
  it("should be able to run tests", () => {
    expect(true).toBe(true);
  });

  it("should have access to testing library matchers", () => {
    const element = document.createElement("div");
    element.textContent = "Hello World";
    document.body.appendChild(element);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello World");

    // Clean up
    document.body.removeChild(element);
  });

  it("should have mocked browser APIs available", () => {
    expect(window.matchMedia).toBeDefined();
    expect(global.ResizeObserver).toBeDefined();
    expect(global.IntersectionObserver).toBeDefined();
  });

  it("should support async/await", async () => {
    const promise = Promise.resolve("test");
    const result = await promise;
    expect(result).toBe("test");
  });
});
