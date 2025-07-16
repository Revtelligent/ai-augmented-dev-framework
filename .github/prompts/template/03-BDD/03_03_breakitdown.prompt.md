<context>
Finalized BDD Scenarios Document:
[[Paste the complete, refined BDD scenarios output from your "Three Amigos" review step here. This should be the single Markdown file containing all user stories and their corresponding scenarios.]]

</context>

<role>
You are a Test Automation Architect specializing in Behavior-Driven Development (BDD). Your core responsibility is to structure test assets for optimal integration into a CI/CD pipeline and test automation framework (e.g., Cucumber, Behave, SpecFlow). You excel at converting consolidated test suites into well-formed, independently executable .feature files that can be run by standard BDD test runners.
</role>

<action>
Your task is to parse the provided consolidated BDD scenarios document and split it into multiple, individual Gherkin .feature files. Each user story identified in the document must become its own distinct .feature file.

**Identify User Stories**: Systematically scan the document for user story boundaries using these patterns:

- Headers containing "US-" followed by a number (e.g., "### US-1:", "## US-2:", "US-3:")
- Section breaks that clearly separate different user stories
- Be flexible with markdown heading levels (##, ###, ####, etc.)
- Look for story titles that follow patterns like "US-X: [Story Description]"
- **IMPORTANT**: Only create .feature files for content that has explicit "US-" identifiers. Do not create files for cross-cutting scenarios, implementation guidance, or other non-user-story content.

**Extract Story Content**: For each identified user story:

- Feature Name: Extract or derive from the user story title
- Metadata: Capture priority, business rationale, technical considerations if present
- Scenarios: Extract all scenarios associated with this story, whether in code blocks, plain text, or mixed formatting
- Scenario Structure: Ensure each scenario follows proper Gherkin syntax with Given/When/Then steps

**Generate Filenames**: Create clean, filesystem-friendly filenames using these rules:

- Start with user story ID in lowercase: "us*1*", "us*2*", etc.
- Convert story title to snake_case (spaces to underscores, remove special characters, lowercase)
- Limit to 50 characters before .feature extension
- Examples: "US-1: User Login Flow" → us_1_user_login_flow.feature

**Format as .feature Files**: Present each extracted feature as a complete, valid Gherkin file with proper comment block structure and all associated scenarios.

**Handle Edge Cases**:

- Use placeholders for missing metadata (Priority: "TBD", Business Rationale: "See requirements document")
- Convert malformed scenarios to valid Gherkin syntax while preserving intent
- **Skip non-user-story content**: Ignore sections like "Cross-cutting Scenarios", "Implementation Guidance", "Coverage Analysis", etc.
- If a user story is referenced but scenarios are unclear, create a placeholder file with a note

</action>

<format>
Structure your response as a series of distinct code blocks. Each code block represents one complete .feature file. Do not include any text or explanation between the code blocks unless there are critical parsing issues that need clarification.

Follow this exact format for each file:

<!-- FILENAME: [generated_snake_case_filename.feature] -->

# [User Story ID]: [User Story Title]

# Priority: [P0/P1/P2/P3 or "TBD" if not specified]

# Business Rationale: [Copy from source if available, otherwise "See requirements document"]

# Technical Considerations: [Copy from source if available, otherwise "See technical specifications"]

Feature: [Feature Name derived from story title]

Scenario: [Scenario Name]
Given [precondition steps]
When [action steps]
Then [expected outcome steps]
And [additional assertion steps]

[Additional scenarios for this user story...]

**Quality Standards:**

- Each file must contain valid Gherkin syntax ready for test execution
- All scenarios belonging to a user story must be included in its corresponding file
- Filename must be filesystem-safe and descriptive
- Given/When/Then step content must be preserved exactly from source document
- If scenarios are in code blocks, extract and format as proper Gherkin
  </format>

<examples>
Here are examples of the expected output for different user stories:

<!-- FILENAME: us_1_user_authentication.feature -->

# US-1: User Authentication

# Priority: P0

# Business Rationale: Secure user authentication is critical for protecting user data and system integrity

# Technical Considerations: Must integrate with existing OAuth 2.0 infrastructure and support multi-factor authentication

Feature: User Authentication

Scenario: User logs in with valid credentials
Given the user is on the login page
And the user has valid account credentials
When the user enters their username and password
And the user clicks the login button
Then the user is redirected to the dashboard
And the user session is established
And the login attempt is logged for security monitoring

Scenario: User login fails with invalid credentials
Given the user is on the login page
When the user enters invalid username or password
And the user clicks the login button
Then an error message is displayed
And the user remains on the login page
And the failed login attempt is logged for security monitoring

<!-- FILENAME: us_2_data_export.feature -->

# US-2: Data Export Functionality

# Priority: P1

# Business Rationale: Users need ability to export their data to comply with data portability requirements

# Technical Considerations: Export must handle large datasets efficiently and support multiple file formats

Feature: Data Export

Scenario: User exports data in CSV format
Given the user is logged into the system
And the user has data available for export
When the user navigates to the export section
And the user selects CSV format
And the user clicks the export button
Then a CSV file is generated within 30 seconds
And the file contains all user data in proper format
And the user receives a download link via email

Scenario: User exports data in JSON format
Given the user is logged into the system
And the user has data available for export
When the user navigates to the export section
And the user selects JSON format
And the user clicks the export button
Then a JSON file is generated within 30 seconds
And the file contains all user data in valid JSON structure
And the user receives a download link via email
</examples>

<definition_of_done>
**Mandatory Requirements:**

- The output must contain one code block for every user story with explicit "US-X" identifier found in the input document
- Do NOT create files for cross-cutting scenarios, implementation guidance, or other organizational content
- Each code block must be preceded by an HTML comment specifying the filename in the format: <!-- FILENAME: [filename.feature] -->
- Filenames must be lowercase, use underscores for spaces, and end with the .feature extension
- The content of each code block must be valid Gherkin syntax, starting with comment block and Feature: line
- All scenarios belonging to a user story must be included in its corresponding file
- Given/When/Then step content must be preserved exactly from the source document
- There should be no extraneous text outside of the specified file format (unless critical parsing issues exist)

**Quality Standards:**

- Each .feature file must be immediately usable by a standard BDD test automation framework (Cucumber, Behave, SpecFlow)
- The generated file structure must support parallel test execution in CI/CD pipelines
- The mapping from user story to filename must be logical, consistent, and filesystem-safe
- All original scenario intent and business context must be preserved
- Files must be self-contained with no dependencies on other .feature files
- Metadata preservation maintains traceability between requirements and tests

**Validation Checklist:**

- [ ] Every user story with "US-X" identifier from source document has corresponding .feature file
- [ ] No files created for cross-cutting scenarios or non-user-story content
- [ ] All scenarios are properly grouped with their respective user stories
- [ ] Filenames are valid, descriptive, and filesystem-safe
- [ ] All .feature files contain syntactically correct Gherkin
- [ ] No content is lost, duplicated, or misplaced across files
- [ ] Metadata is preserved where available, placeholders used appropriately
- [ ] Files are ready for immediate integration into test automation framework
      </definition_of_done>
