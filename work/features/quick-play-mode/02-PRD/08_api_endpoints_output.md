# RESTful API Endpoints: Quick Play Mode

## API Endpoint Definitions

### GET /api/v1/challenges

- **Description:** Retrieves the list of available Quick Play challenges with filtering and sorting options.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 10 requests per minute per user

**Query Parameters:**

- `difficulty` (optional): Filter by difficulty level (Easy, Medium, Hard)
- `max_duration` (optional): Filter by maximum estimated duration in minutes
- `sort` (optional): Sort order (duration, difficulty, name) - defaults to sort_order

**Example Success Response (200 OK):**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Memory Match",
      "description": "Test your memory with pattern matching",
      "estimated_duration_minutes": 3,
      "difficulty_level": "Easy",
      "instructions": "Match the patterns in the correct sequence",
      "sort_order": 1,
      "created_at": "2023-12-01T10:00:00Z",
      "updated_at": "2023-12-01T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Logic Puzzle",
      "description": "Solve logical challenges step by step",
      "estimated_duration_minutes": 5,
      "difficulty_level": "Medium",
      "instructions": "Use logic to solve the presented puzzle",
      "sort_order": 2,
      "created_at": "2023-12-01T10:00:00Z",
      "updated_at": "2023-12-01T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 2,
    "pages": 1
  }
}
```

**Example Error Response (401 Unauthorized):**

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Authentication required to access challenges",
    "details": {
      "required_headers": ["Authorization"]
    }
  }
}
```

---

### GET /api/v1/challenges/{id}

- **Description:** Retrieves detailed information about a specific challenge including metadata and configuration.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 10 requests per minute per user

**Example Success Response (200 OK):**

```json
{
  "id": 1,
  "name": "Memory Match",
  "description": "Test your memory with pattern matching",
  "estimated_duration_minutes": 3,
  "difficulty_level": "Easy",
  "instructions": "Match the patterns in the correct sequence. Click on tiles to reveal patterns, then click matching pairs.",
  "metadata": {
    "grid_size": "4x4",
    "pattern_types": ["colors", "shapes"],
    "scoring_method": "time_based",
    "max_attempts": 3
  },
  "sort_order": 1,
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:00:00Z"
}
```

**Example Error Response (404 Not Found):**

```json
{
  "error": {
    "code": "CHALLENGE_NOT_FOUND",
    "message": "The requested challenge does not exist or is not available",
    "details": {
      "challenge_id": 999
    }
  }
}
```

---

### POST /api/v1/quick-play-sessions

- **Description:** Creates a new Quick Play session for a specific challenge and returns session token for gameplay tracking.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 10 requests per minute per user

**Example Request Body:**

```json
{
  "challenge_id": 1
}
```

**Example Success Response (201 Created):**

```json
{
  "id": 123,
  "user_id": 456,
  "challenge_id": 1,
  "session_token": "qps_7f8e9d6c5b4a3f2e1d0c9b8a7f6e5d4c",
  "status": "started",
  "started_at": "2023-12-01T10:00:00Z",
  "score": 0,
  "game_data": {},
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:00:00Z"
}
```

**Example Error Response (400 Bad Request):**

```json
{
  "error": {
    "code": "INVALID_CHALLENGE",
    "message": "The specified challenge is not available or does not exist",
    "details": {
      "challenge_id": 999,
      "available_challenges": [1, 2, 3]
    }
  }
}
```

---

### GET /api/v1/quick-play-sessions/{id}

- **Description:** Retrieves the current state of a Quick Play session including progress and game data.
- **Authentication:** Required (JWT Bearer token - must be session owner)
- **Rate Limit:** 10 requests per minute per user

**Example Success Response (200 OK):**

```json
{
  "id": 123,
  "user_id": 456,
  "challenge_id": 1,
  "session_token": "qps_7f8e9d6c5b4a3f2e1d0c9b8a7f6e5d4c",
  "status": "in_progress",
  "started_at": "2023-12-01T10:00:00Z",
  "completed_at": null,
  "score": 150,
  "time_taken_seconds": 45,
  "game_data": {
    "current_level": 2,
    "moves_made": 8,
    "hints_used": 1,
    "pattern_matches": 3
  },
  "challenge": {
    "name": "Memory Match",
    "estimated_duration_minutes": 3
  },
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:00:00Z"
}
```

**Example Error Response (403 Forbidden):**

```json
{
  "error": {
    "code": "SESSION_ACCESS_DENIED",
    "message": "You can only access your own gameplay sessions",
    "details": {
      "session_id": 123,
      "session_owner": 789
    }
  }
}
```

---

### PATCH /api/v1/quick-play-sessions/{id}

- **Description:** Updates the current session state including progress, score, and game data during gameplay.
- **Authentication:** Required (JWT Bearer token - must be session owner)
- **Rate Limit:** 10 requests per minute per user

**Example Request Body:**

```json
{
  "status": "in_progress",
  "score": 250,
  "time_taken_seconds": 75,
  "game_data": {
    "current_level": 3,
    "moves_made": 12,
    "hints_used": 1,
    "pattern_matches": 5
  }
}
```

**Example Success Response (200 OK):**

```json
{
  "id": 123,
  "user_id": 456,
  "challenge_id": 1,
  "session_token": "qps_7f8e9d6c5b4a3f2e1d0c9b8a7f6e5d4c",
  "status": "in_progress",
  "started_at": "2023-12-01T10:00:00Z",
  "completed_at": null,
  "score": 250,
  "time_taken_seconds": 75,
  "game_data": {
    "current_level": 3,
    "moves_made": 12,
    "hints_used": 1,
    "pattern_matches": 5
  },
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:01:15Z"
}
```

**Example Error Response (400 Bad Request):**

```json
{
  "error": {
    "code": "INVALID_SESSION_UPDATE",
    "message": "Cannot update completed or abandoned sessions",
    "details": {
      "current_status": "completed",
      "allowed_statuses": ["started", "in_progress"]
    }
  }
}
```

---

### PUT /api/v1/quick-play-sessions/{id}/complete

- **Description:** Marks a session as completed with final score and completion time for performance summary.
- **Authentication:** Required (JWT Bearer token - must be session owner)
- **Rate Limit:** 10 requests per minute per user

**Example Request Body:**

```json
{
  "score": 450,
  "time_taken_seconds": 180,
  "game_data": {
    "final_level": 5,
    "total_moves": 24,
    "hints_used": 2,
    "completion_bonus": 100
  }
}
```

**Example Success Response (200 OK):**

```json
{
  "id": 123,
  "user_id": 456,
  "challenge_id": 1,
  "session_token": "qps_7f8e9d6c5b4a3f2e1d0c9b8a7f6e5d4c",
  "status": "completed",
  "started_at": "2023-12-01T10:00:00Z",
  "completed_at": "2023-12-01T10:03:00Z",
  "score": 450,
  "time_taken_seconds": 180,
  "game_data": {
    "final_level": 5,
    "total_moves": 24,
    "hints_used": 2,
    "completion_bonus": 100
  },
  "performance_summary": {
    "completion_time_vs_estimate": "within_estimate",
    "score_percentile": 75,
    "personal_best": false
  },
  "created_at": "2023-12-01T10:00:00Z",
  "updated_at": "2023-12-01T10:03:00Z"
}
```

**Example Error Response (409 Conflict):**

```json
{
  "error": {
    "code": "SESSION_ALREADY_COMPLETED",
    "message": "This session has already been completed",
    "details": {
      "completed_at": "2023-12-01T09:55:00Z",
      "final_score": 380
    }
  }
}
```

---

### GET /api/v1/users/{user_id}/quick-play-sessions

- **Description:** Retrieves the user's Quick Play session history with optional filtering and pagination.
- **Authentication:** Required (JWT Bearer token - must be requesting own sessions or have admin role)
- **Rate Limit:** 10 requests per minute per user

**Query Parameters:**

- `status` (optional): Filter by session status (completed, abandoned, etc.)
- `challenge_id` (optional): Filter by specific challenge
- `page` (optional): Page number for pagination (default: 1)
- `per_page` (optional): Items per page (default: 20, max: 100)

**Example Success Response (200 OK):**

```json
{
  "data": [
    {
      "id": 123,
      "challenge_id": 1,
      "challenge_name": "Memory Match",
      "status": "completed",
      "score": 450,
      "time_taken_seconds": 180,
      "started_at": "2023-12-01T10:00:00Z",
      "completed_at": "2023-12-01T10:03:00Z"
    },
    {
      "id": 124,
      "challenge_id": 2,
      "challenge_name": "Logic Puzzle",
      "status": "in_progress",
      "score": 120,
      "time_taken_seconds": 65,
      "started_at": "2023-12-01T11:00:00Z",
      "completed_at": null
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 2,
    "pages": 1
  },
  "summary": {
    "total_sessions": 2,
    "completed_sessions": 1,
    "average_completion_time": 180,
    "highest_score": 450
  }
}
```

**Example Error Response (403 Forbidden):**

```json
{
  "error": {
    "code": "USER_ACCESS_DENIED",
    "message": "You can only access your own session history",
    "details": {
      "requested_user_id": 789,
      "authenticated_user_id": 456
    }
  }
}
```

---

### GET /api/v1/tutorial-progress

- **Description:** Retrieves the current user's tutorial progress and completion status.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 10 requests per minute per user

**Example Success Response (200 OK):**

```json
{
  "id": 1,
  "user_id": 456,
  "step_number": 2,
  "completed": false,
  "skipped": false,
  "completed_at": null,
  "created_at": "2023-12-01T09:00:00Z",
  "updated_at": "2023-12-01T09:05:00Z"
}
```

**Example Success Response (404 Not Found) - New User:**

```json
{
  "error": {
    "code": "TUTORIAL_NOT_STARTED",
    "message": "Tutorial has not been started for this user",
    "details": {
      "tutorial_available": true,
      "start_endpoint": "/api/v1/tutorial-progress"
    }
  }
}
```

---

### POST /api/v1/tutorial-progress

- **Description:** Creates or updates tutorial progress, including completion and skip actions.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 10 requests per minute per user

**Example Request Body (Progress Update):**

```json
{
  "step_number": 3,
  "completed": false
}
```

**Example Request Body (Skip Tutorial):**

```json
{
  "skipped": true,
  "completed": false
}
```

**Example Request Body (Complete Tutorial):**

```json
{
  "step_number": 3,
  "completed": true
}
```

**Example Success Response (200 OK):**

```json
{
  "id": 1,
  "user_id": 456,
  "step_number": 3,
  "completed": true,
  "skipped": false,
  "completed_at": "2023-12-01T09:10:00Z",
  "created_at": "2023-12-01T09:00:00Z",
  "updated_at": "2023-12-01T09:10:00Z"
}
```

**Example Error Response (400 Bad Request):**

```json
{
  "error": {
    "code": "INVALID_TUTORIAL_STEP",
    "message": "Tutorial step must be between 1 and 3",
    "details": {
      "provided_step": 5,
      "valid_range": "1-3"
    }
  }
}
```

---

### POST /api/v1/user-feedback

- **Description:** Submits user feedback or technical issue reports related to Quick Play Mode.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 5 requests per minute per user (lower limit for feedback submissions)

**Example Request Body:**

```json
{
  "session_id": 123,
  "feedback_type": "technical_issue",
  "description": "Game froze during level 3 of Memory Match challenge. Had to refresh the page to continue."
}
```

**Example Success Response (201 Created):**

```json
{
  "id": 789,
  "user_id": 456,
  "session_id": 123,
  "feedback_type": "technical_issue",
  "description": "Game froze during level 3 of Memory Match challenge. Had to refresh the page to continue.",
  "priority": "medium",
  "status": "submitted",
  "created_at": "2023-12-01T10:30:00Z",
  "updated_at": "2023-12-01T10:30:00Z"
}
```

**Example Error Response (400 Bad Request):**

```json
{
  "error": {
    "code": "INVALID_FEEDBACK_TYPE",
    "message": "Feedback type must be one of: technical_issue, bug_report, suggestion",
    "details": {
      "provided_type": "complaint",
      "valid_types": ["technical_issue", "bug_report", "suggestion"]
    }
  }
}
```

---

### GET /api/v1/user-feedback

- **Description:** Retrieves the current user's submitted feedback with status updates.
- **Authentication:** Required (JWT Bearer token)
- **Rate Limit:** 10 requests per minute per user

**Query Parameters:**

- `status` (optional): Filter by feedback status (submitted, in_review, resolved, closed)
- `feedback_type` (optional): Filter by feedback type
- `page` (optional): Page number for pagination (default: 1)

**Example Success Response (200 OK):**

```json
{
  "data": [
    {
      "id": 789,
      "session_id": 123,
      "feedback_type": "technical_issue",
      "description": "Game froze during level 3 of Memory Match challenge.",
      "priority": "medium",
      "status": "in_review",
      "created_at": "2023-12-01T10:30:00Z",
      "updated_at": "2023-12-01T11:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 1,
    "pages": 1
  }
}
```

**Example Error Response (429 Too Many Requests):**

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later.",
    "details": {
      "retry_after": 60,
      "limit": "10 requests per minute",
      "reset_time": "2023-12-01T10:31:00Z"
    }
  }
}
```

---

## API Design Summary

**Base URL:**

- Production: https://api.mindbreak.com/v1
- Staging: https://api-staging.mindbreak.com/v1

**Common Headers:**

- Authorization: Bearer `<jwt_token>` (required for all endpoints)
- Content-Type: application/json
- Accept: application/json
- X-API-Version: v1

**Standard Error Codes:**

- 400 - Bad Request (validation errors, invalid parameters)
- 401 - Unauthorized (missing or invalid authentication)
- 403 - Forbidden (insufficient permissions, resource access denied)
- 404 - Not Found (resource doesn't exist or not available)
- 409 - Conflict (resource state conflict, e.g., session already completed)
- 422 - Unprocessable Entity (valid JSON but invalid business logic)
- 429 - Too Many Requests (rate limit exceeded)
- 500 - Internal Server Error (system error)
- 503 - Service Unavailable (maintenance mode or system overload)

**Authentication & Security:**

- JWT tokens expire after 24 hours and include user_id and role claims
- All requests require HTTPS with TLS 1.3 encryption
- Rate limiting: 10 requests/minute per user (5 for feedback submissions)
- Session tokens are unique, secure, and automatically expire after 24 hours
- Input validation and sanitization per OWASP guidelines on all endpoints

**Performance Requirements:**

- 95% of requests respond within 500ms
- Support for 1,000 requests/second system-wide
- 99.5% uptime during business hours (6 AM - 8 PM)
- Automatic session recovery within 30 seconds of network interruption
- Database queries optimized for <100ms execution time

**Pagination Format (for list endpoints):**

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 100,
    "pages": 5,
    "has_next": true,
    "has_prev": false
  }
}
```

**Standard Error Response Format:**

```json
{
  "error": {
    "code": "ERROR_CODE_CONSTANT",
    "message": "Human-readable error description",
    "details": {
      "field_errors": {},
      "context": {},
      "retry_after": 60
    },
    "timestamp": "2023-12-01T10:00:00Z",
    "request_id": "req_123456789"
  }
}
```

**Session Recovery:**

- Sessions can be recovered using the session_token within 24 hours
- Incomplete sessions maintain game_data state for seamless continuation
- Network interruptions automatically trigger retry logic (up to 3 attempts)
- Session state updates are validated server-side to prevent manipulation

**Analytics & Monitoring:**

- All API calls logged with request/response times and user context
- Performance metrics tracked for 500ms response time requirement
- Error rates monitored for proactive issue resolution
- Tutorial completion rates tracked for 70% target achievement
- Challenge selection patterns analyzed for difficulty optimization
