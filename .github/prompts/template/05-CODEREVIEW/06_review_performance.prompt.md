---
mode: "ask"
description: "Review performance and optimization"
---

# Performance & Optimization Review

## Context

You are reviewing the performance characteristics and optimization opportunities of a TypeScript/Next.js 14+ multiplayer mind game application. Focus on database performance, frontend optimization, caching strategies, and scalability concerns.

## Review Instructions

### Before Starting

- [ ] Identify performance-critical user flows
- [ ] Review current performance metrics and benchmarks
- [ ] Understand expected load and scaling requirements
- [ ] Map data flow and identify bottlenecks

### Performance Assessment Areas

#### 1. Database Performance (Prisma)

**Query Optimization:**

- N+1 query prevention with proper includes/select
- Efficient use of Prisma's `include` vs `select`
- Proper indexing strategy validation
- Raw query usage and optimization
- Connection pooling configuration

**Prisma Best Practices:**

```typescript
// ❌ Avoid N+1 queries
for (const game of games) {
  const players = await prisma.player.findMany({
    where: { gameId: game.id },
  });
}

// ✅ Use proper includes
const games = await prisma.game.findMany({
  include: {
    players: true,
  },
});
```

**Database Schema Efficiency:**

- Proper foreign key relationships
- Index usage for common queries
- Data type optimization
- Normalization vs denormalization trade-offs

#### 2. Frontend Performance

**Bundle Size Analysis:**

- Bundle size impact of new features
- Tree-shaking effectiveness
- Code splitting implementation
- Dynamic imports for heavy components
- Third-party library optimization

**React Performance:**

- Proper use of React.memo
- useMemo and useCallback usage
- Virtual scrolling for large lists
- Component re-render minimization
- State update batching

**Next.js Optimization:**

- Server vs client component decisions
- Image optimization with next/image
- Font optimization
- Static generation vs server-side rendering choices
- App Router performance patterns

#### 3. Caching Strategy

**Client-Side Caching:**

- Browser caching headers
- Service worker implementation
- React Query/SWR usage
- LocalStorage/SessionStorage strategy
- Cache invalidation logic

**Server-Side Caching:**

- Redis cache implementation
- Next.js cache configuration
- Database query result caching
- API response caching
- CDN optimization

**Game-Specific Caching:**

```typescript
// Game state caching example
const useGameState = (gameId: string) => {
  return useQuery({
    queryKey: ["game", gameId],
    queryFn: () => fetchGameState(gameId),
    staleTime: 5000, // 5 seconds for real-time game
    refetchInterval: 1000, // Poll every second
  });
};
```

#### 4. Memory Management

**Memory Leak Prevention:**

- Event listener cleanup
- WebSocket connection management
- Timer and interval cleanup
- React useEffect cleanup
- Memory usage in long-running operations

**Efficient Data Structures:**

- Appropriate data structure choices
- Memory-efficient algorithms
- Garbage collection considerations
- Large dataset handling

#### 5. Network Performance

**API Optimization:**

- Response payload size optimization
- Pagination implementation
- GraphQL vs REST efficiency
- Request batching
- Compression usage

**Real-time Features:**

- WebSocket connection efficiency
- Message payload optimization
- Connection pooling
- Reconnection strategies
- Bandwidth usage optimization

#### 6. Rendering Performance

**Server-Side Rendering:**

- SSR vs SSG decisions
- Streaming SSR implementation
- Partial pre-rendering
- Edge function usage
- Build time optimization

**Client-Side Rendering:**

- Critical rendering path optimization
- Lazy loading implementation
- Progressive enhancement
- Skeleton loading states
- Infinite scrolling performance

## Output Format

### ⚡ Performance Strengths

**Optimization**: [Well-implemented performance feature]
**Location**: [File/Component]
**Benefit**: [Performance improvement achieved]
**Measurement**: [Metrics or benchmarks if available]

### 🐌 Performance Issues

**Issue**: [Specific performance problem]
**Location**: [File:Lines]
**Impact**: [User experience effect]
**Cause**: [Root cause analysis]
**Solution**: [Specific optimization approach]
**Expected Improvement**: [Anticipated performance gain]

### 💾 Database Performance Concerns

**Query Issue**: [Inefficient database operation]
**Location**: [File:Lines]
**Current Query**: [How it's implemented now]
**Optimized Query**: [Better implementation]
**Performance Impact**: [Expected improvement]

### 🎯 Optimization Opportunities

**Area**: [Performance improvement opportunity]
**Current Implementation**: [How it works now]
**Optimization**: [Recommended improvement]
**Effort**: [Implementation complexity]
**Priority**: [High/Medium/Low based on impact]

### 📦 Bundle Size Issues

**Problem**: [Bundle size concern]
**Cause**: [What's causing the bloat]
**Size Impact**: [KB increase]
**Solution**: [How to reduce size]
**Implementation**: [Code splitting/dynamic imports]

## Specific Performance Checks

### Database Query Analysis

```typescript
// Check for these patterns:

// ❌ N+1 Query Problem
const games = await prisma.game.findMany();
for (const game of games) {
  game.moves = await prisma.move.findMany({ where: { gameId: game.id } });
}

// ✅ Optimized with Include
const games = await prisma.game.findMany({
  include: {
    moves: {
      orderBy: { createdAt: "desc" },
      take: 10, // Only recent moves
    },
  },
});

// ✅ Further optimized with Select
const games = await prisma.game.findMany({
  select: {
    id: true,
    status: true,
    moves: {
      select: { id: true, type: true, createdAt: true },
      orderBy: { createdAt: "desc" },
      take: 10,
    },
  },
});
```

### React Performance Patterns

```typescript
// Check for proper optimization:

// ❌ Unnecessary re-renders
const GameBoard = ({ game }) => {
  const [moves, setMoves] = useState([]);

  // This causes re-render on every parent update
  const processMove = (move) => {
    // expensive operation
  };

  return <Board onMove={processMove} />;
};

// ✅ Optimized version
const GameBoard = React.memo(({ game }) => {
  const [moves, setMoves] = useState([]);

  const processMove = useCallback(
    (move) => {
      // expensive operation
    },
    [game.id]
  );

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(game.state);
  }, [game.state]);

  return <Board onMove={processMove} value={memoizedValue} />;
});
```

### Caching Implementation

```typescript
// Review caching strategies:

// ❌ No caching
export async function getGameState(gameId: string) {
  return await prisma.game.findUnique({
    where: { id: gameId },
    include: { moves: true, players: true },
  });
}

// ✅ With Redis caching
export async function getGameState(gameId: string) {
  const cacheKey = `game:${gameId}`;

  // Try cache first
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  // Fallback to database
  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: { moves: true, players: true },
  });

  // Cache for 30 seconds
  await redis.setex(cacheKey, 30, JSON.stringify(game));

  return game;
}
```

## Performance Testing Recommendations

### Frontend Performance

- [ ] Lighthouse audit scores
- [ ] Core Web Vitals measurement
- [ ] Bundle size analysis
- [ ] Memory leak detection
- [ ] Network throttling testing

### Backend Performance

- [ ] Database query performance profiling
- [ ] API response time measurement
- [ ] Load testing with multiple concurrent users
- [ ] Memory usage profiling
- [ ] Cache hit rate analysis

### Game-Specific Performance

- [ ] Real-time synchronization latency
- [ ] Concurrent player handling
- [ ] Move processing performance
- [ ] State update efficiency

## Review Questions

### Performance Questions

1. **Scalability**: How does performance change with 10x more users?
2. **Bottlenecks**: What are the current performance limiting factors?
3. **User Experience**: Do performance issues affect user satisfaction?
4. **Resource Usage**: Is the application efficiently using server resources?

### Optimization Questions

1. **Low-Hanging Fruit**: What quick wins are available?
2. **Impact vs Effort**: Which optimizations provide the best ROI?
3. **Monitoring**: How will we track performance improvements?
4. **Regression**: How do we prevent performance regressions?

## Action Items Template

### Immediate Performance Fixes

- [Critical performance issues affecting users]
- [Database queries causing timeouts]

### Optimization Opportunities

- [Caching implementations]
- [Bundle size reductions]
- [Memory leak fixes]

### Performance Monitoring

- [Metrics to track]
- [Alerting thresholds]
- [Regular performance review schedule]

---

**Performance Focus**: Optimize for the user experience while maintaining code quality and maintainability.
