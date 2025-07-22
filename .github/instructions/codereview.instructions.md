# Code Review Instructions

## What to Review

- **Specific files/folders**: If provided by user
- **Entire codebase**: If no specific scope given

## Context

- **Stack**: TypeScript, Next.js 14+ (App Router), Prisma ORM
- **Testing**: Jest (unit), Playwright (E2E)
- **Purpose**: Multiplayer mind game application
- **Performance target**: Sub-100ms database queries

## Critical Rule: Verify Before Flagging

**Always verify imports and file paths exist in the workspace before reporting issues.**

## Review Areas

### 1. Security & Data Protection

- Input validation and sanitization (XSS, injection prevention)
- Authentication and authorization implementation
- API route protection and rate limiting
- Environment variable management and secrets handling
- CSRF protection and secure headers
- Sensitive data exposure in client components

### 2. Architecture & Next.js

- Server/Client component usage and data flow
- App Router structure and file conventions
- API route design, typing, and error handling
- Caching strategy (Redis, Next.js cache, revalidation)
- Bundle optimization and code splitting
- CSS organization and globals.css structure
- Custom CSS classes and their usage in components

### 3. Code Quality & Maintainability

- TypeScript usage (avoid `any`, proper typing, generics)
- Error handling patterns and logging
- Component reusability and composition
- SOLID/DRY/KISS principles adherence
- Code readability and documentation

### 4. Performance & Database

- Prisma schema design and relationships
- Query optimization (avoid N+1, use includes/select)
- Database connection pooling and timeouts
- Client-side performance (Core Web Vitals)
- Memory leaks and resource management

### 5. Testing & Quality Assurance

- Unit test coverage for business logic
- Integration tests for API routes
- E2E coverage for critical user journeys
- Edge case handling and error scenarios
- Accessibility compliance (WCAG guidelines)

## Output Format

### Critical Issues (fix before production)

- **Issue**: Description with impact
- **Location**: File path and lines
- **Fix**: Specific solution with code example

### Major Concerns (should address)

- **Current**: What exists now
- **Better**: Recommended approach
- **Why**: Business/technical benefit

### Minor Suggestions (nice to have)

- **Suggestion**: Improvement opportunity
- **Benefit**: Why it matters

### Positive Observations

- What works well
- Good patterns to continue

### Overall Assessment

- Production readiness score (1-10)
- Top 3 priorities
- Next steps

## Review Checklist

Before submitting, verify you've checked:

### Security & Safety

- [ ] Input validation and sanitization
- [ ] Authentication/authorization logic
- [ ] Sensitive data handling
- [ ] API route protection
- [ ] Environment variables usage

### Code Quality

- [ ] TypeScript typing (no `any`)
- [ ] Error handling patterns
- [ ] Code duplication opportunities
- [ ] Naming conventions
- [ ] Component composition
- [ ] CSS class references exist in globals.css or modules

### Performance

- [ ] Database query efficiency
- [ ] Bundle size impact
- [ ] Memory leak potential
- [ ] Caching strategy
- [ ] Core Web Vitals impact

### Testing & Accessibility

- [ ] Test coverage gaps
- [ ] Edge case handling
- [ ] WCAG compliance
- [ ] Error scenarios
- [ ] Integration points

## Quality Check

Before submitting:

- [ ] All file references verified against workspace
- [ ] Import paths confirmed to exist
- [ ] Cross-referenced related files for patterns
- [ ] Stated "Cannot verify X" when uncertain
