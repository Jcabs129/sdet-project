# Supertest Project

This project demonstrates API testing using [Supertest](https://github.com/visionmedia/supertest) and [Cucumber.js](https://github.com/cucumber/cucumber-js) with feature files for behavior-driven development (BDD).

## Project Structure

- `features/` — Contains Cucumber feature files and step definitions
- `specs/` — (Optional) Additional test scripts or experiments

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. (Optional) If you add new dependencies, run `npm install <package>` as needed.

## Running the Tests

### Cucumber Feature Tests
To execute the Cucumber feature tests, run:

```sh
npm run test:e2e
```

This will run all feature files in the `features/` directory using the step definitions in `features/support/`.

### Jest Unit/API Tests
To run the Jest test in `specs/poc.spec.ts`, use:

```sh
npx jest specs/poc.spec.ts
```

**What this CLI does:**
- Runs the Jest test runner on the specified test file (`specs/poc.spec.ts`).
- Executes all test cases defined in that file and outputs the results to the console.
- Useful for running individual or specific test files without running the entire test suite.

## Scripts

- `npm run test:e2e` — Runs Cucumber.js with TypeScript step definitions
- `npx jest specs/poc.spec.ts` — Runs Jest tests in the specified file

## Example Feature File

See `features/posts.feature` for example scenarios testing the JSONPlaceholder API.

## Notes

- Make sure your step definitions match the step text in your feature files exactly.
- You can add more scenarios and step definitions as needed for your API testing.

## Material
[API Test using Supertest, Cucumber + Jest](https://medium.com/@azizzouaghia/setting-up-basic-api-testing-with-supertest-cucumber-jest-and-typescript-8c6a23c045a1)