# Playwright E2E Test Suite

This folder contains end-to-end (E2E) tests for the application using [Playwright](https://playwright.dev/).

## Table of Contents
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Page Object Model](#page-object-model)
- [Fixtures](#fixtures)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Project Structure

```
e2e-tests-playwright/
  ├── fixtures/      # Shared test data, setup, and teardown logic
  │     └── pom/     # Page Object Model related fixtures and options
  ├── pages/         # Page Object Model classes for each app page
  └── tests/         # Test files and test suites
```

## Setup

1. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
2. **Ensure Playwright is installed:**
   ```bash
   npx playwright install
   ```

## Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```
- **Run a specific test file:**
  ```bash
  npx playwright test tests/example.spec.ts
  ```
- **View test report:**
  ```bash
  npx playwright show-report
  ```

## Writing Tests

- Place new test files in the `tests/` directory.
- Use the Page Object classes from `pages/` to interact with the app.
- Example test:
  ```ts
  import { test } from '@playwright/test';
  import { LoginPage } from '../pages/LoginPage';

  test('user can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    // Add assertions here
  });
  ```

## Page Object Model

- Each page class encapsulates selectors and actions for a specific page.
- Update locators in one place if the UI changes.
- Promotes maintainability and readability.

## Fixtures

- Use fixtures for shared setup, teardown, or test data.
- Place reusable logic in the `fixtures/` directory.

## Best Practices
- Keep tests independent and idempotent.
- Use descriptive test names.
- Prefer Page Object methods over direct selectors in tests.
- Clean up state after tests if needed.

## Troubleshooting
- Use `npx playwright codegen` to record new tests.
- Check Playwright docs for [common issues](https://playwright.dev/docs/faq).
- Use `--debug` or `--headed` flags to debug tests interactively.

---

## Material
- [Building Playwright Framework Step by Step (Initial Setup) - dev.to](https://dev.to/idavidov13/building-playwright-framework-step-by-step-initial-setup-3iba)
- [AI-Driven Test Automation with Playwright MCP Server & CursorAI - Medium](https://medium.com/@sumit.somanchd/ai-driven-test-automation-with-playwright-mcp-server-cursorai-c974f2d6b191)
- [MCP Playwright Example Project - GitHub](https://github.com/executeautomation/mcp-playwright)