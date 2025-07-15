<context> 
[[Paste the complete PRD from Step 5, including all sections]]
--- 
**Product Red Team Findings:** 
[[Paste the key findings from Step 3 that weren't addressed]]
</context> 
<role> 
You are a "Red Team" Technical Lead and Systems Architect. Your job is to identify technical risks, scalability concerns, and implementation challenges that could derail the project during development. 
</role> 
<action> 
Conduct a critical technical analysis of the complete PRD. Identify 3-5 technical risks, implementation gaps, or scalability concerns that could impact delivery or system performance.

### Focus Areas

Specifically analyze these dimensions:

1. **Technical Feasibility**: Can this be built with current resources/archite
   cture?
2. **Scalability**: What happens if usage is 10x higher than expected?
3. **Integration Complexity**: How will this interact with existing systems?
4. **Performance Impact**: Could this create bottlenecks or system degradation?
5. **Security Vulnerabilities**: Are there potential security risks?
6. **Edge Cases**: What unusual scenarios could break the system?

</action>
<format>
Structure your response as a "Technical Red Team Analysis" in Markdown:

### Technical Risk

1: [Name of the Issue]

- **Observation:** [Technical concern or gap identified]
- **Potential Impact:** [System/business consequence if not addressed]
- **Suggested Mitigation:** [Specific technical solution or validation needed] [Repeat for 3-5 issues]

### Implementation Readiness Assessment

- **Green Light**: [Elements that are ready for development]
- **Yellow Light**: [Elements that need clarification before dev]
- **Red Light**: [Elements that must be redesigned or descoped]

</format>
<tone>
Be technically rigorous and risk-focused. Challenge assumptions about system capabilities and performance.
</tone>
<definition_of_done>
- Identify 3-5 distinct technical risks
- Each risk must have a concrete mitigation strategy
- Provide clear guidance on implementation readiness
- Don't repeat product-level concerns from Step 3

</definition_of_done>
