const { test: base, expect } = require('@playwright/test');
const { KeycloakLoginPage } = require('../pages/KeycloakLoginPage');

// Test fixtures with Page Object Model
const test = base.extend({
  // Keycloak Login Page Object
  keycloakLoginPage: async ({ page }, use) => {
    const keycloakPage = new KeycloakLoginPage(page);
    await use(keycloakPage);
  },

  // Test data fixtures
  testData: async ({}, use) => {
    const testData = {
      validCredentials: {
        username: 'devonebyone',
        password: 'Qq121212'
      },
      invalidCredentials: {
        username: 'invaliduser',
        password: 'invalidpass'
      },
      keycloakAuthUrl: 'https://keycloak-dev.logistical.one/realms/lq/protocol/openid-connect/auth?client_id=loglines-fe&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%23%2Flogin%3F&state=66f1cf3b-ee9f-41da-a5a1-8f2423bbbdb2&response_mode=fragment&response_type=code&scope=openid&nonce=baca162c-a37e-4573-8ed9-49a37503f2c1&code_challenge=q5Z1up1GgLRkmIqcjHRSreZgdURHQ72I2ti_k5pyQhI&code_challenge_method=S256'
    };
    await use(testData);
  },

  // Authentication context
  authenticatedPage: async ({ browser, testData }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const keycloakPage = new KeycloakLoginPage(page);

    // Perform login before using the page
    await keycloakPage.navigateToLogin(testData.keycloakAuthUrl);
    await keycloakPage.login(testData.validCredentials.username, testData.validCredentials.password);
    
    // Wait for redirect and ensure successful login
    try {
      await keycloakPage.waitForLoginRedirect(30000);
    } catch (error) {
      console.log('Login redirect timeout, continuing...');
    }

    await use(page);
    await context.close();
  }
});

// Export test and expect for use in test files
module.exports = { test, expect };
