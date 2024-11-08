class ProductPage {
    constructor(page) {
      this.page = page;
      this.firstProductName = page.locator('.inventory_item_name').first();
      this.firstProductPrice = page.locator('.inventory_item_price').first();
      this.addToCartButton = page.locator('.btn_inventory').first();
    }
  
    async getProductInfo() {
      const productName = await this.firstProductName.textContent();
      const productPrice = await this.firstProductPrice.textContent();
      return { name: productName, price: productPrice };
    }
  
    async addToCart() {
      await this.addToCartButton.click();
    }
  }
  
  module.exports = ProductPage;
  