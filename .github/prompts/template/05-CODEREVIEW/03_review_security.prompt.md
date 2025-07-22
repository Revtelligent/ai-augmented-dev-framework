---
mode: "agent"
description: "Review security vulnerabilities"
---

# Security & Vulnerability Assessment Review

## Context

You are conducting a security review of a TypeScript/Next.js 14+ multiplayer mind game application. Focus on identifying security vulnerabilities, potential attack vectors, and ensuring proper security measures are implemented.

## Review Instructions

## Review Instructions

### Before Starting

- [ ] Identify all user input points
- [ ] Map data flow from client to server
- [ ] Identify sensitive data handling points
- [ ] Review authentication/authorization mechanisms
- [ ] **Scan entire codebase for hardcoded secrets using search patterns**
- [ ] **Check git history for accidentally committed secrets**

### Critical Security Areas

#### 1. Injection Attacks

**SQL Injection in Prisma:**

- Check for raw SQL queries or dynamic query building
- Verify proper parameterization in `$queryRaw` and `$executeRaw`
- Look for string concatenation in queries
- Validate input sanitization before database operations

**NoSQL Injection:**

- Review dynamic query object construction
- Check for user input in query operators
- Verify proper input validation for JSON queries

**Command Injection:**

- Look for system calls or exec functions
- Check for shell command construction with user input
- Verify file path manipulation safety

#### 2. Cross-Site Scripting (XSS) Prevention

**Client-Side XSS:**

- Identify any `dangerouslySetInnerHTML` usage
- Check for direct DOM manipulation with user content
- Verify proper encoding of user-generated content
- Review URL parameter handling and display

**Server-Side Rendering:**

- Check for unescaped user input in SSR
- Verify proper sanitization in API responses
- Review template rendering with user data

#### 3. Authentication & Authorization

**JWT Security:**

- Verify JWT signature validation
- Check token expiration handling
- Review refresh token security
- Validate proper algorithm specification

**Session Management:**

- Check for secure session storage
- Verify session invalidation on logout
- Review session timeout mechanisms
- Validate secure cookie settings

**Access Control:**

- Verify proper role-based access control (RBAC)
- Check for authorization bypass vulnerabilities
- Review direct object reference protection
- Validate API endpoint protection

#### 4. Game-Specific Security

**Anti-Cheat Measures:**

- Verify server-side move validation
- Check for client-side tampering prevention
- Review game state integrity checks
- Validate proper synchronization security

**Rate Limiting:**

- Check for API rate limiting implementation
- Verify game action throttling
- Review prevention of spam/abuse
- Validate proper error handling for rate limits

#### 5. Data Protection

**Sensitive Data Exposure:**

- Check for sensitive data in client-side code
- Verify proper data masking in responses
- Review logging of sensitive information
- Validate proper error message content

**Encryption & Storage:**

- Verify proper encryption for PII
- Check database field encryption
- Review secure configuration storage
- Validate proper key management

#### 6. Secrets and API Key Management

**Hardcoded Secrets Detection:**

- Scan for API keys, tokens, and passwords in source code
- Check for database connection strings in files
- Look for third-party service credentials
- Identify encryption keys or private keys in code
- Review configuration files for exposed secrets

**Common Secret Patterns to Check:**

```typescript
// ❌ NEVER do this - secrets in code
const API_KEY = "sk-1234567890abcdef";
const DATABASE_URL = "postgresql://user:password@localhost/db";
const JWT_SECRET = "my-secret-key";
const STRIPE_SECRET = "sk_test_abc123";
const OPENAI_API_KEY = "sk-proj-xyz789";

// ❌ Also check for these patterns
const config = {
  apiKey: "AIzaSyB1234567890",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQ...",
  clientSecret: "GOCSPX-1234567890",
};

// ✅ Proper secret management
const API_KEY = process.env.API_KEY!;
const DATABASE_URL = process.env.DATABASE_URL!;
const JWT_SECRET = process.env.JWT_SECRET!;
```

**Environment Variable Security:**

- Verify secrets are only in environment variables
- Check for proper .env file exclusion in .gitignore
- Validate environment variable naming conventions
- Review development vs production secret separation
- Ensure no secrets in client-side environment variables

**Secret Scanning Checklist:**

- [ ] Search for patterns like `api_key`, `secret`, `token`, `password`
- [ ] Look for base64 encoded strings that might be secrets
- [ ] Check for URLs with embedded credentials
- [ ] Scan comments for accidentally committed secrets
- [ ] Review test files for hardcoded test credentials
- [ ] Check configuration files (JSON, YAML, etc.)
- [ ] Validate Docker files don't contain secrets

#### 7. Dependency Security

**Package Vulnerabilities:**

- Check for known vulnerabilities in dependencies
- Verify security-critical packages are updated
- Review dependency security policies
- Validate proper security header implementation

## Output Format

### 🚨 Critical Security Issues

**Vulnerability**: [Specific security issue]
**Location**: [File:Lines]
**Attack Vector**: [How it could be exploited]
**Impact**: [Data/System compromise potential]
**CVSS Score**: [If applicable]
**Fix**: [Specific remediation steps]
**Code Example**: [Secure implementation]

### 🔑 Secrets and API Key Exposures

**Secret Type**: [API key, token, password, etc.]
**Location**: [File:Lines]
**Exposed Value**: [Partial value for identification - e.g., "sk-1234..."]
**Risk Level**: [Critical/High - immediate exposure risk]
**Service Affected**: [Which service this credential accesses]
**Immediate Actions**:

- [ ] Revoke/rotate the exposed credential immediately
- [ ] Move to environment variable
- [ ] Audit logs for potential unauthorized access
- [ ] Update deployment configurations

### ⚠️ Security Concerns

**Issue**: [Potential security weakness]
**Location**: [File:Lines]
**Risk Level**: [Low/Medium/High]
**Scenario**: [When this becomes a problem]
**Mitigation**: [How to reduce risk]

### 🔒 Security Best Practices Missing

**Practice**: [Security measure not implemented]
**Location**: [Where it should be added]
**Benefit**: [Security improvement]
**Implementation**: [How to add it]

### ✅ Security Measures Found

**Good Practice**: [Positive security implementation]
**Location**: [File:Lines]
**Effectiveness**: [How well it protects]

## Specific Checks for Game Application

## Specific Checks for Game Application

### Secret Detection Patterns

**Search for these specific patterns in all files:**

```bash
# Regex patterns to look for:
- ['\"][a-zA-Z0-9_-]*[aA][pP][iI][_-]?[kK][eE][yY]['\"]?\s*[:=]\s*['\"][^'\"]+['\"]
- ['\"]sk-[a-zA-Z0-9]{20,}['\"]
- ['\"]pk_[a-zA-Z0-9]{20,}['\"]
- ['\"]AIza[a-zA-Z0-9]{35}['\"]
- ['\"]ya29\.[a-zA-Z0-9_-]{68}['\"]
- ['\"]-----BEGIN [A-Z ]+ KEY-----['\"]
- postgresql://[^:]+:[^@]+@
- mongodb://[^:]+:[^@]+@
- Bearer [a-zA-Z0-9_-]+
- Basic [a-zA-Z0-9+/=]+
```

**File Types to Check:**

- [ ] All .ts, .js, .tsx, .jsx files
- [ ] Configuration files (.json, .yaml, .yml)
- [ ] Environment example files (.env.example)
- [ ] Docker files and docker-compose files
- [ ] Test files (may contain test credentials)
- [ ] Documentation files (.md, .txt)
- [ ] Build scripts and package.json scripts
- [ ] CI/CD configuration files

**Common Secret Names to Search:**

- `API_KEY`, `OPENAI_KEY`, `STRIPE_KEY`
- `SECRET`, `JWT_SECRET`, `SESSION_SECRET`
- `TOKEN`, `ACCESS_TOKEN`, `REFRESH_TOKEN`
- `PASSWORD`, `PASS`, `PWD`
- `PRIVATE_KEY`, `PUBLIC_KEY`, `CERT`
- `DATABASE_URL`, `DB_URL`, `CONNECTION_STRING`
- Service-specific: `GITHUB_TOKEN`, `SLACK_TOKEN`, etc.

### Input Validation

- [ ] All user inputs validated and sanitized
- [ ] Game moves validated server-side
- [ ] File uploads (if any) properly secured
- [ ] URL parameters sanitized

### Authentication Flow

- [ ] Login/logout process secure
- [ ] Password handling follows best practices
- [ ] Multi-factor authentication considered
- [ ] Account lockout mechanisms

### Data Security

- [ ] User data encrypted at rest
- [ ] Communications encrypted in transit
- [ ] Game state tampering prevented
- [ ] Player privacy protected

### Infrastructure Security

- [ ] Security headers implemented
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] API endpoints properly protected

## Review Questions

1. **Trust Boundaries**: Where does user input enter the system and how is it validated?
2. **Attack Surface**: What are all the ways an attacker could interact with the application?
3. **Data Flow**: How does sensitive data move through the system?
4. **Privilege Escalation**: Can users access data or functions they shouldn't?
5. **Game Integrity**: How is cheating prevented and detected?

## Security Testing Recommendations

### Immediate Actions

- [ ] **URGENT**: Run automated secret scanning tools (TruffleHog, GitLeaks, or GitHub secret scanning)
- [ ] Search codebase for common secret patterns using regex
- [ ] Check git history for accidentally committed secrets
- [ ] Verify .env files are in .gitignore
- [ ] Validate environment variable usage in production
- [ ] Review client-side code for accidentally exposed server secrets

### Comprehensive Testing

- [ ] Penetration testing on critical flows
- [ ] Security code review with security team
- [ ] Game-specific cheat testing
- [ ] Load testing for DoS resistance
- [ ] **Secret scanning in CI/CD pipeline**

---

**Security Mindset**: Assume the worst intentions and validate every trust boundary.
