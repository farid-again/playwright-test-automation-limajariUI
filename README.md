# Keycloak Login Automation Testing

This project provides automated testing for Keycloak login functionality using Playwright with the Page Object Model (POM) pattern.

## 📋 Project Overview

- **Framework**: Playwright
- **Language**: JavaScript
- **Pattern**: Page Object Model (POM)
- **Target**: Keycloak Authentication System
- **Test Type**: End-to-End (E2E) Authentication Testing

## 🏗️ Project Structure

```
├── playwright.config.js          # Playwright configuration
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
├── tests/
│   ├── fixtures/
│   │   └── testFixtures.js       # Test fixtures and test data
│   ├── pages/
│   │   └── KeycloakLoginPage.js  # Page Object for Keycloak login
│   └── keycloak-login-positive.spec.js  # Positive login test cases
└── utils/
    └── testHelpers.js            # Utility functions for testing
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Install Playwright browsers**:
   ```bash
   npm run install:browsers
   ```

## 🧪 Running Tests

### Available Test Commands

- **Run all tests**:
  ```bash
  npm test
  ```

- **Run tests in headed mode (visible browser)**:
  ```bash
  npm run test:headed
  ```

- **Run tests with UI mode**:
  ```bash
  npm run test:ui
  ```

- **Debug tests**:
  ```bash
  npm run test:debug
  ```

- **Run specific browser tests**:
  ```bash
  npm run test:chromium
  npm run test:firefox
  npm run test:webkit
  ```

- **View test report**:
  ```bash
  npm run test:report
  ```

## 📝 Test Cases

### Positive Flow Tests

1. **TC001 - Successful login with valid credentials**
   - Tests complete login flow with valid username/password
   - Verifies successful authentication and redirect

2. **TC002 - Verify login page accessibility and elements**
   - Validates all form elements are present and visible
   - Checks page accessibility and form field attributes

3. **TC003 - Login flow with form validation**
   - Tests form clearing, refilling, and submission
   - Validates form interaction behaviors

4. **TC004 - Complete end-to-end authentication flow**
   - Uses authenticated fixture for pre-authenticated testing
   - Verifies session persistence and page accessibility

## 🔧 Configuration

### Test Data

Valid credentials are configured in `tests/fixtures/testFixtures.js`:
- **Username**: `devonebyone`
- **Password**: `Qq121212`
- **Auth URL**: Keycloak development environment

### Browser Support

- Chromium (Chrome-based)
- Firefox
- WebKit (Safari-based)

## 📊 Reports

Test results are generated in:
- **HTML Report**: `playwright-report/index.html`
- **Screenshots**: `tests/screenshots/` (on failure)
- **Videos**: `test-results/` (on failure)
- **Traces**: `test-results/` (on retry)

## 🛠️ Page Object Model

### KeycloakLoginPage

Located in `tests/pages/KeycloakLoginPage.js`, provides methods for:
- Navigation to login page
- Form interaction (username, password, login button)
- Login verification and error handling
- Session management

### Key Methods

- `navigateToLogin(authUrl)` - Navigate to Keycloak auth page
- `login(username, password)` - Complete login process
- `verifyLoginPageLoaded()` - Verify page is ready
- `verifySuccessfulLogin()` - Check authentication success

## 🔍 Debugging

### Debug Mode
```bash
npm run test:debug
```

### Headed Mode (Visible Browser)
```bash
npm run test:headed
```

### UI Mode (Interactive Testing)
```bash
npm run test:ui
```

## 📝 Adding New Tests

1. Create new test file in `tests/` directory
2. Use the test fixtures from `tests/fixtures/testFixtures.js`
3. Import and use Page Objects from `tests/pages/`
4. Follow the existing test structure and naming conventions

### Example Test Structure
```javascript
const { test, expect } = require('../fixtures/testFixtures');
const { KeycloakLoginPage } = require('../pages/KeycloakLoginPage');

test.describe('New Test Suite', () => {
  test('New test case', async ({ page, testData }) => {
    const keycloakPage = new KeycloakLoginPage(page);
    // Test implementation
  });
});
```

## 🐛 Troubleshooting

### Common Issues

1. **Browser not installed**: Run `npm run install:browsers`
2. **Timeout issues**: Increase timeout in `playwright.config.js`
3. **Authentication failures**: Verify credentials and URL configuration
4. **Element not found**: Check selectors in Page Object

### Logs and Debugging

- Enable verbose logging with `DEBUG=pw:api npm test`
- Check test results directory for detailed logs
- Use Playwright Inspector for debugging: `npx playwright codegen`

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Keycloak Documentation](https://www.keycloak.org/documentation)

## 🤝 Contributing

1. Follow existing code patterns
2. Add tests for new functionality
3. Update documentation
4. Use descriptive commit messages

## 📄 License

ISC License
