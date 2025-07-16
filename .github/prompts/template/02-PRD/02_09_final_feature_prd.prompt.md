<context>

**Complete PRD from Step 5:**
[[Paste the entire consolidated PRD from Step 5, which includes Problem Statement, Goals, User Stories, Functional Requirements, Design Considerations, and Non-Functional Requirements - this should already incorporate any product risk mitigations from Step 3]]

**Technical Risk Analysis from Step 6:**
[[Paste the technical risks and implementation readiness assessment from Step 6 - these may still need to be documented for the development team]]

**Data Model from Step 7:**
[[Paste the logical data model and SQL DDL from Step 7]]

**API Endpoints from Step 8:**
[[Paste the API endpoint definitions from Step 8]]

</context>

<role>
You are a Principal Product Manager responsible for creating the final, authoritative Product Requirements Document that will guide the entire development process and serve as the foundation for BDD/TDD implementation.
</role>

<action>
Synthesize all provided outputs into a single, comprehensive PRD document that serves as the definitive source of truth for development. This document must be optimized for the next phase: translating user stories into BDD scenarios and TDD implementation.

### Integration Guidelines:

- Incorporate any remaining technical risk mitigations from Step 6 into relevant sections
- Ensure user stories align with functional requirements and technical specifications
- Add executive summary and project timeline sections
- Include technical appendices for data model and API specifications
- Resolve any scope or requirement conflicts between technical specifications and PRD
- Ensure all user stories are clearly defined for BDD scenario generation
- Provide clear traceability from business requirements to technical implementation

### BDD/TDD Preparation:

- Ensure user stories have clear, testable acceptance criteria
- Provide sufficient technical detail for test design
- Include performance and security requirements needed for comprehensive testing
- Maintain clear scope boundaries to guide test coverage decisions

</action>

<format>
Create a complete PRD document using this structure:

# Product Requirements Document: [Feature Name]

## Executive Summary

- **Project Overview:** [2-3 sentences summarizing the feature and its value]
- **Success Metrics:** [Key KPIs with baseline and target values]
- **Timeline:** [Development timeline and key milestones]
- **Implementation Approach:** [Brief overview of technical approach]

## 1. Problem Statement

[From Step 1, refined based on risk analysis]

## 2. Proposed Solution

[From Step 1, enhanced with technical feasibility insights]

## 3. Goals and Success Metrics

[From Step 1, validated against risk analysis with specific, measurable targets]

## 4. Target User and Use Cases

[Synthesized from user stories and persona context]

## 5. User Stories and Acceptance Criteria

[From Step 2, prioritized and refined - optimized for BDD scenario generation]

## 6. Functional Requirements

[From Step 4, cross-referenced with user stories and technical specifications]

## 7. Non-Functional Requirements

[From Step 5, enhanced with technical risk mitigations]

## 8. User Interface Requirements

[From Step 5, with design considerations and wireframe descriptions]

## 9. Technical Architecture

### 9.1 Data Model Overview

[High-level explanation of data entities and relationships for non-technical stakeholders]

### 9.2 API Design Overview

[Summary of API approach and key endpoints for business context]

## 10. Out of Scope / Future Considerations

[From Step 4, expanded with risk analysis insights]

## 11. Technical Risk Assessment and Mitigation

[From Step 6 - technical risks that the development team should be aware of]

## 12. Implementation Readiness

[From Step 6, with clear go/no-go criteria and development prerequisites]

## 13. Success Criteria and Testing Strategy

[Based on acceptance criteria and NFRs - foundation for BDD/TDD approach]

## 14. Development Guidelines

[Key principles and constraints for development team]

## Appendices

### Appendix A: Complete Data Model DDL

[From Step 7 - full technical specification]

### Appendix B: Complete API Endpoint Reference

[From Step 8 - full technical specification]

### Appendix C: Technical Risk Log and Mitigation Strategies

[Technical risk analysis from Step 6 for development team reference]

### Appendix D: Traceability Matrix

[Mapping from user stories to functional requirements to technical implementation]

</format>

<tone>
Professional, comprehensive, and authoritative. This document should serve as the single source of truth for all stakeholders and provide clear guidance for BDD/TDD implementation.
</tone>

<definition_of_done>

- All outputs from previous steps are integrated coherently
- No conflicts exist between different sections
- The document flows logically from business case to technical implementation
- Technical specifications are properly contextualized for non-technical stakeholders
- Risk mitigations are incorporated into relevant sections
- User stories are clearly defined with testable acceptance criteria for BDD generation
- The document is ready for stakeholder review and development kickoff
- Technical appendices provide complete specifications for development team
- Document includes clear traceability from business requirements to implementation
- Success criteria are specific and measurable for testing validation

</definition_of_done>
