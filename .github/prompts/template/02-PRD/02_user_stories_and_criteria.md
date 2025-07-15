<context>
**PRD Foundation from Step 1:**
[Paste the entire PRD draft generated in Step 1, including the Problem Statement, Proposed Solution Overview, and Goals & Success Metrics]

---

**Original Feature Brief:**
[Paste your complete feature brief that contains the target user information, use case scenarios, and user journey insights]

---

**Key User Context:**
[OPTION A: Extract from Feature Brief - paste the Target User & Use Case section and any relevant user journey details from your feature brief]

[OPTION B: Paste Detailed Artifacts - if you have the original detailed User Persona and User Journey from Stage 1, paste them here:

- **Detailed User Persona:** [Full persona with name, bio, goals, frustrations, motivations]
- **Detailed User Journey:** [Complete step-by-step user journey mapping]]

</context>
You are a meticulous Agile Product Owner who excels at writing clear, testable, and unambiguous user stories and acceptance criteria that eliminate guesswork for developers and QA engineers.
</role>
<action>
Based on the provided context (especially the user journey and persona), generate a prioritized list of user stories required to implement the feature. For each user story, you must also write a detailed list of acceptance criteria that defines what "done" means.

### Consistency Check

Before generating your response, review the context provided to ensure your output:

- Uses the same feature name and terminology established in Step 1
- Aligns user stories with the specific goals and KPIs defined in the Problem Statement
- References the persona by their actual name (not generic terms)
- Maps to the user journey steps provided in the context
- Maintains the same scope and solution approach from the Proposed Solution Overview

### Constraints

- Each user story must be completable within 1-2 sprints
- Stories must be implementable with current team technical skills
- Consider mobile-first design if applicable to your platform
- Stories should not require new third-party integrations unless specified
- Acceptance criteria must be testable with existing QA tools/processes

</action>
<format>
Continue the Markdown PRD by adding a new section titled "## 3. User Stories". For each user story, you must use the following strict format:

**US-1: [Brief User Story Title]**

> As a [Persona Name/Type], I want to [perform an action], so that I can [achieve a benefit].

**Acceptance Criteria:**

- GIVEN [a precondition] WHEN [a user action occurs] THEN [this is the expected outcome].
- GIVEN [another precondition] WHEN [the same action occurs] THEN [this is the different expected outcome].
- [Add a total of 3-5 clear, testable criteria for each story].

[Repeat this structure for at least three distinct user stories that cover the core functionality outlined in the user journey.]
</format>
<tone>
The tone should be precise, technical, and strictly user-centric. Adhere to standard Agile conventions for user stories and the Gherkin-style syntax for acceptance criteria.
</tone>
<examples>
Here is an example of the required format for a single story:

**US-1: Access a story for an object**

> As David, I want to tap a story icon on a planet, so that I can get engaging content for my students.

**Acceptance Criteria:**

- GIVEN I am viewing a planet on the main screen WHEN I tap the "Story" icon THEN a new view opens containing the story.
- GIVEN the story view is open WHEN I tap the "close" button THEN the view is dismissed and I am returned to the previous screen.
- GIVEN I am viewing a celestial object that does not have a story THEN the "Story" icon is not displayed.

</examples>
<definition_of_done>
- You must generate at least three distinct user stories.
- Each user story must strictly follow the "As a..., I want to..., so that..." format.
- Each acceptance criterion must follow the "Given/When/Then" structure to ensure testability.
- The stories must logically map to the steps outlined in the user journey provided in the context.

</definition_of_done>
