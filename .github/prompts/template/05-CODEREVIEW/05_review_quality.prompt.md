---
mode: "agent"
description: "Review code quality and maintainability"
---

# Code Quality & Maintainability Review

## Context

You are reviewing the code quality and maintainability of a TypeScript/Next.js 14+ multiplayer mind game application. Focus on code clarity, consistency, error handling, and long-term maintainability factors.

## Review Instructions

### Before Starting

- [ ] Review team coding standards and conventions
- [ ] Understand the project's TypeScript configuration
- [ ] Check existing documentation standards
- [ ] Identify critical code paths and complex logic

### Code Quality Assessment Areas

#### 1. TypeScript Usage Excellence

**Type Safety:**

- Eliminate `any` types (require justification if used)
- Proper generic usage and constraints
- Consistent interface vs type usage
- Strict null checks enabled and respected
- Proper union and intersection types

**Type Definitions:**

- Clear and descriptive type names
- Proper use of utility types (Pick, Omit, etc.)
- Appropriate use of literal types
- Consistent naming conventions for types
- Proper type guards and narrowing

**Advanced TypeScript:**

- Conditional types where appropriate
- Mapped types for transformations
- Template literal types for string validation
- Proper module declaration and ambient types

#### 2. Code Structure and Organization

**Function Design:**

- Single responsibility principle
- Cyclomatic complexity < 10
- Pure functions where possible
- Clear input/output contracts
- Appropriate function length (< 50 lines typically)

**Naming Conventions:**

- Descriptive and unambiguous names
- Consistent naming patterns
- Boolean variables start with is/has/can/should
- Function names are verbs
- Constants in UPPER_CASE

**Code Organization:**

- Logical file and folder structure
- Related functionality grouped together
- Clear import/export patterns
- Consistent file naming conventions
- Appropriate use of barrel exports

#### 3. Error Handling Strategy

**Error Patterns:**

- Consistent error handling approach
- Proper error types and hierarchies
- Meaningful error messages
- Appropriate error logging
- Graceful degradation strategies

**Error Boundaries:**

- React error boundaries for UI errors
- API error handling patterns
- Database error handling
- Network error recovery
- User-friendly error messages

**Validation and Guards:**

- Input validation at boundaries
- Runtime type checking where needed
- Defensive programming practices
- Proper null/undefined checks
- Schema validation for external data

#### 4. Documentation and Comments

**Code Documentation:**

- Complex business logic explained
- Non-obvious code patterns documented
- API documentation with examples
- Type documentation for complex types
- README and setup instructions updated

**Comment Quality:**

- Explains "why" not "what"
- Up-to-date and accurate
- No commented-out code blocks
- Clear TODO comments with context
- JSDoc comments for public APIs

#### 5. DRY Principle and Reusability

**Code Duplication:**

- Identify repeated logic patterns
- Extract common functionality
- Create reusable utility functions
- Proper abstraction levels
- Avoid premature optimization

**Reusable Components:**

- Generic, configurable components
- Proper prop interfaces
- Default values and optional props
- Composable design patterns
- Clear component responsibilities

#### 6. Consistency and Standards

**Coding Style:**

- Consistent formatting (Prettier)
- Linting rules followed (ESLint)
- Consistent import ordering
- Standardized file structure
- Consistent naming across codebase

**React/Next.js Patterns:**

- Consistent component patterns
- Proper hook usage
- Server/client component consistency
- Standardized data fetching patterns
- Consistent styling approach

## Output Format

### ✅ Code Quality Strengths

**Good Practice**: [Well-implemented code quality aspect]
**Location**: [File:Lines]
**Why It Works**: [Explanation of the good practice]
**Impact**: [How it improves maintainability]

### 🔴 Critical Code Quality Issues

**Issue**: [Major code quality problem]
**Location**: [File:Lines]
**Problem**: [Why this is problematic]
**Impact**: [Effect on maintainability/reliability]
**Fix**: [Specific solution with code example]

### 🟡 Code Improvement Opportunities

**Current Approach**: [How something is currently implemented]
**Location**: [File:Lines]
**Better Approach**: [Recommended improvement]
**Benefit**: [Why the change is beneficial]
**Example**: [Code snippet showing improvement]

### 📝 Documentation Gaps

**Missing Documentation**: [What needs documentation]
**Location**: [File/Feature]
**Importance**: [Why documentation is needed]
**Suggestion**: [What should be documented]

### 🔄 DRY Violations

**Repeated Code**: [Pattern that's duplicated]
**Locations**: [Where duplication occurs]
**Abstraction**: [How to eliminate duplication]
**Benefit**: [Maintenance improvement]

### 🚨 TypeScript Issues

**Type Problem**: [Specific TypeScript issue]
**Location**: [File:Lines]
**Current Type**: [How it's typed now]
**Better Typing**: [Improved type definition]
**Safety Benefit**: [How it improves type safety]

## Specific Quality Checks

### Function Complexity Analysis

```typescript
// Check for functions like this - too complex:
function complexGameLogic(state, action, players, rules) {
  // > 50 lines of nested if/else
  // Multiple responsibilities
  // Hard to test
}

// Prefer this approach:
function processGameAction(state: GameState, action: GameAction): GameState {
  validateAction(action, state);
  return applyAction(state, action);
}
```

### Error Handling Patterns

```typescript
// Check for proper error handling:
try {
  await riskyOperation();
} catch (error) {
  // Proper error logging
  logger.error("Operation failed", { error, context });
  // User-friendly error
  throw new GameError("Move validation failed", { cause: error });
}
```

### Type Safety Examples

```typescript
// Look for type improvements:
interface GameMove {
  playerId: string;
  moveType: "place" | "remove" | "move";
  position: { x: number; y: number };
  timestamp: Date;
}

// Instead of:
interface GameMove {
  playerId: any;
  moveType: string;
  position: any;
  timestamp: any;
}
```

## Review Questions

### Code Quality Questions

1. **Readability**: Can a new team member understand this code?
2. **Maintainability**: How easy is it to modify this code?
3. **Testability**: Are the functions easy to unit test?
4. **Consistency**: Does the code follow established patterns?
5. **Error Resilience**: How well does the code handle unexpected situations?

### TypeScript Questions

1. **Type Coverage**: Are all functions and variables properly typed?
2. **Type Safety**: Does the type system prevent common errors?
3. **Type Clarity**: Do the types clearly communicate intent?
4. **Type Reuse**: Are common types properly shared and reused?

### Documentation Questions

1. **Completeness**: Is all necessary information documented?
2. **Accuracy**: Is the documentation up-to-date?
3. **Clarity**: Is the documentation clear and helpful?
4. **Accessibility**: Can new developers find and understand the docs?

## Action Items Template

### Immediate Quality Fixes

- [Critical type safety issues]
- [Major error handling problems]
- [Severe code duplication]

### Code Improvement Tasks

- [Function complexity reduction]
- [Documentation additions]
- [Naming consistency improvements]

### Long-term Quality Goals

- [Type system improvements]
- [Architectural refactoring for maintainability]
- [Documentation strategy enhancement]

---

**Quality Focus**: Write code that your future self (and teammates) will thank you for.
