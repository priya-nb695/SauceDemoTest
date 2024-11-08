const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProductName = page.locator('.inventory_item_name');
    this.cartProductPrice = page.locator('.inventory_item_price');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async goToCart() {
    await this.cartButton.click();
    await expect(this.page).toHaveURL(/cart.html/);
  }

  async verifyProductInCart(expectedName, expectedPrice) {
    const name = await this.cartProductName.textContent();
    const price = await this.cartProductPrice.textContent();
    expect(name).toBe(expectedName);
    expect(price).toBe(expectedPrice);
  }
}

module.exports = CartPage;
