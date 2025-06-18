import { test as base } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { LoginPage } from '../../pages/LoginPage';

export const test = base.extend<{
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
}>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});