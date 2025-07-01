# Playwright E2E Boilerplate

## Folder Structure
```
/playwright-project
├── tests/                # Test specs
├── pageObjects/          # Page Object Model
├── fixtures/             # Custom test fixtures
├── utils/                # Helpers (faker, waiters, formatters, constants, static test data)
├── utils/test-data.json  # Role-specific static test data used alongside dynamic faker data
├── apis/                 # API request wrappers
├── config/               # Environment files
├── reports/              # Reports (Allure, HTML)
├── auth/                 # Storage state files
├── .env                  # Default .env with ENV_FILE
├── .gitignore            # Ignore .env and node_modules
├── sample.env            # Sample config for onboarding
├── playwright.config.ts  # Playwright configuration
```
## Setup Playwright
```bash
npm init -y  # Initialises package.json file
npm init playwright@latest # Install playwright with all dependencies
## Run Tests
```bash
npx playwright test          # Run all tests
npx playwright test login    # Run specific file
npx playwright show-report   # View HTML report
```

## Switch Environments
Edit `.env` and change:
```
ENV_FILE=config/qa.env
```

## Dependencies
- `@playwright/test`
- `@faker-js/faker`
- `dotenv`