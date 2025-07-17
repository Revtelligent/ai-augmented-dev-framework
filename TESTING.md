# Testing Framework Setup

This document outlines the testing framework configuration for the mind-game project.

## Overview

The project uses Jest as the test runner with the following key components:

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **jsdom**: DOM environment for testing

## Configuration Files

### `jest.config.ts`

Main Jest configuration file that:

- Uses Next.js Jest configuration
- Sets up jsdom test environment
- Configures coverage collection and thresholds
- Sets up path mapping for `@/` imports
- Written in TypeScript with full type safety

### `jest.setup.ts`

Test setup file that:

- Imports Jest DOM matchers from `@testing-library/jest-dom`
- Mocks browser APIs (ResizeObserver, IntersectionObserver, matchMedia)
- Sets up global test environment

### `package.json` Scripts

- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## File Structure

```
__tests__/              # Test files directory
  setup.test.ts         # Setup verification test (delete after confirming setup)

# Alternatively, you can place test files next to your source code:
components/
  Button.tsx
  Button.test.tsx       # Test file for Button component

app/
  page.tsx
  page.test.tsx         # Test file for page component
```

## Test File Naming Conventions

Jest will automatically find and run files with these patterns:

- `**/__tests__/**/*.test.{js,jsx,ts,tsx}`
- `**/__tests__/**/*.spec.{js,jsx,ts,tsx}`
- `**/*.test.{js,jsx,ts,tsx}`
- `**/*.spec.{js,jsx,ts,tsx}`

## Example Test Structure

### Component Test Example

```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });
});
```

### Utility Function Test Example

```typescript
import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("combines classes correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });
});
```

## Available Matchers

Thanks to `@testing-library/jest-dom`, you have access to additional matchers:

- `toBeInTheDocument()`
- `toHaveTextContent()`
- `toHaveAttribute()`
- `toBeVisible()`
- `toBeDisabled()`
- And many more...

## Coverage Thresholds

Current coverage thresholds are set to 70% for:

- Statements
- Branches
- Functions
- Lines

You can adjust these in `jest.config.js` under `coverageThreshold`.

## Getting Started

1. **Verify Setup**: Run `npm test` to confirm the setup verification test passes
2. **Delete Setup Test**: Remove `__tests__/setup.test.ts` once confirmed
3. **Write Your First Test**: Create a test file for an existing component
4. **Run Tests**: Use `npm test` or `npm run test:watch` during development

## Debugging Tests

- Use `console.log()` in tests for debugging
- Add `--verbose` flag: `npm test -- --verbose`
- Run specific test: `npm test -- Button.test.ts`
- Run tests matching pattern: `npm test -- --testNamePattern="renders button"`

## Tips

- Write tests as you develop features (TDD approach)
- Start with simple unit tests before integration tests
- Use `screen.debug()` to see the rendered HTML in tests
- Mock external dependencies and API calls
- Test user interactions with `@testing-library/user-event`
