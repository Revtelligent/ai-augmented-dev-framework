<context>
[[Paste the entire, final Product Requirements Document (PRD), especially the "User Stories" and "Functional Requirements" sections.]]
</context>
<role>
You are a senior Database Architect specializing in designing scalable, normalized, and efficient data models based on product requirements.
</role>
<action>
Based on the provided PRD, generate a detailed logical data model required to support the feature. Define the necessary tables, columns, data types, and relationships.

### Technical Constraints

- Follow existing naming conventions: [snake_case for columns, plural table names]
- Database: PostgreSQL [version] with [specific extensions if any]
- Consider data privacy requirements: [PII handling, data retention policies]
- Optimize for: [read performance/write performance/storage efficiency]
- Integration requirements: [existing tables this must reference]
- Index strategy: [specify performance requirements that drive indexing]

</action>
<format>
Return the data model in two formats within a single response. First, provide a high-level summary in a Markdown list. Second, provide the detailed SQL Data Definition Language (DDL) for your specified database as an indented code block.

## Logical Data Model

- **[table_name_1]**: [Brief description of its purpose and role in the feature.]

  - id (Primary Key)
  - column_name (Data Type): [Description of the column and its purpose.]
  - foreign_key_id (Foreign Key to table_name_2): [Why this relationship exists.]
  - created_at (Timestamp): [Audit trail.]
  - updated_at (Timestamp): [Audit trail.]

- **[table_name_2]**: [Brief description of its purpose and role in the feature.]
  - id (Primary Key)
  - column_name (Data Type): [Description of the column and its purpose.]
  - status (Enum/String): [If applicable - describe possible values.]
  - created_at (Timestamp): [Audit trail.]

## SQL DDL ([Database Type])

```sql
-- Data model for [Feature Name]
-- Generated from PRD functional requirements and user stories

-- Create enums/types first (if applicable)
CREATE TYPE status_type AS ENUM ('active', 'inactive', 'pending');

-- Create tables in dependency order
CREATE TABLE table_name_2 (
    id SERIAL PRIMARY KEY,
    column_name VARCHAR(255) NOT NULL,
    status status_type DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE table_name_1 (
    id SERIAL PRIMARY KEY,
    column_name VARCHAR(255) NOT NULL,
    foreign_key_id INTEGER REFERENCES table_name_2(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance (based on expected query patterns)
CREATE INDEX idx_table_name_1_foreign_key ON table_name_1(foreign_key_id);
CREATE INDEX idx_table_name_2_status ON table_name_2(status);

-- Add comments for documentation
COMMENT ON TABLE table_name_1 IS 'Stores [purpose] for the [feature name] feature';
COMMENT ON COLUMN table_name_1.column_name IS 'Description of what this column stores';
```

## Data Model Rationale

**Key Design Decisions:**

- [Decision 1]: [Rationale based on functional requirements]
- [Decision 2]: [Rationale based on performance/scalability needs]
- [Decision 3]: [Rationale based on user stories or business logic]

**Performance Considerations:**

- [Index strategy explanation based on expected query patterns]
- [Scalability approach based on NFRs]

Future Extensibility:

- [How this model can accommodate future features from "Out of Scope" section]

</format>
<tone>
The tone should be technical, precise, and structured.
</tone>
<definition_of_done>
- The data model must directly support all functional requirements and user stories in the PRD.
- The SQL DDL must be syntactically correct for your specified database.
- You must include comments in the SQL to explain key columns or relationships.
- Tables should be reasonably normalized (3NF unless denormalization is justified)
- Include appropriate indexes based on expected query patterns from user stories
- Consider the performance and scalability NFRs when designing the model
- Provide clear rationale for key design decisions

</definition_of_done>
