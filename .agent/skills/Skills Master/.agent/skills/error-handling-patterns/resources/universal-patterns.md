# Universal Error Handling Patterns

### Pattern 1: Circuit Breaker
Prevents cascading failures in distributed systems by rejecting requests when a service is failing.

```python
class CircuitBreaker:
    def call(self, func: Callable[[], T]) -> T:
        if self.state == CircuitState.OPEN:
            if datetime.now() - self.last_failure_time > self.timeout:
                self.state = CircuitState.HALF_OPEN
            else:
                raise Exception("Circuit breaker is OPEN")
        # ... logic to track success/failure
```

### Pattern 2: Error Aggregation
Collect multiple errors instead of failing on the first one (e.g., in form validation).

```typescript
class ErrorCollector {
  private errors: Error[] = [];
  add(error: Error): void { this.errors.push(error); }
  throw(): never {
    throw new AggregateError(this.errors, `${this.errors.length} errors occurred`);
  }
}
```

### Pattern 3: Graceful Degradation
Provide fallback functionality when errors occur.

```python
def with_fallback(primary, fallback):
    try:
        return primary()
    except Exception:
        return fallback()
```
### Best Practices
- **Fail Fast**: Validate input early.
- **Preserve Context**: Include stack traces and metadata.
- **Meaningful Messages**: Explain what happened and how to fix it.
- **Don't Swallow Errors**: Log or re-throw.
