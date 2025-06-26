import { test } from '../fixtures/pom/test-options';



test.describe('james test', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLogin('standard_user', 'secret_sauce');
    });

    test('Add item to cart', async ({ inventoryPage }) => {
        await inventoryPage.addItemToCart();
    });


    test('remove item from cart', async ({ inventoryPage }) => {
        await inventoryPage.removeItemFromCart();
    });
});