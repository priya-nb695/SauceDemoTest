# SauceDemo Automation Test

This project contains UI automation tests for the **SauceDemo** website using **Playwright** and **JavaScript**. The test suite focuses on verifying the **Add to Cart** functionality on the site.

## Test Scenario

1. Navigate to the SauceDemo website: https://www.saucedemo.com/.
2. Login using the provided credentials.
3. Verify that the login is successful and the user lands on the Products page.
4. Get the first product's name and price, then store it in a text file (`productInfo.txt`).
5. Add the product to the cart.
6. Navigate to the cart page and verify that the product added is displayed.
7. Logout from the application.

## Requirements

- Node.js (preferably the latest LTS version)
- Playwright (installed via npm)
  
## Installation

