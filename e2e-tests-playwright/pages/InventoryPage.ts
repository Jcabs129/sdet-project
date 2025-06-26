import { Page, Locator, expect} from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  get inventoryItemName () {
    return this.page.getByTestId('#inventory-item-description')
  }

  get addCartButton () {
    return this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  get inventoryItemPrice () {
    return this.page.getByTestId('inventory-item-price');
  }

  get inventoryItemDescription () {
    return this.page.getByTestId('inventory-item-desc');
  }

  get inventoryItemImage () {
    return this.page.getByRole('img');
  }

  get shoppingCartBadge () {
    return this.page.getByTestId('shopping-cart-badge');
  }

  get removeFromCartBtn () {
    return this.page.locator('#remove-sauce-labs-backpack');
  }

  async addItemToCart(): Promise<void> {
    await this.addCartButton
    await expect(this.shoppingCartBadge).toBeVisible();
  }

  async removeItemFromCart(): Promise<void> {
    await this.removeFromCartBtn.click();
    await expect(this.shoppingCartBadge).toBeHidden();
  }

  }