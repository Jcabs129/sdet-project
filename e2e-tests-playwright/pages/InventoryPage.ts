import { Page, Locator, expect} from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  get inventoryItem () {
    return this.page.getByTestId('inventory-item-name');
  }

  get addCartButton () {
    return this.page.getByRole('button');
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

  async addItemToCart(itemName: string) {
    await this.inventoryItem.filter({ hasText: itemName }).click();
    await this.addCartButton.filter({ hasText: 'Add to cart' }).click();
    await expect(this.shoppingCartBadge).toBeVisible();
  }

}