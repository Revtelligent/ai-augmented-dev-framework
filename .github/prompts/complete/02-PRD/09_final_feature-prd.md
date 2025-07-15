<context>

**Step 1 Output - PRD Foundation:**
[[Paste the Problem Statement, Proposed Solution Overview, and Goals from Step 1]]

**Step 2 Output - User Stories:**
[[Paste all user stories and acceptance criteria from Step 2]]

**Step 3 Output - Product Risk Analysis:**
[[Paste the key risks and recommended actions from Step 3]]

**Step 4 Output - Functional Requirements:**
[[Paste the functional requirements and out-of-scope items from Step 4]]

**Step 5 Output - Design & NFRs:**
[[Paste the design considerations and non-functional requirements from Step 5]]

**Step 6 Output - Technical Risk Analysis:**
[[Paste the technical risks and implementation readiness assessment from Step 6]]

**Step 7 Output - Data Model:**
[[Paste the logical data model and SQL DDL from Step 7]]

**Current Step Output - API Endpoints:**
[[Paste the API endpoint definitions from the current step]]

</context>

<role>
You are a Principal Product Manager responsible for creating the final, authoritative Product Requirements Document that will guide the entire development process.
</role>

<action>
Synthesize all provided outputs into a single, comprehensive PRD document. Integrate the technical specifications (data model and API endpoints) into appropriate sections, resolve any conflicts between steps, and ensure the document flows logically from problem to solution to implementation.

### Integration Guidelines:

- Incorporate risk mitigation strategies from Steps 3 and 6 into relevant sections
- Ensure user stories align with functional requirements and technical specifications
- Add executive summary and project timeline sections
- Include technical appendices for data model and API specifications
- Resolve any scope or requirement conflicts identified across steps

</action>

<format>
Create a complete PRD document using this structure:

# Product Requirements Document: [Feature Name]

## Executive Summary

- **Project Overview:** [2-3 sentences summarizing the feature and its value]
- **Success Metrics:** [Key KPIs from Step 1]
- **Timeline:** [Development timeline and key milestones]

## 1. Problem Statement

[From Step 1, refined based on risk analysis]

## 2. Proposed Solution

[From Step 1, enhanced with technical feasibility insights]

## 3. Goals and Success Metrics

[From Step 1, validated against risk analysis]

## 4. Target User and Use Cases

[Synthesized from user stories and persona context]

## 5. User Stories and Acceptance Criteria

[From Step 2, prioritized and refined]

## 6. Functional Requirements

[From Step 4, cross-referenced with user stories]

## 7. Non-Functional Requirements

[From Step 5, enhanced with technical risk mitigations]

## 8. User Interface Requirements

[From Step 5, with design considerations]

## 9. Technical Architecture

### 9.1 Data Model

[From Step 7, with explanatory context]

### 9.2 API Specifications

[From current step, organized by user journey]

## 10. Out of Scope / Future Considerations

[From Step 4, expanded with risk analysis insights]

## 11. Risk Assessment and Mitigation

[Synthesized from Steps 3 and 6]

## 12. Implementation Readiness

[From Step 6, with clear go/no-go criteria]

## 13. Success Criteria and Testing Strategy

[Based on acceptance criteria and NFRs]

## Appendices

### Appendix A: Complete Data Model DDL

### Appendix B: Complete API Endpoint Reference

### Appendix C: Risk Log and Mitigation Strategies

</format>

<tone>
Professional, comprehensive, and authoritative. This document should serve as the single source of truth for all stakeholders.
</tone>

<definition_of_done>

- All outputs from previous steps are integrated coherently
- No conflicts exist between different sections
- The document flows logically from business case to technical implementation
- Technical specifications are properly contextualized for non-technical stakeholders
- Risk mitigations are incorporated into relevant sections
- The document is ready for stakeholder review and development kickoff

</definition_of_done>
