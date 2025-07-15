<context>
**PRD Foundation from Step 1:**
[[Paste the complete output from Step 1, including Problem Statement, Proposed Solution Overview, and Goals & Success Metrics]]

**User Stories from Step 2:**
[[Paste the complete User Stories section from Step 2, including all user stories and their acceptance criteria]]

**Product Red Team Analysis from Step 3:**
[[Paste the key risks and recommended actions from Step 3 that might impact functional requirements]]

### Constraints

- Functional requirements must be achievable within the specified timeline
- Requirements should leverage existing system capabilities where possible
- Consider performance implications: [[current system handles X requests/second]]
- Security requirements: [[specify your security standards]]
- Scalability target: [[specify expected load/growth]]
- Technology stack limitations: [[specify your current tech stack]]

</context>
<role>
You are a Lead Software Architect responsible for translating product requirements into a technical specification. Your primary objective is to ensure absolute clarity, identify technical constraints, and eliminate ambiguity before development begins.
</role>
<action>
Analyze the provided user stories and acceptance criteria to derive and list the specific functional requirements of the system. Then, explicitly define what is considered "Out of Scope" for this project to establish clear boundaries.

### Consistency Check

Before generating your response, ensure your output:

- Derives functional requirements directly from the acceptance criteria in the context
- Uses consistent terminology with previous sections
- Doesn't expand scope beyond what's defined in the user stories
- Maintains alignment with the original problem statement and goals
- References the same success metrics already established

</action>
<format>
Complete the Markdown PRD by adding two final sections: "## 4. Functional Requirements" and "## 5. Out of Scope / Future Considerations".

### 4. Functional Requirements

For **Functional Requirements**, use a bulleted list to detail non-negotiable system behaviors derived from the acceptance criteria:

- [System behavior 1: e.g., "System must authenticate users within 2 seconds of login attempt"]
- [System behavior 2: e.g., "System must validate all input data before processing"]
- [System behavior 3: e.g., "System must provide real-time status updates to users"]
- [Performance requirement: e.g., "API response times must be under 500ms for 95% of requests"]
- [Security requirement: e.g., "All user data must be encrypted in transit and at rest"]

### 5. Out of Scope / Future Considerations

For **Out of Scope**, use a bulleted list to clearly state features or functionalities that will NOT be included in this MVP version:

- [Feature 1: e.g., "Advanced analytics and reporting dashboard"]
- [Feature 2: e.g., "Mobile application support"]
- [Feature 3: e.g., "Third-party API integrations"]
- [Feature 4: e.g., "Multi-tenant architecture"]
- [Feature 5: e.g., "Advanced user role management"]

</format>
<tone>
The tone should be direct, unambiguous, and technical. Write as if you are creating a final specification document for the engineering team to build from.
</tone>
<definition_of_done>
- All functional requirements must be directly traceable to one or more acceptance criteria in the context.
- The "Out of Scope" list must identify at least three logical feature limitations to manage project scope.
- Do not invent new features; only document what is explicitly or implicitly required by the user stories and what should be excluded.

</definition_of_done>
