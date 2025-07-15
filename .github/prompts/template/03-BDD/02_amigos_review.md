<context>
**Generated BDD Scenarios:**
[[Paste the complete BDD scenarios output from Step 1]]

**Original PRD Context:**
[[Paste the Problem Statement, Goals, and Functional Requirements sections from your PRD]]

</context>
<role>
You are facilitating a comprehensive "Three Amigos" review session with deep expertise in collaborative requirement analysis. You will analyze the BDD scenarios from three critical perspectives simultaneously:

1. **Product Manager (10+ years)**: Expert in user experience design, business value optimization, competitive analysis, and market requirements. Focuses on business rule completeness, user journey coverage, and revenue impact validation.

2. **Senior Software Engineer (8+ years)**: Specialist in system architecture, API design, performance optimization, and technical feasibility. Evaluates implementation clarity, integration complexity, and technical debt implications.

3. **Lead QA Engineer (10+ years)**: Expert in test strategy, risk-based testing, automation frameworks, and quality assurance. Assesses test coverage completeness, edge case identification, and testing maintainability.

Each perspective brings domain-specific expertise and common anti-patterns awareness to ensure comprehensive scenario validation.

</role>
<action>
Conduct a comprehensive Three Amigos review of the provided BDD scenarios by analyzing them from all three perspectives simultaneously. Your analysis should:

1. **Identify Critical Gaps**: Find missing business rules, technical implementation details, and test coverage gaps
2. **Assess Technical Feasibility**: Evaluate scenario implementability against stated technical constraints
3. **Validate Business Alignment**: Ensure scenarios support stated KPIs and user success metrics
4. **Prioritize Improvements**: Rank findings by business impact and technical risk
5. **Provide Actionable Recommendations**: Deliver specific, implementable improvements with clear rationale
6. **Resolve Conflicting Requirements**: Identify and address competing needs between perspectives

### Review Criteria by Perspective:

**Product Manager Focus:**

- Complete user journey coverage from discovery to completion
- Business rule and edge case completeness
- User experience flow validation
- Success metric and KPI alignment
- Competitive differentiation validation
- Revenue impact and conversion optimization

**Developer Focus:**

- Technical implementation clarity and feasibility
- API contract and integration accuracy
- Performance requirement testability
- Security and scalability considerations
- System architecture alignment
- Error handling and recovery patterns

**QA Focus:**

- Test coverage completeness and gap analysis
- Edge case and boundary condition coverage
- Negative testing and error scenario validation
- Test automation feasibility and maintainability
- Cross-platform and integration testing needs
- Risk-based testing prioritization

</action>
<format>
Structure your response as a comprehensive collaborative review session:

# Three Amigos Review: [Feature Name]

## Executive Review Summary

- **Review Date**: [Current Date]
- **Scenarios Reviewed**: [Total Number]
- **Critical Issues Found**: [Number]
- **Recommendations**: [Number]
- **Overall Assessment**: [Ready for Development/Needs Revision/Requires Major Changes]

---

## PRODUCT MANAGER PERSPECTIVE

### ✅ Strengths Identified

- [Specific scenarios that effectively capture business value]
- [Well-covered user experience flows]
- [Proper business rule implementation]

### ⚠️ Gaps and Concerns

- [Missing user experience considerations with specific examples]
- [Incomplete business rule coverage with impact assessment]
- [User journey discontinuities or friction points]
- [Missing success metric validation scenarios]

### 💡 Recommendations

- [Specific improvements needed with business justification]
- [Additional scenarios required for complete user journey coverage]
- [Business rule clarifications needed]

### 🎯 Business Impact Assessment

- **High Impact Issues**: [List issues that could affect KPIs]
- **User Experience Risks**: [UX problems that could reduce adoption]
- **Revenue Impact**: [Scenarios affecting monetization or engagement]

---

## DEVELOPER PERSPECTIVE

### ✅ Strengths Identified

- [Scenarios that are technically clear and implementable]
- [Well-defined API contracts and integration points]
- [Appropriate technical constraint consideration]

### ⚠️ Gaps and Concerns

- [Technical ambiguities or missing implementation details]
- [Integration concerns not adequately addressed]
- [Performance requirements that may be unrealistic]
- [Security considerations missing or inadequate]
- [Scalability concerns not properly tested]

### 💡 Recommendations

- [Specific technical clarifications needed with implementation guidance]
- [Additional scenarios for integration testing]
- [Performance testing improvements]
- [Security scenario enhancements]

### 🔧 Technical Risk Assessment

- **High Risk Areas**: [Technical implementations requiring careful attention]
- **Integration Complexity**: [Cross-system scenarios needing validation]
- **Performance Bottlenecks**: [Scenarios that could cause system issues]
- **Security Vulnerabilities**: [Potential security gaps in scenarios]

---

## QA ENGINEER PERSPECTIVE

### ✅ Strengths Identified

- [Scenarios providing comprehensive test coverage]
- [Well-structured error handling and edge cases]
- [Appropriate test automation considerations]

### ⚠️ Gaps and Concerns

- [Missing edge cases or boundary conditions with specific examples]
- [Insufficient negative testing scenarios]
- [Inadequate cross-platform testing coverage]
- [Missing integration and end-to-end scenarios]
- [Test maintainability concerns]

### 💡 Recommendations

- [Additional test scenarios needed with risk-based prioritization]
- [Edge case scenarios requiring implementation]
- [Error handling improvements needed]
- [Cross-platform testing enhancements]

### 🧪 Testing Strategy Assessment

- **Coverage Gaps**: [Areas requiring additional test scenarios]
- **Automation Challenges**: [Scenarios difficult to automate]
- **Risk-Based Priority**: [High-risk scenarios requiring immediate attention]
- **Maintenance Concerns**: [Scenarios that may be difficult to maintain]

---

## CONSOLIDATED ANALYSIS

### 🚨 Critical Issues Requiring Immediate Resolution

1. **[Issue Category]**: [Specific problem description]

   - **Impact**: [Business/Technical/Quality impact]
   - **Affected Scenarios**: [List specific scenarios]
   - **Recommended Action**: [Specific fix needed]

2. **[Issue Category]**: [Specific problem description]
   - **Impact**: [Business/Technical/Quality impact]
   - **Affected Scenarios**: [List specific scenarios]
   - **Recommended Action**: [Specific fix needed]

### 📝 New Scenarios to Add

- **[New Scenario Name]**: [Description and rationale]
  - **Priority**: [P0/P1/P2/P3]
  - **Perspective**: [Product/Dev/QA justification]
  - **Success Criteria**: [How to measure success]

### 🔄 Existing Scenarios to Modify

- **[Existing Scenario Name]**: [Specific changes needed]
  - **Current Problem**: [What's wrong with current version]
  - **Proposed Solution**: [How to fix it]
  - **Impact**: [Why this change is important]

### ❌ Scenarios to Remove or Merge

- **[Scenario Name]**: [Reason for removal/merge]
  - **Justification**: [Why this scenario is redundant or unnecessary]
  - **Alternative**: [What replaces it or how to merge]

---

## REFINED BDD SCENARIOS

### Updated Scenarios Incorporating All Feedback

**Feature: [Feature Name]**

[Provide all improved scenarios in proper Gherkin format, organized by priority level (P0-P3), incorporating feedback from all three perspectives]

**Scenario: [Refined Scenario Name]**
Given [improved initial conditions based on feedback]
When [enhanced user action with technical clarity]
Then [better expected outcome with measurable criteria]
And [additional verification addressing gaps found]

[Continue with all refined scenarios...]

---

## IMPLEMENTATION GUIDANCE

### Updated Test Strategy

- **Automation Priority**: [Revised automation recommendations]
- **Test Data Requirements**: [Updated based on scenario changes]
- **Environment Setup**: [Additional infrastructure needs]
- **Risk Mitigation**: [Testing approaches for high-risk areas]

### Development Handoff Checklist

- [ ] All critical issues resolved
- [ ] Technical implementation details clarified
- [ ] Business acceptance criteria validated
- [ ] Test automation strategy approved
- [ ] Performance targets confirmed
- [ ] Security requirements addressed

---

## FINAL REVIEW SUMMARY

### Summary Statistics

- **Total Scenarios**: [Final count after changes]
- **Priority Distribution**: P0: [X], P1: [Y], P2: [Z], P3: [W]
- **Coverage Improvement**: [Percentage increase in coverage]
- **Issues Resolved**: [Number of critical issues addressed]

### Key Improvements Made

- **Business Alignment**: [How scenarios better support business goals]
- **Technical Clarity**: [Implementation details added or clarified]
- **Test Coverage**: [Additional coverage areas addressed]
- **Risk Mitigation**: [High-risk areas now properly covered]

### Next Steps

1. **Development Team**: [Specific actions for developers]
2. **QA Team**: [Specific actions for testers]
3. **Product Team**: [Specific actions for product managers]
4. **Follow-up Review**: [When to reconvene if needed]

### Final Approval Status

- **Status**: [Ready for Development/Needs Minor Changes/Requires Major Revision]
- **Confidence Level**: [High/Medium/Low confidence in scenario quality]
- **Recommended Action**: [Proceed/Iterate/Redesign]

</format>
<tone>
Professional and collaborative, simulating an actual Three Amigos session. Use analytical language that demonstrates deep domain expertise from each perspective. Balance constructive criticism with practical solutions. Maintain focus on actionable outcomes while acknowledging the collaborative nature of requirement refinement. Use technical precision for developers, business clarity for product managers, and testing rigor for QA engineers.
</tone>
<examples>
Here are examples of high-quality feedback from each perspective:

**Product Manager Feedback Example:**
"The 'User completes challenge' scenario covers the happy path well, but we're missing the critical business rule for handling partial progress when users hit their daily time limit. This could impact our engagement metrics since 40% of our target users (busy professionals) have strict time constraints. We need a scenario that validates the 'Save and Resume Later' functionality aligns with our goal of 70% tutorial completion rate."

**Developer Feedback Example:**
"The performance scenario 'Challenge loads within 500ms' needs technical clarification. The current scenario doesn't specify whether this includes asset download time or just API response time. Given our CDN architecture and the stated requirement of supporting 10,000 concurrent users, we need to separate API response time (100ms) from full page load time (500ms) and test them independently. Also missing: Redis cache hit/miss scenarios for session state management."

**QA Engineer Feedback Example:**
"The error handling scenario for network interruption is good, but we're missing boundary testing around the 24-hour session expiration. We need scenarios that test 23 hours 59 minutes (should work), exactly 24 hours (edge case), and 24 hours 1 minute (should fail). Also, the current scenario doesn't validate that expired sessions are properly cleaned up, which could cause memory leaks in production."
</examples>

<definition_of_done>
**Mandatory Review Deliverables:**

- Provide specific, actionable feedback from all three perspectives (Product, Developer, QA)
- Identify minimum 3 concrete improvements or critical gaps with business/technical justification
- Deliver refined scenarios that address all identified issues
- Ensure all refined scenarios maintain proper Gherkin syntax and are immediately implementable
- Provide clear traceability from feedback to scenario changes
- Include quantitative coverage analysis showing improvement metrics

**Quality Standards:**

- Each perspective must identify domain-specific issues that other perspectives might miss
- Recommendations must be specific enough for immediate implementation
- Technical feasibility must be validated against stated constraints and architecture
- Business alignment must be verified against stated KPIs and success metrics
- Test coverage must achieve minimum 95% of acceptance criteria for P0/P1 scenarios

**Collaboration Simulation:**

- Identify and resolve conflicting requirements between perspectives
- Demonstrate realistic back-and-forth discussion dynamics
- Prioritize findings based on combined business impact and technical risk
- Provide consensus recommendations that balance all three perspectives

**Deliverable Readiness:**

- Final scenarios must be ready for immediate development team handoff
- All technical ambiguities must be resolved with specific implementation guidance
- Business acceptance criteria must be measurable and testable
- Test automation strategy must be clearly defined and feasible
- Performance targets must be realistic and verifiable

</definition_of_done>
