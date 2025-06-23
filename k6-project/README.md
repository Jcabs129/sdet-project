# K6 Performance Testing Project

This project contains performance tests using K6 for API testing against the reqres.in API.

## Project Structure

```
src/
├── APIs/
│   └── api-function.ts    # API endpoint functions
├── tests/
│   └── k6.ts             # Main test script
├── types/
│   └── responseCodes.ts  # Response code constants
└── utils/
    └── helpers.ts        # Helper functions
```

## Prerequisites

- Node.js (v14 or higher)
- K6 installed globally

## Installation

1. Install K6:
```bash
# macOS
brew install k6

# Docker
docker pull grafana/k6
```

2. Install project dependencies:
```bash
npm install
```

## Running Tests

To run the performance tests:

```bash
k6 run src/tests/k6.ts
```

## Test Configuration

The test script is configured with:
- Duration: 15 seconds
- Virtual Users: 5

You can modify these settings in `src/tests/k6.ts`:

```typescript
export const options = {
    duration: '15s',
    vus: 5
}
```

## API Endpoints Tested

1. GET /users - Fetch user list
2. GET /users/{id} - Get user by ID
3. POST /login - User login
4. POST /register - User registration


## Material
https://medium.com/@sebastian.southern/performance-testing-in-typescript-with-k6-a65377f547e6
https://reqres.in/api-docs/
https://reqres.in/
https://github.com/Jahmilli/k6-example/blob/main/README.md