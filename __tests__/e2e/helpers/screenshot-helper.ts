import { Page } from "@playwright/test";
import path from "path";
import fs from "fs";

export class ScreenshotHelper {
  private screenshotDir: string;
  private testName: string;

  constructor(testName: string) {
    this.testName = testName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    this.screenshotDir = path.join(
      process.cwd(),
      "test-results",
      "screenshots",
      this.testName
    );

    // Ensure directory exists
    if (!fs.existsSync(this.screenshotDir)) {
      fs.mkdirSync(this.screenshotDir, { recursive: true });
    }
  }

  /**
   * Take a screenshot with a descriptive name
   */
  async takeScreenshot(
    page: Page,
    stepName: string,
    options?: {
      fullPage?: boolean;
      clip?: { x: number; y: number; width: number; height: number };
    }
  ): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${stepName.replace(
      /[^a-zA-Z0-9]/g,
      "-"
    )}-${timestamp}.png`;
    const screenshotPath = path.join(this.screenshotDir, filename);

    await page.screenshot({
      path: screenshotPath,
      fullPage: options?.fullPage ?? true,
      clip: options?.clip,
    });

    console.log(`📸 Screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  /**
   * Take a screenshot of a specific element
   */
  async takeElementScreenshot(
    page: Page,
    selector: string,
    stepName: string
  ): Promise<string> {
    const element = page.locator(selector);
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `element-${stepName.replace(
      /[^a-zA-Z0-9]/g,
      "-"
    )}-${timestamp}.png`;
    const screenshotPath = path.join(this.screenshotDir, filename);

    await element.screenshot({ path: screenshotPath });

    console.log(`📸 Element screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  /**
   * Take comparison screenshots for visual regression testing
   */
  async takeComparisonScreenshot(
    page: Page,
    stepName: string,
    device: string
  ): Promise<string> {
    const filename = `${stepName.replace(/[^a-zA-Z0-9]/g, "-")}-${device}.png`;
    const screenshotPath = path.join(this.screenshotDir, filename);

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });

    console.log(`📸 Comparison screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  /**
   * Get all screenshots for this test
   */
  getScreenshotPaths(): string[] {
    if (!fs.existsSync(this.screenshotDir)) {
      return [];
    }

    return fs
      .readdirSync(this.screenshotDir)
      .filter((file) => file.endsWith(".png"))
      .map((file) => path.join(this.screenshotDir, file));
  }

  /**
   * Clean up old screenshots (optional - for managing storage)
   */
  cleanupOldScreenshots(daysOld: number = 7): void {
    if (!fs.existsSync(this.screenshotDir)) {
      return;
    }

    const cutoffTime = Date.now() - daysOld * 24 * 60 * 60 * 1000;

    fs.readdirSync(this.screenshotDir).forEach((file) => {
      const filePath = path.join(this.screenshotDir, file);
      const stats = fs.statSync(filePath);

      if (stats.mtime.getTime() < cutoffTime) {
        fs.unlinkSync(filePath);
        console.log(`🗑️ Cleaned up old screenshot: ${filePath}`);
      }
    });
  }
}

/**
 * Viewport configurations for responsive testing
 */
export const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1200, height: 800 },
  widescreen: { width: 1920, height: 1080 },
} as const;

/**
 * Common test utilities
 */
export class TestHelpers {
  /**
   * Wait for page to be fully loaded and interactive
   */
  static async waitForPageReady(page: Page): Promise<void> {
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState("domcontentloaded");
  }

  /**
   * Test responsive behavior across different viewports
   */
  static async testResponsive(
    page: Page,
    screenshot: ScreenshotHelper,
    testCallback: (viewport: string) => Promise<void>
  ): Promise<void> {
    for (const [name, size] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(size);
      await this.waitForPageReady(page);
      await screenshot.takeComparisonScreenshot(page, "responsive-test", name);
      await testCallback(name);
    }
  }
}
