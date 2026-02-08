# Go Error Handling Patterns

### Explicit Error Returns
```go
func getUser(id string) (*User, error) {
    user, err := db.QueryUser(id)
    if err != nil {
        return nil, fmt.Errorf("failed to query user: %w", err)
    }
    return user, nil
}
```

### Custom Error Types
```go
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation failed for %s: %s", e.Field, e.Message)
}
```

### Error Wrapping and Unwrapping
```go
func processUser(id string) error {
    user, err := getUser(id)
    if err != nil {
        return fmt.Errorf("process user failed: %w", err)
    }
    return nil
}

// Unwrap with As
var valErr *ValidationError
if errors.As(err, &valErr) {
    fmt.Printf("Validation error: %s\n", valErr.Field)
}
```
