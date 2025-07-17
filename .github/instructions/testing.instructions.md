# Testing Instructions & Best Practices Reference

## Quick Start Examples

### Common Scenarios

- [Testing a new component](#testing-props-and-rendering) - Basic rendering and props
- [Testing user interactions](#testing-user-events) - Clicks, forms, navigation
- [Testing async operations](#testing-async-operations) - API calls, loading states
- [Testing error conditions](#testing-error-states) - Error handling and edge cases

### By Component Type

- [Testing React components](#unit-tests-most-common) - Components, hooks, rendering
- [Testing utility functions](#test-categories--when-to-use) - Pure functions, calculations
- [Testing API integrations](#integration-tests) - External service calls

### By Development Phase

- [TDD: Write first test](#tdd-workflow-red-green-refactor) - Starting with failing tests
- [Adding tests to existing code](#test-structure-template) - Retrofitting coverage
- [Debugging failing tests](#running-tests) - Common issues and solutions

## Test Location Strategy

### Default: Co-located Tests (Recommended)

Place tests next to the components/modules they test:

```
components/
  quick-play/
    QuickPlayBanner.tsx
    QuickPlayBanner.test.ts
app/
  quick-play/
    page.tsx
    page.test.ts
utils/
  game-logic.ts
  game-logic.test.ts
```

### Alternative: Centralized Tests

Use `__tests__/` folder for integration/e2e tests:

```
__tests__/
  integration/
    user-flows.test.ts
  e2e/
    complete-game.test.ts
```

## Test File Naming Conventions

- **Unit Tests**: `ComponentName.test.ts`
- **Integration Tests**: `feature-name.integration.test.ts`
- **E2E Tests**: `user-journey.e2e.test.ts`
- **Setup/Utils**: `test-utils.ts`, `setup.test.ts`

## Test Structure Template

```typescript
// ComponentName.test.ts
import { render, screen, fireEvent } from "@testing-library/react";
import { ComponentName } from "./ComponentName";

describe("ComponentName", () => {
  // Group related tests
  describe("rendering", () => {
    it("should display the main heading", () => {
      // Arrange
      const props = { title: "Test Title" };

      // Act
      render(<ComponentName {...props} />);

      // Assert
      expect(
        screen.getByRole("heading", { name: /test title/i })
      ).toBeInTheDocument();
    });
  });

  describe("user interactions", () => {
    it("should call onClick handler when button is clicked", () => {
      // Arrange
      const mockOnClick = jest.fn();
      render(<ComponentName onClick={mockOnClick} />);

      // Act
      fireEvent.click(screen.getByRole("button"));

      // Assert
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
```

## TDD Workflow (Red-Green-Refactor)

### 1. RED Phase - Write Failing Test

```typescript
// Start with the simplest failing test
it("should render Quick Play banner", () => {
  render(<QuickPlayBanner />);
  expect(screen.getByText("Quick Play")).toBeInTheDocument();
});
```

### 2. GREEN Phase - Minimal Implementation

```typescript
// Just enough code to pass
export function QuickPlayBanner() {
  return <div>Quick Play</div>;
}
```

### 3. REFACTOR Phase - Improve Code

```typescript
// Enhance while keeping tests green
export function QuickPlayBanner({ className }: { className?: string }) {
  return (
    <div className={`quick-play-banner ${className || ""}`}>
      <h2>Quick Play</h2>
    </div>
  );
}
```

## Test Categories & When to Use

### Unit Tests (Most Common)

- **Test**: Individual components/functions in isolation
- **Mock**: External dependencies
- **Focus**: Single responsibility
- **Example**: Button component renders correctly

### Integration Tests

- **Test**: Multiple components working together
- **Mock**: External APIs only
- **Focus**: Component interaction
- **Example**: Form submission flow

### E2E Tests (Sparingly)

- **Test**: Complete user journeys
- **Mock**: Nothing (use real data)
- **Focus**: Critical user paths
- **Example**: Complete game session

## Testing Best Practices

### ✅ DO

- Write tests before implementation (TDD)
- Test behavior, not implementation details
- Use descriptive test names: `should display error when email is invalid`
- Group related tests with `describe` blocks
- Use Arrange-Act-Assert pattern
- Test edge cases and error conditions
- Keep tests simple and focused

### ❌ DON'T

- Test implementation details (class names, internal state)
- Write overly complex test setup
- Test third-party libraries
- Ignore failing tests
- Write tests after the fact (when doing TDD)

## Common Test Patterns

### Testing Props and Rendering

```typescript
it("should render with custom title", () => {
  render(<Component title="Custom Title" />);
  expect(screen.getByText("Custom Title")).toBeInTheDocument();
});
```

### Testing User Events

```typescript
it("should handle button click", async () => {
  const mockHandler = jest.fn();
  render(<Component onSubmit={mockHandler} />);

  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(mockHandler).toHaveBeenCalled();
});
```

### Testing Async Operations

```typescript
it("should display loading state", async () => {
  render(<AsyncComponent />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Data loaded")).toBeInTheDocument();
  });
});
```

### Testing Error States

```typescript
it("should display error message on failure", async () => {
  const mockFetch = jest.fn().mockRejectedValue(new Error("API Error"));

  render(<Component fetchData={mockFetch} />);

  await waitFor(() => {
    expect(screen.getByText(/error occurred/i)).toBeInTheDocument();
  });
});
```

## Test Data Management

### Use Factories for Complex Objects

```typescript
// test-utils/factories.ts
export const createUser = (overrides = {}) => ({
  id: "1",
  name: "Test User",
  email: "test@example.com",
  ...overrides,
});
```

### Mock External Dependencies

```typescript
// __mocks__/api.ts
export const api = {
  getUser: jest.fn(),
  saveScore: jest.fn(),
};
```

## Running Tests

### Command Reference

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage

# Run specific test file
npm test QuickPlay.test.ts

# Run tests matching pattern
npm test -- --testNamePattern="should render"
```

### Coverage Targets

- **Statements**: 90%+
- **Branches**: 85%+
- **Functions**: 90%+
- **Lines**: 90%+

## Test Organization Tips

1. **Start Small**: Begin with simple rendering tests
2. **Build Up**: Add interaction and edge case tests
3. **Refactor Tests**: Keep them maintainable like production code
4. **Document Weird Cases**: Comment complex test scenarios
5. **Review Together**: Include tests in code reviews

## Quick Reference Checklist

Before writing a test, ask:

- [ ] What specific behavior am I testing?
- [ ] Is this the simplest test that could fail?
- [ ] Am I testing behavior, not implementation?
- [ ] Does the test name clearly describe the expected outcome?
- [ ] Will this test help me catch real bugs?

Remember: **Good tests are your safety net for confident refactoring and feature development.**
