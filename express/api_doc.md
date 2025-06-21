# API Testing Guide


## Test Cases:

### 1. Test GET endpoint with correct headers:
```bash
curl -X GET http://localhost:3000/api/users \
  -H "User-id: ifabula" \
  -H "Scope: user"
```

**Expected Response:**
```json
{
  "responseCode": 200,
  "responseMessage": "SUCCESS",
  "data": [
    {"id": 1, "name": "John Doe", "email": "john@example.com"},
    {"id": 2, "name": "Jane Smith", "email": "jane@example.com"}
  ]
}
```

### 2. Test POST endpoint with correct headers:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -H "User-id: ifabula" \
  -H "Scope: user" \
  -d '{"name":"New User","email":"newuser@example.com"}'
```

**Expected Response:**
```json
{
  "responseCode": 201,
  "responseMessage": "USER CREATED SUCCESSFULLY",
  "data": {
    "id": 1703123456789,
    "name": "New User",
    "email": "newuser@example.com",
    "createdAt": "2023-12-20T15:30:45.123Z"
  }
}
```

### 3. Test with wrong headers (should return 401):
```bash
curl -X GET http://localhost:3000/api/users \
  -H "User-id: wrong" \
  -H "Scope: user"
```

**Expected Response:**
```json
{
  "responseCode": 401,
  "responseMessage": "UNAUTHORIZED"
}
``` 