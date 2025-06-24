
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('SwagLabsNegativeLogin_2025-06-24', async ({ page, context }) => {
  
    // Navigate to URL
    await page.goto('https://www.saucedemo.com/');

    // Fill input field
    await page.fill('#user-name', 'locked_out_user');

    // Fill input field
    await page.fill('#password', 'secret_sauce');

    // Click element
    await page.click('#login-button');
});