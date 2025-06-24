import { Page, Locator, expect} from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  get inventoryItem () {
    return this.page.getByTestId('inventory-item-name');
  }

  get addCartButton () {
    return this.page.getByTestId('add-to-cart-sauce-labs-backpack').getByText('Add to cart') ;
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
    return this.page.getByRole('button').getByText('Remove');
  }

  async addItemToCart(title: string): Promise<void> {
    // await this.inventoryItem.getByText(title).click();
    await this.addCartButton.click();
    await expect(this.shoppingCartBadge).toBeVisible();
  }

}