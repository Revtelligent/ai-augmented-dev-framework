---
mode: "ask"
description: "Review business logic and requirements validation"
---

# Business Logic & Requirements Validation Review

## Context

You are reviewing a TypeScript/Next.js 14+ multiplayer mind game application. The feature has been implemented using TDD and all tests are passing. Focus on validating that the implementation meets business requirements and handles all necessary scenarios.

## Review Instructions

### Before Starting

- [ ] Identify the user story or feature requirements
- [ ] Understand the business context and rules
- [ ] Review any acceptance criteria provided

### Critical Areas to Evaluate

#### 1. Requirement Completeness

**Check each requirement against implementation:**

- Are all acceptance criteria fully implemented?
- Do the implemented features match the specified behavior?
- Are there any missing features or partial implementations?

#### 2. Business Rule Enforcement

**For game logic specifically:**

- Are game rules correctly implemented and enforced?
- Do state transitions follow the defined game mechanics?
- Is multiplayer synchronization maintaining game integrity?
- Are turn-based mechanics properly validated?

#### 3. Edge Cases and Scenarios

**Verify handling of:**

- Boundary conditions (min/max values, empty states)
- Invalid user inputs and malformed data
- Race conditions in multiplayer scenarios
- Network disconnection and reconnection
- Timeout scenarios
- Concurrent user actions

#### 4. Data Validation

**Ensure proper validation of:**

- Input constraints match business rules
- Output formats comply with specifications
- Workflow state management follows defined processes
- Data integrity across operations

#### 5. Error Scenarios

**Confirm appropriate handling of:**

- Business rule violations
- Invalid game moves or actions
- System errors that affect user experience
- Graceful degradation scenarios

## Output Format

### ✅ Requirements Met

- [List successfully implemented requirements]
- [Note any particularly well-handled edge cases]

### ❌ Missing or Incomplete Requirements

**Issue**: [Specific requirement not met]
**Location**: [File:Lines]
**Expected**: [What should happen according to requirements]
**Current**: [What actually happens]
**Impact**: [Effect on user/business]

### ⚠️ Edge Cases Not Handled

**Scenario**: [Specific edge case]
**Location**: [File:Lines]
**Risk**: [What could go wrong]
**Recommendation**: [How to handle it]

### 🎯 Business Logic Concerns

**Issue**: [Logic that doesn't align with business rules]
**Location**: [File:Lines]
**Business Rule**: [The actual rule]
**Implementation**: [How it's currently coded]
**Fix**: [Recommended correction]

### 📋 Validation Gaps

**Data/Input**: [What needs better validation]
**Location**: [File:Lines]
**Current Validation**: [What exists now]
**Required Validation**: [What should be added]
**Business Justification**: [Why it's needed]

## Review Questions to Ask

1. **Completeness**: Does this implementation deliver everything the user/business expects?
2. **Correctness**: Are the business rules correctly translated into code?
3. **Robustness**: How does it handle unexpected but possible scenarios?
4. **User Experience**: Does the implementation match the intended user journey?
5. **Data Integrity**: Are business constraints properly enforced at the code level?

## Action Items Template

### Immediate Fixes Required

- [Critical business logic errors]

### Clarification Needed

- [Requirements that are ambiguous or unclear]

### Enhancements Recommended

- [Additional validations or edge case handling]

---

**Review Focus**: Ensure the code does what the business actually needs, not just what the tests verify.
