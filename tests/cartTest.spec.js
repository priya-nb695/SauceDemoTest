const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const { saveProductInfo } = require('../utils/dataHelper');

test.describe('SauceDemo Add to Cart Test', () => {
  let page, loginPage, productPage, cartPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);

    // Navigate to the site and login
    await loginPage.goTo();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLogin();
  });

  test('Add product to cart and verify', async () => {
    // Get product information and save it
    const productInfo = await productPage.getProductInfo();
    await saveProductInfo(productInfo);

    // Add product to cart
    await productPage.addToCart();

    // Go to cart and verify product
    await cartPage.goToCart();
    await cartPage.verifyProductInCart(productInfo.name, productInfo.price);
  });

  test.afterEach(async () => {
    await page.close();
  });
});
