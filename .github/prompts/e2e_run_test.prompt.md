---
mode: "agent"
description: "Run E2E visual validation tests for a specific feature and analyze results."
---

Now let's run the E2E visual validation tests and analyze the results.

**EXECUTION PHASE:**

1. Run the Playwright E2E tests:
   npx playwright test e2e/${input:feature-name}.spec.ts --headed

2. After the tests complete, examine the results:
   - Review the test output for any failures
   - Check the generated screenshots in the screenshots/ folder
   - Note any console errors or warnings

**ANALYSIS PHASE:**

Based on the test results and screenshots, provide:

1. **Test Results Summary:**

   - Which tests passed/failed
   - Any performance issues found
   - Accessibility problems detected

2. **Visual Analysis:**

   - Does the component appear correctly across all viewports?
   - Is the layout as expected from the User Story?
   - Are there any visual bugs or positioning issues?
   - Does the component look professional and workplace-appropriate?

3. **User Story Validation:**

   - Are all acceptance criteria from the original User Story met?
   - Does the actual implementation match the scenarios described?
   - Any gaps between expected and actual behavior?

4. **Issues Found:**
   - List any specific problems discovered
   - Prioritize critical vs. minor issues
   - Suggest follow-up actions needed

**DELIVERABLES:**

- Test execution report
- Screenshot analysis
- List of issues requiring fixes
- Confirmation of User Story fulfillment

Upload screenshots if analysis reveals visual issues that need attention.
