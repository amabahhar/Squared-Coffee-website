---
name: handling-application-errors
description: Master error handling patterns across languages including exceptions, Result types, error propagation, and graceful degradation to build resilient applications. Use when implementing error handling, designing APIs, or improving application reliability.
---

# Error Handling Patterns

Build resilient applications with robust error handling strategies that gracefully handle failures and provide excellent debugging experiences.

## When to use this skill
- Implementing error handling in new features.
- Designing error-resilient APIs.
- Debugging production issues.
- Improving application reliability.
- Creating better error messages for users and developers.
- Implementing retry and circuit breaker patterns.
- Handling async/concurrent errors.
- Building fault-tolerant distributed systems.

## Workflow
- [ ] Identify the error category (Recoverable vs. Unrecoverable).
- [ ] Choose the appropriate philosophy (Exceptions vs. Result Types).
- [ ] Consult language-specific patterns in `resources/`.
- [ ] Implement robust error handling (Retry, Backoff, or Fallbacks).
- [ ] Validate implementation with a "Fail Fast" approach.

## Core Philosophies

### 1. Exceptions vs. Result Types
- **Exceptions**: Traditional try-catch, disrupts control flow. Best for unexpected/exceptional conditions.
- **Result Types**: Explicit success/failure, functional approach. Best for expected errors (e.g., validation).
- **Option/Maybe**: For nullable values.

### 2. Error Categories
- **Recoverable**: Network timeouts, missing files, invalid user input, rate limits.
- **Unrecoverable**: Out of memory, stack overflow, programming bugs.

## Reference Documentation

Depending on the language or pattern you are implementing, consult the specific resource files below:

### Language-Specific Patterns
- **[Python Patterns](resources/python-patterns.md)**: Custom Exception Hierarchy, Context Managers, Retry Decorators.
- **[TypeScript/JS Patterns](resources/typescript-patterns.md)**: Custom Error Classes, Result type pattern, Async error handling.
- **[Rust Patterns](resources/rust-patterns.md)**: Result/Option types, `?` operator, Custom Enums.
- **[Go Patterns](resources/go-patterns.md)**: Explicit error returns, Sentinel errors, Error wrapping.

### Universal Strategies
- **[Universal Patterns](resources/universal-patterns.md)**: Circuit Breaker, Error Aggregation, Graceful Degradation.
