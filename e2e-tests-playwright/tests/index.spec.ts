import { test } from '../fixtures/pom/test-options';



test.describe('james test', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLogin('standard_user', 'secret_sauce');
    });

    test('saucelabsdemo test james', async ({ inventoryPage }) => {
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
    });
});