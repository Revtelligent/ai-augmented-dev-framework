<context>
[[Paste the entire PRD draft from Step 2, which now includes the Problem Statement, Goals, and detailed User Stories with Acceptance Criteria.]]

### Constraints

- Functional requirements must be achievable within the specified timeline
- Requirements should leverage existing system capabilities where possible
- Consider performance implications: [[current system handles X requests/second] - Security requirements: [specify your security standards]]
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

- For **Functional Requirements**, use a bulleted list to detail non-negotiable system behaviors derived from the acceptance criteria (e.g., "System must render and display formatted text and images," "API response times for story content must be under 500ms").
- For **Out of Scope**, use a bulleted list to clearly state features or functionalities that will NOT be included in this version (e.g., "User ability to comment on stories," "Offline access to story content," "Support for video content within stories").

</format>
<tone>
The tone should be direct, unambiguous, and technical. Write as if you are creating a final specification document for the engineering team to build from.
</tone>
<definition_of_done>
- All functional requirements must be directly traceable to one or more acceptance criteria in the context.
- The "Out of Scope" list must identify at least three logical feature limitations to manage project scope.
- Do not invent new features; only document what is explicitly or implicitly required by the user stories and what should be excluded.

</definition_of_done>
