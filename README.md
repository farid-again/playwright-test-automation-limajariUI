# Keycloak Login Automation Testing

Automation testing for Keycloak login using Playwright with Page Object Model pattern.

## 🚀 Features

- **Page Object Model (POM)** pattern for maintainable test code
- **4 Positive Test Cases** covering complete login scenarios
- **Cross-browser Support** (Chromium, Firefox, WebKit)
- **Allure Reporting** with detailed test reports
- **CI/CD Pipeline** with GitHub Actions
- **Scheduled Tests** every Tuesday 7AM and Friday 12PM UTC

## 📁 Project Structure

```
keycloak-automation-testing/
├── .github/workflows/
│   └── ci.yml                     # GitHub Actions workflow
├── tests/
│   ├── fixtures/
│   │   └── testFixtures.js       # Test fixtures and data
│   ├── pages/
│   │   └── KeycloakLoginPage.js  # Page Object for Keycloak
│   └── keycloak-login-positive.spec.js  # Test cases
├── utils/
│   └── testHelpers.js            # Utility functions
├── package.json                  # Dependencies and scripts
├── playwright.config.js          # Playwright configuration
└── README.md                     # This file
```

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>
cd keycloak-automation-testing

# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

## 🧪 Running Tests

### Local Testing

```bash
# Run all tests
npm test

# Run specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run with visible browser
npm run test:headed

# Run in debug mode
npm run test:debug

# Run with UI mode
npm run test:ui
```

### Allure Reporting

```bash
# Run tests with Allure reporter
npm run test:allure

# Generate Allure report
npm run allure:generate

# Open Allure report
npm run allure:open
```

## 📊 CI/CD Pipeline

### GitHub Actions Schedule

The automation tests are configured to run automatically:

- **Every Tuesday at 7:00 AM UTC** (2:00 PM WIB)
- **Every Friday at 12:00 PM UTC** (7:00 PM WIB)
- **Manual trigger** available via GitHub Actions UI
- **Push/PR triggers** for main and develop branches

### Test Matrix

Tests run across multiple browsers:
- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)

### Artifacts

- **Allure Reports** - Detailed test reports with history
- **Test Results** - JSON results and screenshots
- **Video Recordings** - Test execution videos on failure

## 🧪 Test Cases

### TC001 - Successful Login with Valid Credentials
✅ Verifies complete authentication flow
- Navigate to Keycloak login page
- Fill valid credentials (username: `devonebyone`, password: `Qq121212`)
- Submit login form
- Verify successful redirect to `http://localhost:3000`

### TC002 - Verify Login Page Accessibility and Elements
✅ Tests page structure and form elements
- Verify page loads correctly
- Check all form elements are visible and enabled
- Validate form field accessibility

### TC003 - Login Flow with Form Validation
✅ Tests form interaction and validation
- Clear and refill form fields
- Submit login with correct credentials
- Verify login progression

### TC004 - Complete End-to-End Authentication Flow
✅ Uses authenticatedPage fixture for pre-authenticated session
- Verifies authenticated session state
- Tests post-login page accessibility

## 🔧 Configuration

### Environment Variables

```bash
# Test Credentials
KEYCLOAK_USERNAME=devonebyone
KEYCLOAK_PASSWORD=Qq121212
KEYCLOAK_URL=https://keycloak-dev.logistical.one/realms/lq/protocol/openid-connect/auth?client_id=loglines-fe&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%23%2Flogin%3F&state=66f1cf3b-ee9f-41da-a5a1-8f2423bbbdb2&response_mode=fragment&response_type=code&scope=openid&nonce=baca162c-a37e-4573-8ed9-49a37503f2c1&code_challenge=q5Z1up1GgLRkmIqcjHRSreZgdURHQ72I2ti_k5pyQhI&code_challenge_method=S256
```

### Playwright Configuration

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Retries**: 2 (CI), 0 (local)
- **Reporters**: HTML, JSON, Allure
- **Screenshots**: On failure
- **Video**: On failure
- **Trace**: On first retry

## 📈 Allure Report Features

- **Test History**: Track test results over time
- **Detailed Logs**: Step-by-step execution details
- **Screenshots**: Visual evidence of test execution
- **Timeline**: Performance metrics and timing
- **Categories**: Group tests by functionality
- **Environment Info**: Browser and system details

## 🚀 Deployment

### GitHub Pages

Allure reports are automatically deployed to GitHub Pages when:
- Tests run on `main` branch
- Report generation is successful
- GitHub Pages is enabled in repository settings

Access reports at: `https://<username>.github.io/<repository>/allure-report`

## 📝 Development

### Adding New Tests

1. Create test functions in appropriate `.spec.js` files
2. Use Page Object Model for element interactions
3. Follow naming convention: `TC### - Description`
4. Include proper assertions and error handling
5. Test across all supported browsers

### Page Object Model

```javascript
// Example usage
const keycloakPage = new KeycloakLoginPage(page);
await keycloakPage.navigateToLogin(authUrl);
await keycloakPage.login(username, password);
await keycloakPage.verifySuccessfulLogin();
```

## 🐛 Troubleshooting

### Common Issues

1. **Browser Installation**: Run `npm run install:browsers`
2. **Test Failures**: Check screenshots and videos in artifacts
3. **Allure Issues**: Ensure `allure-commandline` is installed globally
4. **CI Failures**: Check GitHub Actions logs and artifacts

### Debug Mode

```bash
# Run with debugging
npm run test:debug

# Or use VS Code debugging
npm run test:ui
```

## 📞 Support

For issues and questions:
- Check GitHub Issues
- Review test artifacts
- Consult Allure reports
- Review workflow logs

## 📄 License

ISC License - Free to use, modify, and distribute.
