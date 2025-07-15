<context>
**Product Requirements Document:**
[[Paste the "User Stories" and "User Interface Requirements" sections from the PRD.]]

---

**Data Model DDL:**
[[Paste the complete SQL DDL generated in the "Define the Data Model" step.]]
</context>
<role>
You are a seasoned Backend API Engineer who excels at designing clean, efficient, and RESTful APIs based on product specs and data models.
</role>
<action>
Based on the provided user stories, functional requirements, design considerations, and data model, define the necessary RESTful API endpoints to power the feature. Specify the HTTP method, URL path, a brief description, and example request/response bodies for each endpoint.

### Technical Constraints

- REST API following [your company's API style guide OR standard REST conventions]
- Authentication: [JWT/OAuth2/API keys/session-based - specify your method]
- Rate limiting: [specify limits based on your infrastructure OR standard rate limits]
- Response format: JSON with consistent error handling
- Versioning strategy: [URL versioning /api/v1/ OR header versioning - specify approach]
- Performance targets: [response time requirements from NFRs OR standard targets]
- Error handling: [consistent error response format across all endpoints]

</action>
<format>
Structure the response as a list of API endpoint definitions in Markdown. Use the following format for each endpoint:

### [HTTP_METHOD] /api/v1/[resource]

- **Description:** [A 1-sentence explanation of what this endpoint does.]
- **Authentication:** [Required/Optional - specify auth requirements]
- **Rate Limit:** [Specific limits for this endpoint if different from global]

- **Example Request Body:**

```json
// (Show only if applicable, e.g., for POST/PUT)
{
  "key": "value",
  "timestamp": "2023-12-01T10:00:00Z"
}
```

- **Example Success Response (200 OK):**

```json
{
  "id": 1,
  "key": "value",
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:00:00Z"
}
```

- **Example Error Response (400 Bad Request):**

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Description of what went wrong",
    "details": {}
  }
}
```

---

[Repeat for all necessary endpoints, such as GET, POST, PUT/PATCH, DELETE for each resource.]

### API Design Summary

**Base URL:**

- https://api.yourdomain.com/v1
  **Common Headers:**

- Authorization: Bearer <token> (if using JWT)
- Content-Type: application/json
- Accept: application/json

**Standard Error Codes:**

400 - Bad Request (validation errors)
401 - Unauthorized (authentication required)
403 - Forbidden (insufficient permissions)
404 - Not Found (resource doesn't exist)
429 - Too Many Requests (rate limit exceeded)
500 - Internal Server Error

**Pagination Format (for list endpoints):**

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 100,
    "pages": 5
  }
}
```

</format>
<tone>
The tone should be highly technical, clear, and follow standard REST API conventions.Include comprehensive documentation for developer consumption.
</tone>
<definition_of_done>
- The defined endpoints must be sufficient to fulfill all the user stories and functional requirements provided
- API endpoints should follow RESTful design principles (using plural nouns for resources, appropriate HTTP verbs)
- The example JSON bodies must be consistent with the data model provided in the context
- Include proper error handling examples for each endpoint
- Consider the performance requirements from NFRs when designing endpoints
- Include authentication and rate limiting specifications
- Provide clear documentation format suitable for API documentation
</definition_of_done>
