import { test as base } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { LoginPage } from '../../pages/LoginPage';



export type FrameworkFixtures = {
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
}

export const test = base.extend<{
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
}>({
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';
