---
mode: "agent"
description: "Review architecture and design patterns"
---

# Architecture & Design Patterns Review

## Context

You are reviewing the architecture and design patterns of a TypeScript/Next.js 14+ multiplayer mind game application. Focus on evaluating architectural decisions, design pattern usage, and overall system structure for maintainability and scalability.

## Review Instructions

### Before Starting

- [ ] Understand the overall system architecture
- [ ] Review the project structure and module organization
- [ ] Identify key architectural decisions and patterns used
- [ ] Consider the application's scalability requirements

### Architecture Assessment Areas

#### 1. Next.js Architecture Compliance

**App Router Structure:**

- Verify proper use of App Router conventions
- Check for correct page/layout hierarchy
- Validate route grouping and organization
- Review nested layouts implementation

**Server/Client Component Boundaries:**

- Identify components that should be server components
- Verify proper client component usage (interactive elements)
- Check for unnecessary client-side hydration
- Validate data fetching patterns

**API Route Design:**

- Review RESTful design principles
- Check for proper HTTP method usage
- Validate request/response typing
- Assess error handling consistency

**Middleware Usage:**

- Verify appropriate middleware placement
- Check for performance impact
- Validate security middleware implementation
- Review request/response modification logic

#### 2. System Architecture Evaluation

**Separation of Concerns:**

- **Presentation Layer**: UI components and user interaction
- **Business Logic Layer**: Game rules and application logic
- **Data Access Layer**: Database operations and external APIs
- Verify clean boundaries between layers

**Service Layer Abstraction:**

- Check for proper service encapsulation
- Validate business logic isolation
- Review data transformation logic
- Assess external dependency abstraction

**Domain Model Integrity:**

- Verify proper entity modeling
- Check for anemic vs rich domain models
- Validate business rule enforcement location
- Review aggregate boundaries

#### 3. Design Pattern Implementation

**Appropriate Pattern Usage:**

- **Factory Pattern**: For object creation complexity
- **Observer Pattern**: For event-driven game updates
- **Strategy Pattern**: For different game algorithms
- **Repository Pattern**: For data access abstraction
- **Command Pattern**: For game actions/undo functionality

**Pattern Anti-Patterns:**

- Over-engineering with unnecessary patterns
- Incorrect pattern implementation
- Missing patterns where they would add value
- Inconsistent pattern usage across codebase

#### 4. Code Organization Structure

**Module Boundaries:**

- Clear interface definitions between modules
- Proper dependency direction (high-level → low-level)
- Minimal coupling between unrelated modules
- Cohesive module responsibilities

**Shared Utilities:**

- Appropriate utility function placement
- Avoid utility bloat and god objects
- Clear naming and single responsibility
- Proper typing and documentation

**Configuration Management:**

- Environment-specific configurations
- Feature flags implementation
- Database connection management
- External service configuration

#### 5. SOLID Principles Assessment

**Single Responsibility Principle:**

- Each class/module has one reason to change
- Functions do one thing well
- Clear component responsibilities

**Open/Closed Principle:**

- Code open for extension, closed for modification
- Proper use of interfaces and abstract classes
- Plugin architecture where appropriate

**Liskov Substitution Principle:**

- Subtypes are substitutable for their base types
- Interface implementations are consistent
- No surprising behavior in derived classes

**Interface Segregation Principle:**

- Clients don't depend on interfaces they don't use
- Small, focused interfaces
- Role-based interface design

**Dependency Inversion Principle:**

- High-level modules don't depend on low-level modules
- Both depend on abstractions
- Proper dependency injection usage

## Output Format

### 🏗️ Architectural Strengths

**Good Decision**: [Well-implemented architectural choice]
**Location**: [File/Module]
**Benefit**: [Why this works well]
**Impact**: [Positive effect on maintainability/scalability]

### 🔧 Architectural Issues

**Problem**: [Architectural issue or violation]
**Location**: [File/Module]
**Current State**: [How it's implemented now]
**Issue**: [Why this is problematic]
**Recommendation**: [Better architectural approach]
**Refactoring Effort**: [Estimation of change complexity]

### 📐 Design Pattern Concerns

**Pattern**: [Missing or misused pattern]
**Location**: [Where the issue exists]
**Current Approach**: [How it's done now]
**Better Pattern**: [Recommended pattern]
**Example**: [Code example of proper implementation]
**Benefit**: [Why the pattern improves the design]

### 🏛️ Structural Improvements

**Area**: [Module/Layer organization issue]
**Current Structure**: [How it's organized now]
**Problems**: [Issues with current structure]
**Recommended Structure**: [Better organization]
**Migration Path**: [Steps to improve structure]

### 🔄 Dependency Issues

**Issue**: [Circular dependency or coupling problem]
**Location**: [Files involved]
**Problem**: [Why this creates issues]
**Solution**: [How to break the dependency]
**Pattern**: [Design pattern that could help]

## Review Questions

### Architecture Questions

1. **Scalability**: Will this architecture handle 10x the current load?
2. **Maintainability**: How easy is it to add new features?
3. **Testability**: Are components easily testable in isolation?
4. **Flexibility**: How well does it adapt to changing requirements?

### Design Questions

1. **Consistency**: Are similar problems solved in similar ways?
2. **Simplicity**: Is the design as simple as possible but not simpler?
3. **Reusability**: Are components designed for reuse?
4. **Coupling**: Are components loosely coupled and highly cohesive?

### Next.js Specific Questions

1. **Performance**: Are server components used effectively?
2. **SEO**: Is the application properly optimized for search engines?
3. **Caching**: Is the caching strategy appropriate?
4. **Bundle Size**: Are client bundles optimized?

## Action Items Template

### Immediate Architectural Fixes

- [Critical architectural violations]
- [Performance-impacting structural issues]

### Design Improvements

- [Pattern implementations that would improve code quality]
- [Structural changes for better organization]

### Long-term Architectural Goals

- [Major refactoring opportunities]
- [Architectural evolution recommendations]

---

**Architecture Focus**: Ensure the system is built for change, growth, and long-term maintainability.
