import { test, expect } from '../fixtures/pom/test-options';



test.describe('james test', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLogin();
    });

    test('saucelabsdemo test james', async ({ inventoryPage }) => {
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
    });
});