Now that all tests are passing, let's move to the REFACTOR phase.

Follow the Red-Green-Refactor cycle:

1. RED: Write failing tests ← COMPLETED
2. GREEN: Minimal code to pass all tests ← COMPLETED
3. REFACTOR: Improve while keeping tests green ← WE ARE HERE

REFACTOR Phase Instructions:

Review the original User Story [USER_STORY] and current implementation. ONLY make improvements that provide clear value.

**FIRST - VALIDATE USER STORY:**

- Does the implementation fully satisfy all acceptance criteria from the User Story?
- Are performance requirements met (e.g., loading times, responsiveness)?
- Does the user experience match what's described in the scenarios?

**ONLY REFACTOR IF:**

- Code is duplicated and extraction would genuinely simplify maintenance
- Names are confusing or misleading
- There are obvious performance issues affecting User Story requirements
- Error handling is missing for critical user flows
- Code violates established project patterns

**AVOID:**

- Over-abstracting simple code
- Creating unnecessary utilities
- Premature optimization
- Complex patterns for simple problems

Show me:

1. User Story validation - are all requirements met?
2. What specific problems you identified (if any)
3. Refactored code files (only if improvements are warranted)
4. Justification for each change made
5. Confirmation that all tests still pass

If the code already meets the User Story and is clean, just confirm "No refactoring needed - implementation fully satisfies User Story requirements."
