import { test, expect } from "@playwright/test";
import { ScreenshotHelper, TestHelpers } from "./helpers/screenshot-helper";

/**
 * Sample E2E Test Template
 *
 * This template demonstrates how to use the screenshot helper
 * and follows the TDD validation approach described in the prompt.
 *
 * Replace this with actual feature tests based on User Stories.
 */

test.describe("Sample Feature E2E Tests", () => {
  let screenshot: ScreenshotHelper;

  test.beforeEach(async ({ page }) => {
    screenshot = new ScreenshotHelper("sample-feature");
    await page.goto("/");
    await TestHelpers.waitForPageReady(page);
  });

  test("should demonstrate screenshot capabilities", async ({ page }) => {
    // Take initial screenshot
    await screenshot.takeScreenshot(page, "01-initial-page-load");

    // Example: Test a component exists
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();

    // Take screenshot after interaction
    await screenshot.takeScreenshot(page, "02-after-heading-verification");

    // Example: Test responsive behavior
    await TestHelpers.testResponsive(page, screenshot, async (viewport) => {
      console.log(`Testing in ${viewport} viewport`);
      // Add viewport-specific assertions here
    });
  });

  test("should capture element screenshots", async ({ page }) => {
    // Example: Screenshot specific elements
    const header = page.locator("header");
    if ((await header.count()) > 0) {
      await screenshot.takeElementScreenshot(
        page,
        "header",
        "header-component"
      );
    }

    // Take full page screenshot for comparison
    await screenshot.takeScreenshot(page, "03-full-page-capture");
  });

  test.afterEach(async () => {
    // Log all screenshots taken during the test
    const screenshots = screenshot.getScreenshotPaths();
    console.log("📸 Screenshots captured:", screenshots);
  });

  test.afterAll(async () => {
    // Optional: Clean up old screenshots (uncomment if needed)
    // screenshot.cleanupOldScreenshots(7); // Keep only last 7 days
  });
});
