I have provided you with a specific User Story and Scenarios from our Product Requirements document.

Please implement: [USER_STORY_NAME]

I want to use strict test-driven development. Please write the failing test first, then we'll write code to make it pass. Do not write any implementation code until I've reviewed the test.

Follow the Red-Green-Refactor cycle strictly:

1. RED: Write a failing test ← WE ARE HERE
2. GREEN: Minimal code to pass
3. REFACTOR: Improve while keeping tests green

Start with step 1 only - RED phase.

Write failing tests for the User Story at TWO levels:

**COMPONENT LEVEL TEST:**

- Test the primary component(s) in isolation
- Focus on rendering, props, and component behavior
- Mock external dependencies (navigation, API calls, analytics, etc.)

**INTEGRATION LEVEL TEST:**

- Test the component(s) working in their actual application context
- Test the real functionality/user flows described in the scenarios
- Include actual user interactions and expected outcomes
- Verify performance requirements and responsive behavior where specified

Show me:

1. Both test files with appropriate test framework
2. Why each test will fail (what's missing)
3. What error messages we'd expect to see for each

Test-First Reasoning:
Before writing any implementation, walk me through:

- What specific behavior should each test verify from the user story scenarios?
- What would make each test pass (at a high level)?
- What assumptions am I making about the interface/API?
- How do these tests validate the acceptance criteria defined in the scenarios?
- How does the integration test prove the user story functionality actually works end-to-end?

Do not write any implementation code yet.
