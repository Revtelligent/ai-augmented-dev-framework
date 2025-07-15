<context>
We have concluded our initial ideation and validation phase (Stage 1). The key artifacts we are moving forward with are:

1.  **Selected Feature Idea:** [[Copy and paste the single feature idea chosen from the Stage 1, Step 2 output. Include its name, description, and strategic value.]]
2.  **User Persona:** [[Paste the entire user persona created in Stage 1, Step 3, including the name, bio, goals, and frustrations.]]
3.  **User Journey:** [[Paste the complete user journey map from Stage 1, Step 4.]]

</context>
<role>
You are a Senior Product Manager responsible for creating clear, concise, and data-driven Product Requirements Documents that bridge the gap between business stakeholders and the engineering team.
</role>
<action>
Draft the initial sections of a Product Requirements Document (PRD) for the feature described in the context. Your draft must include a clear "Problem Statement" synthesized from the persona's frustrations, **a high-level "Proposed Solution Overview" that describes the feature being built**, and a set of "Goals and Success Metrics" that align with the feature's strategic value.

### Constraints

- This is a [[MVP/enhancement/major feature]] with a [[X-week]] development timeline
- The solution must work within existing system architecture
- Consider resource limitations: [[specify team size, budget, technical constraints]]
- Target user base: [[specify scale - hundreds, thousands, millions of users]]
- Integration requirements: [[list existing systems this must work with]]
- Compliance requirements: [[GDPR, HIPAA, SOX, etc. if applicable]]

</action>
<format>
Structure the output in Markdown. Use the following headers precisely:

## Product Requirements Document: [Name of Feature from Context]

### 1. Problem Statement

[A 2-3 sentence paragraph that directly summarizes the core problem the user persona is facing, referencing their specific goals and frustrations from the context.]

**### 2. Proposed Solution Overview**
**[A 1-2 paragraph description of the feature to be built. Explain what it is, what it does at a high level, and how it directly addresses the Problem Statement.]**

### 3. Goals and Success Metrics

- **Primary Goal:** [State the main objective of this feature from the user's perspective, derived from the persona's goals.]
- **Key Performance Indicators (KPIs):** - [KPI 1: e.g., 'Increase feature adoption by X% in the first month.'] - [KPI 2: e.g., 'Reduce user-reported errors related to this task by Y%.'] - [KPI 3: e.g., 'Achieve a user satisfaction score of Z/5 for the new feature.']
  </format>
  <tone>
  The tone should be authoritative, strategic, and clear. Focus on articulating the business and user value of the project for a mixed audience of engineers, designers, and stakeholders.
  </tone>
  <examples>
  **Good Problem Statement:**
  "Small business owners using our inventory management system struggle to generate timely reports for tax preparation, spending an average of 4 hours monthly on manual data compilation that should take 15 minutes."

**Poor Problem Statement:** "Users need better reporting capabilities." </examples>
<definition_of_done>

- The Problem Statement must be a direct synthesis of the user persona's frustrations provided in the context.
- **The Proposed Solution Overview must clearly describe the feature from the context and explain how it solves the Problem Statement.**
- The Goals and KPIs must directly relate to solving the problem statement and delivering the feature's strategic value.
- The document must be titled using the name of the selected feature.

</definition_of_done>
