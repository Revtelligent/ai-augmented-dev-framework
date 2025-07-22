# AI-Assisted Code Review Guide

## Review Context & Scope

### Project Information

- **Stack**: TypeScript, Next.js 14+ (App Router), Prisma ORM
- **Testing**: Jest (unit), Playwright (E2E)
- **Purpose**: Multiplayer mind game application

### Architecture Overview

[Project Structure](work/project_structure.md)

### Review Scope

- **Specific files/folders**: [If provided by user]
- **Entire codebase**: [If no specific scope given]
- **Feature/PR context**: [User story or requirements]

## Pre-Review Checklist

Before starting, gather:

- [ ] User stories or feature requirements
- [ ] Architecture documentation or diagrams
- [ ] Team coding standards (naming, structure, patterns)
- [ ] Security requirements for this feature
- [ ] Related PRs or previous implementations

## Critical Rule: Verify Before Flagging

**Always verify imports, file paths, and dependencies exist in the workspace before reporting issues. State "Cannot verify X" when uncertain.**

## Comprehensive Review Areas

### 1. Security & Vulnerability Assessment

**Check for:**

- **Injection Attacks**:
  - SQL injection in raw Prisma queries
  - NoSQL injection in dynamic queries
  - Command injection in system calls
- **XSS Prevention**:
  - React dangerouslySetInnerHTML usage
  - User-generated content sanitization
  - URL parameter handling
- **Authentication & Authorization**:
  - JWT validation and expiration
  - Session management security
  - Role-based access control (RBAC)
  - Timing attack vulnerabilities
- **Game-Specific Security**:
  - Move validation and anti-cheat measures
  - Replay attack prevention
  - Rate limiting for game actions
- **Data Protection**:
  - Sensitive data exposure in client components
  - Proper encryption for PII
  - Secure cookie settings
- **Dependencies**:
  - Known vulnerabilities in npm packages
  - Outdated security-critical libraries

**AI Prompt Example**:
"Analyze this authentication flow for timing attacks, JWT vulnerabilities, and session fixation. Check if rate limiting is properly implemented."

### 2. Architecture & Design Patterns

**Evaluate:**

- **Next.js Architecture**:
  - Server/Client component boundaries
  - App Router conventions and structure
  - API route design and typing
  - Middleware usage and placement
- **System Architecture**:
  - Separation of concerns (presentation/business/data)
  - Service layer abstraction
  - Domain model integrity
  - Dependency injection patterns
- **Design Patterns**:
  - Appropriate pattern usage (Factory, Observer, Strategy)
  - Over-engineering vs under-engineering
  - SOLID principles adherence
- **Code Organization**:
  - Module boundaries and interfaces
  - Shared utilities placement
  - Configuration management

**AI Prompt Example**:
"Review this feature implementation against hexagonal architecture principles. Verify proper separation between domain logic and infrastructure concerns."

### 3. Business Logic & Requirements Validation

**Verify:**

- **Requirement Completeness**:
  - All acceptance criteria met
  - Edge cases handled
  - Error scenarios covered
- **Game Logic Integrity**:
  - State transitions validity
  - Rule enforcement consistency
  - Multiplayer synchronization
- **Data Validation**:
  - Input constraints per business rules
  - Output format compliance
  - Workflow state management

**AI Prompt Example**:
"This code implements [feature]. Verify it correctly handles: [list all requirements]. Identify any missing edge cases or business rule violations."

### 4. Code Quality & Maintainability

**Assess:**

- **TypeScript Usage**:
  - No `any` types without justification
  - Proper generic usage
  - Interface vs type consistency
  - Strict null checks
- **Code Structure**:
  - Function complexity (cyclomatic complexity < 10)
  - DRY principle adherence
  - Clear naming conventions
  - Single responsibility principle
- **Error Handling**:
  - Consistent error patterns
  - Proper error boundaries
  - Logging strategy
  - User-friendly error messages
- **Documentation**:
  - Complex logic explanation
  - API documentation
  - Type documentation
  - README updates

**AI Prompt Example**:
"Evaluate this code for maintainability issues. Flag functions with cyclomatic complexity > 10, unclear naming, or missing error handling."

### 5. Performance & Optimization

**Analyze:**

- **Database Performance**:
  - Prisma query optimization (N+1 prevention)
  - Proper use of includes/select
  - Index usage verification
  - Connection pooling configuration
- **Frontend Performance**:
  - Bundle size impact
  - Code splitting effectiveness
  - Image optimization
  - Lazy loading implementation
- **Caching Strategy**:
  - Redis usage patterns
  - Next.js cache configuration
  - Cache invalidation logic
  - CDN optimization
- **Memory Management**:
  - Memory leak potential
  - Event listener cleanup
  - WebSocket connection handling

**AI Prompt Example**:
"Analyze these Prisma queries for N+1 problems. Suggest optimizations for handling 10K concurrent users with sub-100ms response times."

### 6. Testing & Quality Assurance

**Review:**

- **Test Coverage**:
  - Unit tests for business logic
  - Integration tests for APIs
  - E2E tests for critical paths
  - Edge case coverage
- **Test Quality**:
  - Test isolation and independence
  - Mock usage appropriateness
  - Assertion completeness
  - Test maintainability
- **Accessibility**:
  - WCAG 2.1 AA compliance
  - Keyboard navigation
  - Screen reader compatibility
  - Color contrast ratios

**AI Prompt Example**:
"Review test coverage for this feature. Identify missing test cases, especially for error scenarios and edge cases."

### 7. Long-term Considerations

**Evaluate:**

- **Technical Debt**:
  - Areas accumulating complexity
  - Temporary solutions needing refactor
  - Documentation debt
- **Scalability**:
  - Code that won't scale to 10x load
  - Database schema limitations
  - Architecture bottlenecks
- **Maintainability**:
  - Code resistant to testing
  - Tight coupling issues
  - Migration difficulties
- **Team Velocity**:
  - Onboarding complexity
  - Knowledge silos
  - Debugging difficulty

## Output Format

### 🔴 Critical Issues (Must fix before merge)

Issue: [Specific security/data loss/crash issue]
Location: [File:Lines]
Impact: [User/Business impact]
Fix: [Specific solution with code example]

### 🟡 Major Concerns (Should address)

Current: [What exists now]
Location: [File:Lines]
Better: [Recommended approach]
Reason: [Technical/Business justification]
Example: [Code snippet if applicable]

### 🟢 Minor Suggestions (Nice to have)

Suggestion: [Improvement opportunity]
Location: [File:Lines]
Benefit: [Why it improves the codebase]
Priority: [Now/Next Sprint/Backlog]

### 📊 Overall Assessment

**Production Readiness**: [Score 1-10 with justification]

**Top 3 Priorities**:

1. [Most critical issue]
2. [Second priority]
3. [Third priority]

**Recommended Actions**:

- Immediate: [What to fix now]
- Next Sprint: [What to plan for]
- Long-term: [Architecture/refactoring needs]

## Review Quality Checklist

Before submitting review:

- [ ] All critical security vulnerabilities identified
- [ ] Business requirements validated against implementation
- [ ] Performance implications analyzed
- [ ] Test coverage gaps identified
- [ ] Architectural alignment verified
- [ ] File paths and imports verified to exist
- [ ] Positive feedback included for good patterns
- [ ] Actionable fixes provided for all issues
