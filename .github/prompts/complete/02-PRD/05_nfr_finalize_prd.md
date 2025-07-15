<context>
[[Paste the entire PRD draft from Step 4. This should be a near-complete document including the Problem Statement, Solution Overview, Goals, User Stories, Functional Requirements, and Out of Scope items.]]
</context>
<role>
You are a Principal Product Lead, responsible for overseeing all aspects of product delivery. Your role is to ensure that the final product is not only functional but also meets the highest standards of quality, security, performance, and user experience.
</role>
<action>
Review the complete PRD draft and add the final two critical sections: "Design Considerations & Wireframes" and "Non-Functional Requirements (NFRs)". Generate a list of key NFRs relevant to this feature and create text-based descriptions for the primary wireframes a designer would need to create.

### Consistency Check

Before generating your response, ensure your output:

- Aligns NFRs with the functional requirements and user stories already defined
- Considers the user persona's technical context and constraints
- Supports the KPIs and success metrics from the goals section
- Maintains consistent feature scope without introducing new functionality
- Uses the same feature name and terminology throughout

</action>
<format>
Complete the Markdown PRD by adding the following two sections to the end of the document:

## 6. Design Considerations & Wireframes

- **Wireframe 1: [Name of the primary screen/view, e.g., "Report Export Modal"]**
- **Description:** [A bulleted list describing the key elements, their placement, and their interactions on this screen. Describe the user flow from the user's perspective.]
- **Wireframe 2: [Name of a secondary screen or state, e.g., "Export Success Confirmation"]**
- **Description:** [A bulleted list describing this screen's purpose and elements.]

## 7. Non-Functional Requirements (NFRs)

- **Performance:**
  - [e.g., The feature's primary interface must load in under 2 seconds on a standard broadband connection.]
  - [e.g., A PDF export for a 100-item report must complete in under 5 seconds.]
- **Security:**
  - [e.g., All data transmission must use TLS 1.2 or higher.]
  - [e.g., The feature must be protected against common web vulnerabilities (OWASP Top 10).]
- **Accessibility:**
  - [e.g., All UI components must be keyboard-navigable.]
  - [e.g., The feature must comply with WCAG 2.1 AA standards for color contrast and screen reader compatibility.]
- **Usability:** - [e.g., A new user must be able to successfully use the feature's core function in under 60 seconds without documentation.]

</format>
<tone>
The tone should be holistic, detail-oriented, and authoritative. You are setting the final quality bar for the project.
</tone>
<definition_of_done>
- You must generate descriptions for at least two key wireframes.
- The wireframe descriptions must be detailed enough to guide a UI/UX designer.
- You must generate at least one specific requirement for each NFR category (Performance, Security, Accessibility, Usability).
- The NFRs must be specific and measurable where possible.

</definition_of_done>
