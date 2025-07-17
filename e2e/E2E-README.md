# End-to-End Testing Setup

This project uses Playwright for end-to-end testing with comprehensive screenshot capabilities.

## Quick Start

### 1. Run Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run tests with browser UI visible
npm run test:e2e:headed

# Run tests with Playwright UI (interactive mode)
npm run test:e2e:ui

# Debug tests step by step
npm run test:e2e:debug
```

### 2. View Results

```bash
# Open HTML report
npm run test:e2e:report
```

## Screenshot Management

### Automatic Screenshots

- **On Failure**: Screenshots are automatically taken when tests fail
- **Custom Screenshots**: Use the `ScreenshotHelper` class for planned screenshots
- **Responsive Testing**: Automated screenshots across different viewports

### Screenshot Locations

- **Test Results**: `test-results/`
- **Organized by Test**: `test-results/screenshots/[test-name]/`
- **HTML Report**: `test-results/html-report/`

### Using Screenshot Helper

```typescript
import { ScreenshotHelper, TestHelpers } from "./helpers/screenshot-helper";

test("my feature test", async ({ page }) => {
  const screenshot = new ScreenshotHelper("my-feature");

  // Take full page screenshot
  await screenshot.takeScreenshot(page, "step-description");

  // Take element screenshot
  await screenshot.takeElementScreenshot(
    page,
    ".my-component",
    "component-state"
  );

  // Test across viewports with screenshots
  await TestHelpers.testResponsive(page, screenshot, async (viewport) => {
    // Your responsive test logic here
  });
});
```

## Test Structure

### File Organization

```
__tests__/
├── e2e/
│   ├── helpers/
│   │   └── screenshot-helper.ts    # Screenshot utilities
│   ├── [feature-name].spec.ts     # Feature-specific tests
│   └── sample.spec.ts             # Example test template
├── integration/                    # Jest integration tests
├── setup.test.ts                   # Jest setup tests
└── E2E-README.md                   # This file
```

### Naming Convention

- Test files: `[feature-name].spec.ts`
- Screenshots: `[step-description]-[timestamp].png`
- Test names: Use descriptive names that match User Story scenarios

## Configuration

### Playwright Config (`playwright.config.ts`)

- **Base URL**: `http://localhost:3000`
- **Browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Screenshots**: Taken on failure
- **Videos**: Recorded on failure
- **Reports**: HTML and JSON formats

### Environment Setup

- **Development Server**: Automatically started before tests
- **Port**: 3000 (configurable in playwright.config.ts)
- **Timeout**: 120 seconds for server startup

## TDD Integration

### Post-TDD Validation

After completing the Red-Green-Refactor TDD cycle:

1. **Create E2E Test**: Based on the original User Story
2. **Test Scenarios**: Each Given/When/Then becomes a test case
3. **Validate Implementation**: Ensure acceptance criteria are met
4. **Document Issues**: Record any failing scenarios

### User Story Mapping

```typescript
// Example: User Story -> E2E Test mapping
test.describe("US1: Discover Quick Play Mode", () => {
  test("Scenario 1: User visits homepage", async ({ page }) => {
    // Given: User is on the homepage
    // When: Page loads
    // Then: Quick Play banner is visible
  });

  test("Scenario 2: Banner positioning", async ({ page }) => {
    // Given: Quick Play banner is displayed
    // When: User views the page
    // Then: Banner is prominently positioned
  });
});
```

## AI Assistant Integration

### Screenshot Access

Screenshots are stored in `test-results/screenshots/` and can be:

- **Viewed by AI**: All screenshots are accessible to the AI assistant
- **Analyzed**: AI can help interpret test results and failures
- **Documented**: AI can generate reports based on screenshot evidence

### Workflow Integration

1. Run E2E tests with screenshots
2. Share results/screenshots with AI assistant
3. AI analyzes failures and suggests fixes
4. Iterate until all scenarios pass

## Troubleshooting

### Common Issues

- **Port Conflicts**: Ensure port 3000 is available
- **Browser Installation**: Run `npx playwright install` if browsers are missing
- **Timeout Issues**: Increase timeout in playwright.config.ts if needed

### Debug Mode

```bash
# Run specific test in debug mode
npx playwright test tests/e2e/[feature-name].spec.ts --debug

# Run with verbose output
npx playwright test --reporter=line
```

## Best Practices

1. **Wait for Stability**: Use `TestHelpers.waitForPageReady()`
2. **Descriptive Names**: Use clear screenshot and test names
3. **Responsive Testing**: Test across multiple viewports
4. **Clean Test Data**: Ensure tests don't interfere with each other
5. **Screenshot Documentation**: Take screenshots at key interaction points
