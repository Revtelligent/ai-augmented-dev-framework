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
