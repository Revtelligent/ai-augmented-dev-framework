import { test, expect } from "@playwright/test";
import { ScreenshotHelper, VIEWPORTS } from "./helpers/screenshot-helper";

/**
 * E2E Tests for Quick Play Mode Discovery
 * Tests the QuickPlayBanner component functionality
 */
test.describe("Quick Play Banner Tests", () => {
  let screenshot: ScreenshotHelper;

  test.beforeEach(async ({ page }) => {
    screenshot = new ScreenshotHelper("quick-play-banner");
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("Banner displays and is visible on home page", async ({ page }) => {
    const banner = page.locator('section[role="banner"]');
    await expect(banner).toBeVisible();

    // Verify Try Now button is present
    const tryNowButton = page.getByRole("button", { name: /try now/i });
    await expect(tryNowButton).toBeVisible();

    // Take screenshot for AI analysis
    await screenshot.takeScreenshot(page, "01-banner-visible-on-home");
  });

  test("Banner is responsive across different viewports", async ({ page }) => {
    const banner = page.locator('section[role="banner"]');

    // Test desktop
    await page.setViewportSize(VIEWPORTS.desktop);
    await expect(banner).toBeVisible();
    await screenshot.takeComparisonScreenshot(
      page,
      "banner-responsive",
      "desktop"
    );

    // Test tablet
    await page.setViewportSize(VIEWPORTS.tablet);
    await expect(banner).toBeVisible();
    await screenshot.takeComparisonScreenshot(
      page,
      "banner-responsive",
      "tablet"
    );

    // Test mobile
    await page.setViewportSize(VIEWPORTS.mobile);
    await expect(banner).toBeVisible();
    await screenshot.takeComparisonScreenshot(
      page,
      "banner-responsive",
      "mobile"
    );
  });

  test("Try Now button navigates correctly", async ({ page }) => {
    const tryNowButton = page.getByRole("button", { name: /try now/i });
    await expect(tryNowButton).toBeVisible();

    // Take screenshot before clicking
    await screenshot.takeScreenshot(page, "02-before-try-now-click");

    // Click the Try Now button
    await tryNowButton.click();

    // Wait for navigation to quick-play pages
    await page.waitForURL(/\/(quick-play\/tutorial|quick-play\/games)/, {
      timeout: 5000,
    });

    // Verify we're on the expected page
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/\/(quick-play\/tutorial|quick-play\/games)/);

    // Take screenshot after navigation
    await screenshot.takeScreenshot(page, "03-after-try-now-navigation");
  });

  test("Banner has proper accessibility attributes", async ({ page }) => {
    const banner = page.locator('section[role="banner"]');
    await expect(banner).toBeVisible();

    // Check banner has proper ARIA label
    const ariaLabel = await banner.getAttribute("aria-label");
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel).toContain("Quick Play Mode");

    // Check Try Now button accessibility
    const tryNowButton = page.getByRole("button", { name: /try now/i });
    await expect(tryNowButton).toBeVisible();

    // Take screenshot for accessibility validation
    await screenshot.takeElementScreenshot(
      page,
      'section[role="banner"]',
      "04-accessibility-validation"
    );
  });

  test("Banner loads within performance requirements", async ({ page }) => {
    await page.goto("about:blank");

    const startTime = Date.now();
    await page.goto("/");

    const banner = page.locator('section[role="banner"]');
    await expect(banner).toBeVisible({ timeout: 1500 });

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(1500);

    // Take screenshot to confirm banner loaded
    await screenshot.takeScreenshot(page, "05-performance-load-validation");
  });
});
