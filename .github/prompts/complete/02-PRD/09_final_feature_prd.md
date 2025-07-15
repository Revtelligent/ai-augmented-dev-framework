<context>

**Complete PRD from Step 5:**

# Product Requirements Document: Quick Play Mode

## 1. Problem Statement

Busy professionals, like Alex Carter, often struggle to find quick and engaging ways to relax during short breaks. Overly complex or stressful games fail to meet their needs, leading to frustration and disengagement. Addressing this pain point is critical to enhancing user engagement and retention.

## 2. Proposed Solution Overview

Quick Play Mode is a streamlined game mode designed to offer bite-sized challenges lasting 2-5 minutes. This feature ensures users can enjoy engaging gameplay without a significant time commitment. Key capabilities include:

- Bite-sized challenges with estimated completion times.
- Adaptive difficulty to cater to varying skill levels.
- Professional-friendly design suitable for workplace use.

By combining simplicity with engaging mechanics tailored for short sessions, Quick Play Mode directly addresses the need for quick mental breaks, differentiating MindBreak from competitors.

## 3. Goals and Success Metrics

- **Primary Goal:** Increase user engagement and retention by providing a convenient and enjoyable way to relax during short breaks.
- **Key Performance Indicators (KPIs):**
  - **Daily Active Users (DAU):** Target goal: 20% increase within the first month.
  - **Average Session Duration:** Target goal: 5 minutes per session.
  - **Retention Rate:** Success indicator: 15% increase within the first month.
  - **Engagement Signal:** Frequency of users completing challenges.
  - **Leading Indicators:** Number of users completing the tutorial and frequency of challenge completions within the first 2-4 weeks.
- **Business Impact:** Expected outcomes include increased DAU, improved retention rates, and enhanced brand perception as a professional-friendly game.

## 4. User Stories

**US-1: Discover Quick Play Mode**

> As Alex Carter, I want to easily discover the Quick Play Mode feature, so that I can quickly access bite-sized challenges during my short breaks.

**Acceptance Criteria:**

- GIVEN the app home screen WHEN Alex opens the app THEN a visually distinct banner promoting Quick Play Mode is displayed.
- GIVEN the banner is visible WHEN Alex taps the "Try Now" button THEN the Quick Play Mode tutorial is launched.
- GIVEN Alex skips the tutorial WHEN Alex selects Quick Play Mode THEN Alex is taken directly to the game selection screen.

**US-2: Engage with Quick Play Mode Tutorial**

> As Alex Carter, I want to understand how Quick Play Mode works through a concise tutorial, so that I can start playing without confusion.

**Acceptance Criteria:**

- GIVEN the tutorial screen WHEN Alex starts the tutorial THEN the tutorial explains the mode's mechanics in under 2 minutes.
- GIVEN Alex completes the tutorial WHEN Alex finishes THEN Alex is presented with a "Start Playing" button.
- GIVEN Alex skips the tutorial WHEN Alex selects "Skip Tutorial" THEN Alex is taken directly to the game selection screen.

**US-3: Select and Play a Challenge**

> As Alex Carter, I want to choose from a list of bite-sized challenges, so that I can enjoy engaging gameplay tailored to my available time.

**Acceptance Criteria:**

- GIVEN the game selection screen WHEN Alex views the list THEN each challenge displays an estimated completion time.
- GIVEN Alex selects a challenge WHEN Alex starts playing THEN the gameplay begins with clear instructions.
- GIVEN Alex completes a challenge WHEN Alex finishes THEN Alex is shown a summary of their performance and a "Play Again" option.
- GIVEN Alex encounters technical issues WHEN Alex reports the issue THEN the app provides a feedback form for resolution.

## 5. Functional Requirements

- System must display a visually distinct Quick Play Mode banner on the app home screen for all users
- System must launch the Quick Play Mode tutorial when user taps the "Try Now" button from the banner
- System must navigate user directly to game selection screen when Quick Play Mode is selected without tutorial
- System must complete tutorial explanation of Quick Play Mode mechanics within 2 minutes maximum duration
- System must present a "Start Playing" button upon tutorial completion
- System must provide a "Skip Tutorial" option that navigates directly to game selection screen
- System must display estimated completion time for each challenge on the game selection screen
- System must initiate gameplay with clear instructions when user selects a challenge
- System must display performance summary and "Play Again" option upon challenge completion
- System must provide a feedback form when user reports technical issues during gameplay
- System must handle 1,000 requests/second with 99.5% uptime for Quick Play Mode sessions
- System must respond to game selection requests within 500ms for 95% of requests
- System must encrypt all user gameplay data in transit and at rest using HTTPS encryption
- System must implement secure session management for Quick Play Mode sessions
- System must validate all user input data before processing gameplay actions
- System must support 10,000 concurrent users with 20% monthly growth capacity for Quick Play Mode

## 6. Design Considerations & Wireframes

**Wireframe 1: Quick Play Mode Discovery Banner & Home Screen Integration**

- **Description:**
  - Primary banner positioned prominently in the upper third of the home screen, featuring a clean, professional design with subtle animations
  - Banner includes "Quick Play Mode" heading with concise tagline "5-minute mental breaks for busy professionals"
  - Estimated time indicator (2-5 min) displayed with clock icon for immediate time commitment clarity
  - "Try Now" CTA button using primary brand color, sized for easy touch interaction on mobile devices
  - Secondary "Learn More" link positioned below for users wanting additional information before committing
  - Banner maintains visual hierarchy with existing home screen elements while ensuring discoverability
  - Professional color scheme using muted blues and grays appropriate for workplace environments
  - Responsive design that adapts gracefully across desktop, tablet, and mobile viewports

**Wireframe 2: Challenge Selection & Game Lobby Interface**

- **Description:**
  - Clean grid layout displaying 4-6 challenge options with clear visual distinction between difficulty levels
  - Each challenge card shows: challenge name, estimated completion time with timer icon, difficulty indicator (Easy/Medium/Hard), and brief description
  - Time commitment prominently displayed using consistent iconography (2 min, 3 min, 5 min options)
  - Filter options at top for "By Time" and "By Difficulty" to help users quickly find appropriate challenges
  - "Start Challenge" buttons using consistent styling with primary CTA treatment
  - Breadcrumb navigation showing "Home > Quick Play Mode" for clear user orientation
  - "Need Help?" link in bottom right corner providing access to tutorial replay
  - Professional loading states with skeleton screens to maintain perceived performance
  - Adaptive layout that showcases 2-3 challenges on mobile, 4-6 on desktop for optimal cognitive load

**Wireframe 3: Tutorial Experience & Onboarding Flow**

- **Description:**
  - Step-by-step tutorial using overlay approach to minimize context switching
  - Progress indicator showing "Step 1 of 3" to set clear expectations for tutorial length
  - Interactive elements highlighted with gentle pulsing animation and directional arrows
  - "Skip Tutorial" option consistently available in top-right corner with subtle styling
  - Tutorial content uses concise, action-oriented language focusing on immediate value
  - Each step includes a brief explanation (1-2 sentences) with accompanying visual demonstration
  - "Previous" and "Next" navigation buttons for users who want to review steps
  - Final step presents clear "Start Playing" CTA with confidence-building messaging
  - Professional visual treatment using brand colors and consistent typography
  - Mobile-optimized touch targets and readable text sizing for various device contexts

## 7. Non-Functional Requirements (NFRs)

**Performance:**

- Quick Play Mode banner and home screen integration must load within 1.5 seconds on standard broadband connections (25 Mbps)
- Challenge selection screen must render within 2 seconds of user navigation from home screen
- Game initialization must complete within 3 seconds of challenge selection to maintain engagement momentum
- Tutorial progression between steps must respond within 500ms to maintain interactive flow
- Performance summary display must appear within 1 second of challenge completion

**Security:**

- All gameplay data transmission must use TLS 1.3 encryption with proper certificate validation
- User session tokens must expire after 24 hours of inactivity with secure regeneration protocols
- Challenge completion data must be validated server-side to prevent client-side manipulation
- Quick Play Mode must implement rate limiting of 10 requests per minute per user to prevent abuse
- All user input must be sanitized and validated against XSS and injection attacks per OWASP guidelines

**Accessibility:**

- All Quick Play Mode interfaces must support keyboard navigation with logical tab order and visible focus indicators
- Challenge selection cards must provide adequate color contrast ratios (4.5:1 minimum) compliant with WCAG 2.1 AA standards
- Screen reader compatibility must include proper ARIA labels for all interactive elements and game state announcements
- Text must scale up to 200% without horizontal scrolling or loss of functionality
- Alternative text descriptions must be provided for all visual game elements and progress indicators

**Usability:**

- New users must successfully complete their first Quick Play Mode challenge within 90 seconds of discovering the feature
- Tutorial completion rate must exceed 70% for users who initiate the onboarding flow
- Users must be able to return to the home screen from any Quick Play Mode screen within 2 clicks/taps
- Error messages must provide clear, actionable guidance without technical jargon
- Challenge selection must be intuitive enough that 95% of users select appropriate difficulty without assistance

**Scalability:**

- Quick Play Mode infrastructure must support 10,000 concurrent active sessions without performance degradation
- System must automatically scale to accommodate 25% month-over-month user growth without manual intervention
- Database queries for challenge selection must execute in under 100ms even with 50,000+ registered users
- CDN distribution must ensure global response times under 2 seconds for 95% of users worldwide
- Caching strategy must reduce backend load by 80% for frequently accessed challenge metadata

**Reliability:**

- Quick Play Mode must maintain 99.5% uptime during business hours (6 AM - 8 PM local time zones)
- System must gracefully handle network interruptions with automatic session recovery within 30 seconds
- Failed challenge submissions must retry automatically up to 3 times before presenting user-friendly error messaging
- Data backup and recovery procedures must ensure maximum 15-minute data loss in worst-case scenarios
- Load balancing must automatically redirect traffic during individual server failures with zero user impact

**Technical Risk Analysis from Step 6:**

# Technical Red Team Analysis: Quick Play Mode

## Technical Risk 1: Adaptive Difficulty Algorithm Complexity

- **Observation:** The PRD specifies "adaptive difficulty to cater to varying skill levels" but provides no technical details on how this will be implemented. Real-time difficulty adjustment requires complex algorithms that analyze user performance patterns, response times, and success rates. This functionality is not trivial and could become a significant technical bottleneck.
- **Potential Impact:** Without proper implementation, the adaptive difficulty could create inconsistent user experiences, performance degradation due to complex calculations, or complete feature failure. This could result in delayed launch, increased development costs, and user frustration if the difficulty adjustments feel arbitrary or broken.
- **Suggested Mitigation:** Define a minimum viable difficulty adjustment algorithm using simple metrics (completion time, success rate over last 3 games). Implement a rule-based system initially rather than machine learning. Create comprehensive performance benchmarks and ensure difficulty calculations can complete within 50ms. Plan for A/B testing different algorithmic approaches post-launch.

## Technical Risk 2: Real-Time Performance Under Concurrent Load

- **Observation:** The PRD requires supporting 10,000 concurrent users with sub-500ms response times while handling 1,000 requests/second. However, Quick Play Mode involves real-time game state management, session persistence, and immediate feedback loops that could create memory and CPU bottlenecks. The combination of tutorial interactions, game selections, and performance tracking across thousands of simultaneous sessions presents significant scalability challenges.
- **Potential Impact:** System could experience cascading failures during peak usage, leading to timeouts, lost game progress, and poor user experience. Memory leaks from session management could cause server crashes. Database contention from concurrent challenge completions could create deadlocks and data inconsistency.
- **Suggested Mitigation:** Implement stateless game session architecture using Redis for session caching. Design database schema with proper indexing for challenge queries and implement connection pooling. Create load testing scenarios that simulate 15,000 concurrent users (50% buffer). Implement circuit breakers and graceful degradation patterns. Plan for horizontal scaling with container orchestration.

## Technical Risk 3: Cross-Platform Tutorial State Management

- **Observation:** The tutorial system must work seamlessly across "desktop, tablet, and mobile viewports" with step progression, skip functionality, and the ability to "revisit later." Managing tutorial state across different devices and screen orientations while ensuring 500ms response times creates complex synchronization challenges. The overlay approach mentioned could conflict with existing UI frameworks or cause rendering issues on different platforms.
- **Potential Impact:** Tutorial state could become inconsistent between devices, leading to users getting stuck or having to restart. Overlay rendering conflicts could break existing app functionality. Poor mobile performance could alienate the target professional user base who primarily use mobile devices.
- **Suggested Mitigation:** Design tutorial as a self-contained component with centralized state management (Redux/Vuex pattern). Implement progressive web app (PWA) capabilities for offline tutorial access. Create device-specific rendering strategies with fallback options. Build comprehensive cross-platform testing pipeline including automated visual regression tests.

## Technical Risk 4: Security Vulnerabilities in Game State Validation

- **Observation:** The PRD mentions server-side validation of challenge completion data but lacks specific details about protecting against gaming the system. Quick Play Mode's professional context makes it attractive for users to potentially manipulate completion times or difficulty levels for workplace bragging rights. The 24-hour session timeout may be too long for secure workplace environments.
- **Potential Impact:** Users could exploit client-side manipulation to fake completion times or unlock higher difficulties prematurely. Compromised game integrity could damage the app's reputation as a professional tool. Extended session timeouts could violate corporate security policies, limiting adoption in enterprise environments.
- **Suggested Mitigation:** Implement cryptographic signatures for all game state transitions using HMAC validation. Add server-side timing validation with reasonable bounds checking (e.g., minimum completion times based on challenge complexity). Reduce session timeout to 8 hours with sliding window refresh. Implement audit logging for suspicious completion patterns and rate limiting for rapid successive attempts.

## Technical Risk 5: Integration Complexity with Existing MindBreak Architecture

- **Observation:** The PRD assumes seamless integration with the existing MindBreak app but doesn't address potential conflicts with current navigation patterns, data models, or performance optimizations. Adding a prominent banner to the home screen and new navigation flows could disrupt existing user workflows and create technical debt in the codebase.
- **Potential Impact:** Integration could break existing features, create navigation conflicts, or require significant refactoring of the current codebase. Performance degradation could affect the entire app, not just Quick Play Mode. Database schema changes might require complex migration strategies affecting all users.
- **Suggested Mitigation:** Conduct thorough analysis of existing MindBreak architecture and create detailed integration plan. Implement feature flags for gradual rollout and easy rollback capability. Design Quick Play Mode as a modular component with minimal dependencies on existing code. Create comprehensive regression testing suite to ensure existing functionality remains intact.

## Implementation Readiness Assessment

### Green Light

- Basic UI wireframes and design specifications are well-defined
- Performance metrics and success criteria are clearly established
- Security requirements follow industry standards (TLS 1.3, OWASP guidelines)
- User story acceptance criteria are testable and specific

### Yellow Light

- Adaptive difficulty algorithm needs technical specification before development
- Database schema design requires definition for challenge metadata and user progress
- Cross-platform rendering strategy needs detailed technical planning
- Load balancing and auto-scaling architecture requires infrastructure design
- Integration points with existing MindBreak codebase need technical assessment

### Red Light

- Real-time concurrent user support (10,000) lacks infrastructure architecture definition
- Tutorial state management across devices needs complete technical redesign
- Game state validation and anti-cheating measures require security architecture review
- Scalability requirements (25% monthly growth) need capacity planning and cost analysis
- Performance targets (sub-500ms) need technical validation against current system capabilities

**Data Model from Step 7:**

# Data Model Definition: Quick Play Mode

## Logical Data Model

- **challenges**: Stores the available challenges/games that users can select from in Quick Play Mode.

  - id (Primary Key)
  - name (TEXT): The display name of the challenge (e.g., "Memory Match", "Logic Puzzle")
  - description (TEXT): Brief description shown on challenge selection screen
  - estimated_duration_minutes (INTEGER): Expected completion time in minutes (2-5 min range)
  - difficulty_level (TEXT): Difficulty indicator (Easy, Medium, Hard) for filtering
  - instructions (TEXT): Clear gameplay instructions shown when challenge starts
  - metadata (JSON): Flexible storage for challenge-specific configuration and rules
  - is_active (BOOLEAN): Whether challenge is currently available for selection
  - sort_order (INTEGER): Display order on challenge selection screen
  - created_at (TIMESTAMP): Audit trail for challenge creation
  - updated_at (TIMESTAMP): Audit trail for challenge modifications

- **quick_play_sessions**: Tracks individual gameplay sessions for analytics and session recovery.

  - id (Primary Key)
  - user_id (Foreign Key to users): Links session to the playing user
  - challenge_id (Foreign Key to challenges): Links session to the selected challenge
  - session_token (TEXT): Secure token for session management and recovery
  - status (TEXT): Current session state (started, in_progress, completed, abandoned, error)
  - started_at (TIMESTAMP): When user initiated the challenge
  - completed_at (TIMESTAMP): When user finished the challenge (NULL if not completed)
  - score (INTEGER): User's performance score for the session
  - time_taken_seconds (INTEGER): Actual time taken to complete the challenge
  - game_data (JSON): Stores challenge-specific gameplay state and progress
  - created_at (TIMESTAMP): Audit trail for session creation
  - updated_at (TIMESTAMP): Audit trail for session state changes

- **tutorial_progress**: Tracks user progress through Quick Play Mode tutorial for completion analytics.

  - id (Primary Key)
  - user_id (Foreign Key to users): Links tutorial progress to specific user
  - step_number (INTEGER): Current tutorial step (1-3 based on wireframe requirements)
  - completed (BOOLEAN): Whether user completed the entire tutorial
  - skipped (BOOLEAN): Whether user chose to skip the tutorial
  - completed_at (TIMESTAMP): When tutorial was completed or skipped
  - created_at (TIMESTAMP): When tutorial was first started
  - updated_at (TIMESTAMP): Audit trail for progress updates

- **user_feedback**: Stores technical issue reports and user feedback for Quick Play Mode.
  - id (Primary Key)
  - user_id (Foreign Key to users): User who submitted the feedback
  - session_id (Foreign Key to quick_play_sessions): Related session if feedback is about specific gameplay
  - feedback_type (TEXT): Type of feedback (technical_issue, bug_report, suggestion)
  - description (TEXT): User's description of the issue or feedback
  - priority (TEXT): System-assigned priority (low, medium, high, critical)
  - status (TEXT): Processing status (submitted, in_review, resolved, closed)
  - created_at (TIMESTAMP): When feedback was submitted
  - updated_at (TIMESTAMP): When feedback status was last updated

## SQL DDL (SQLite 3.40+)

```sql
-- Data model for Quick Play Mode
-- Generated from PRD functional requirements and user stories
-- Optimized for SQLite 3.40+ with JSON1 extension

-- Create challenges table to store available quick play challenges
CREATE TABLE challenges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    estimated_duration_minutes INTEGER NOT NULL CHECK (estimated_duration_minutes BETWEEN 2 AND 5),
    difficulty_level TEXT NOT NULL CHECK (difficulty_level IN ('Easy', 'Medium', 'Hard')),
    instructions TEXT NOT NULL,
    metadata JSON DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create quick_play_sessions table to track gameplay sessions
CREATE TABLE quick_play_sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    challenge_id INTEGER NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
    session_token TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'started' CHECK (status IN ('started', 'in_progress', 'completed', 'abandoned', 'error')),
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    score INTEGER DEFAULT 0,
    time_taken_seconds INTEGER NULL,
    game_data JSON DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tutorial_progress table to track tutorial completion
CREATE TABLE tutorial_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    step_number INTEGER NOT NULL CHECK (step_number BETWEEN 1 AND 3),
    completed BOOLEAN DEFAULT FALSE,
    skipped BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id) -- Each user should have only one tutorial progress record
);

-- Create user_feedback table to store issue reports and feedback
CREATE TABLE user_feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_id INTEGER NULL REFERENCES quick_play_sessions(id) ON DELETE SET NULL,
    feedback_type TEXT NOT NULL CHECK (feedback_type IN ('technical_issue', 'bug_report', 'suggestion')),
    description TEXT NOT NULL,
    priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
    status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'in_review', 'resolved', 'closed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create performance indexes based on expected query patterns from user stories
-- Index for fast challenge selection (US-3: Select and Play a Challenge)
CREATE INDEX idx_challenges_active_sort ON challenges(is_active, sort_order) WHERE is_active = TRUE;
CREATE INDEX idx_challenges_difficulty ON challenges(difficulty_level, is_active) WHERE is_active = TRUE;
CREATE INDEX idx_challenges_duration ON challenges(estimated_duration_minutes, is_active) WHERE is_active = TRUE;

-- Index for user session lookups and analytics (supports 500ms response time requirement)
CREATE INDEX idx_sessions_user_id ON quick_play_sessions(user_id, created_at DESC);
CREATE INDEX idx_sessions_challenge_id ON quick_play_sessions(challenge_id, completed_at);
CREATE INDEX idx_sessions_token ON quick_play_sessions(session_token);
CREATE INDEX idx_sessions_status_started ON quick_play_sessions(status, started_at) WHERE status IN ('started', 'in_progress');

-- Index for tutorial analytics and completion tracking
CREATE INDEX idx_tutorial_user_completion ON tutorial_progress(user_id, completed, skipped);

-- Index for feedback management and prioritization
CREATE INDEX idx_feedback_status_priority ON user_feedback(status, priority, created_at);
CREATE INDEX idx_feedback_user_id ON user_feedback(user_id, created_at DESC);

-- Create trigger to automatically update updated_at timestamps
CREATE TRIGGER update_challenges_timestamp
    AFTER UPDATE ON challenges
    BEGIN
        UPDATE challenges SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

CREATE TRIGGER update_sessions_timestamp
    AFTER UPDATE ON quick_play_sessions
    BEGIN
        UPDATE quick_play_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

CREATE TRIGGER update_tutorial_timestamp
    AFTER UPDATE ON tutorial_progress
    BEGIN
        UPDATE tutorial_progress SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

CREATE TRIGGER update_feedback_timestamp
    AFTER UPDATE ON user_feedback
    BEGIN
        UPDATE user_feedback SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

-- Create trigger to automatically expire session tokens after 24 hours (security requirement)
CREATE TRIGGER expire_old_sessions
    AFTER INSERT ON quick_play_sessions
    BEGIN
        UPDATE quick_play_sessions
        SET status = 'abandoned'
        WHERE status IN ('started', 'in_progress')
        AND datetime(started_at, '+24 hours') < datetime('now');
    END;

-- Add table and column comments for documentation
-- Note: SQLite doesn't support COMMENT syntax, but these would be the intended comments:
-- challenges: Stores available quick play challenges with metadata and difficulty levels
-- quick_play_sessions: Tracks individual gameplay sessions for analytics and recovery
-- tutorial_progress: Tracks user tutorial completion for onboarding analytics
-- user_feedback: Stores technical issues and user feedback for continuous improvement
```

## Data Model Rationale

**Key Design Decisions:**

- **JSON Storage for Flexibility**: Used JSON columns for challenge metadata and game_data to accommodate different challenge types without schema changes, leveraging SQLite 3.40+ JSON1 extension for efficient querying.

- **Session Token Management**: Implemented secure session tokens with automatic expiration after 24 hours via triggers, supporting the security requirement for session management and enabling seamless session recovery.

- **Normalized Challenge Design**: Separated challenges from sessions to enable efficient challenge browsing (read-heavy operations) while maintaining data integrity and supporting the filtering requirements by time and difficulty.

- **Tutorial Progress Tracking**: Created dedicated tutorial_progress table with UNIQUE constraint on user_id to ensure each user has only one tutorial record, supporting the 70% completion rate analytics requirement.

**Performance Considerations:**

- **Partial Indexes**: Used partial indexes with WHERE clauses on active challenges and in-progress sessions to optimize the most common queries while reducing index size and maintenance overhead.

- **Composite Indexes**: Created composite indexes on frequently queried field combinations (user_id + created_at, status + priority) to support sub-500ms response times for challenge selection and session management.

- **Read Optimization**: Designed indexes to support read-heavy operations like challenge selection and leaderboard queries, with sort_order on challenges table for efficient display ordering.

**Future Extensibility:**

- **JSON Metadata Fields**: The flexible JSON storage in challenges.metadata and sessions.game_data allows for easy addition of new challenge types and gameplay mechanics without schema migrations.

- **Extensible Status Enums**: Status fields use CHECK constraints that can be easily expanded to support additional states like 'paused', 'multiplayer', or 'tournament' modes.

- **Feedback System Foundation**: The user_feedback table provides a foundation for implementing more sophisticated feedback categorization, automated issue routing, and user satisfaction tracking.

- **Analytics Ready**: The schema captures all necessary data points for advanced analytics including completion rates, time-to-completion distributions, difficulty progression patterns, and user engagement metrics.

**Data Privacy & Retention Compliance:**

- **Minimal PII Collection**: Schema focuses on gameplay data rather than personal information, with only necessary foreign key references to existing users table.

- **90-Day Retention Support**: Session and feedback timestamps enable automated cleanup procedures to maintain 90-day retention policy for analytics data while preserving user privacy.

- **Secure Token Management**: Session tokens are designed to expire automatically, and the schema supports secure session management without storing sensitive authentication data.

**API Endpoints from Step 8:**

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

</context>

<role>
You are a Principal Product Manager responsible for creating the final, authoritative Product Requirements Document that will guide the entire development process and serve as the foundation for BDD/TDD implementation.
</role>

<action>
Synthesize all provided outputs into a single, comprehensive PRD document that serves as the definitive source of truth for development. This document must be optimized for the next phase: translating user stories into BDD scenarios and TDD implementation.

### Integration Guidelines:

- Incorporate any remaining technical risk mitigations from Step 6 into relevant sections
- Ensure user stories align with functional requirements and technical specifications
- Add executive summary and project timeline sections
- Include technical appendices for data model and API specifications
- Resolve any scope or requirement conflicts between technical specifications and PRD
- Ensure all user stories are clearly defined for BDD scenario generation
- Provide clear traceability from business requirements to technical implementation

### BDD/TDD Preparation:

- Ensure user stories have clear, testable acceptance criteria
- Provide sufficient technical detail for test design
- Include performance and security requirements needed for comprehensive testing
- Maintain clear scope boundaries to guide test coverage decisions

</action>

<format>
Create a complete PRD document using this structure:

# Product Requirements Document: [Feature Name]

## Executive Summary

- **Project Overview:** [2-3 sentences summarizing the feature and its value]
- **Success Metrics:** [Key KPIs with baseline and target values]
- **Timeline:** [Development timeline and key milestones]
- **Implementation Approach:** [Brief overview of technical approach]

## 1. Problem Statement

[From Step 1, refined based on risk analysis]

## 2. Proposed Solution

[From Step 1, enhanced with technical feasibility insights]

## 3. Goals and Success Metrics

[From Step 1, validated against risk analysis with specific, measurable targets]

## 4. Target User and Use Cases

[Synthesized from user stories and persona context]

## 5. User Stories and Acceptance Criteria

[From Step 2, prioritized and refined - optimized for BDD scenario generation]

## 6. Functional Requirements

[From Step 4, cross-referenced with user stories and technical specifications]

## 7. Non-Functional Requirements

[From Step 5, enhanced with technical risk mitigations]

## 8. User Interface Requirements

[From Step 5, with design considerations and wireframe descriptions]

## 9. Technical Architecture

### 9.1 Data Model Overview

[High-level explanation of data entities and relationships for non-technical stakeholders]

### 9.2 API Design Overview

[Summary of API approach and key endpoints for business context]

## 10. Out of Scope / Future Considerations

[From Step 4, expanded with risk analysis insights]

## 11. Technical Risk Assessment and Mitigation

[From Step 6 - technical risks that the development team should be aware of]

## 12. Implementation Readiness

[From Step 6, with clear go/no-go criteria and development prerequisites]

## 13. Success Criteria and Testing Strategy

[Based on acceptance criteria and NFRs - foundation for BDD/TDD approach]

## 14. Development Guidelines

[Key principles and constraints for development team]

## Appendices

### Appendix A: Complete Data Model DDL

[From Step 7 - full technical specification]

### Appendix B: Complete API Endpoint Reference

[From Step 8 - full technical specification]

### Appendix C: Technical Risk Log and Mitigation Strategies

[Technical risk analysis from Step 6 for development team reference]

### Appendix D: Traceability Matrix

[Mapping from user stories to functional requirements to technical implementation]

</format>

<tone>
Professional, comprehensive, and authoritative. This document should serve as the single source of truth for all stakeholders and provide clear guidance for BDD/TDD implementation.
</tone>

<definition_of_done>

- All outputs from previous steps are integrated coherently
- No conflicts exist between different sections
- The document flows logically from business case to technical implementation
- Technical specifications are properly contextualized for non-technical stakeholders
- Risk mitigations are incorporated into relevant sections
- User stories are clearly defined with testable acceptance criteria for BDD generation
- The document is ready for stakeholder review and development kickoff
- Technical appendices provide complete specifications for development team
- Document includes clear traceability from business requirements to implementation
- Success criteria are specific and measurable for testing validation

</definition_of_done>
