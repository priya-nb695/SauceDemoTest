# SauceDemo Automation Test

This project contains UI automation tests for the **SauceDemo** website using **Playwright** and **JavaScript**. The test suite focuses on verifying the **Add to Cart** functionality on the site.

## Requirements

- Node.js (preferably the latest LTS version)
- Playwright (installed via npm)
  
## Installation

1. Clone or download this repository.
    
        git clone https://github.com/priya-nb695/SauceDemoTest.git

2. Navigate to the project folder.
      
        cd SauceDemoTest

3. Install dependencies by running:
 
        npm install

4. Ensure that Playwright's browser binaries are installed:

        npx playwright install       

5. To run the test, execute the following command:

        npx playwright test

## Test Scenario

1. Navigate to the SauceDemo website: https://www.saucedemo.com/.
2. Login using the provided credentials.
3. Verify that the login is successful and the user lands on the Products page.
4. Get the first product's name and price, then store it in a text file (`productInfo.txt`).
5. Add the product to the cart.
6. Navigate to the cart page and verify that the product added is displayed.
7. Logout from the application.

## Expected Output

If the the test passes :

  1. the productinfo.txt will be created with first product's name and price if not created (first delete the  productinfo.txt file and verify )

  2. the following message will appear:

   SauceDemo Add to Cart Test › Add product to cart and verify  : passed

If the test fails:

a error message with the actual reasons will be shown.

## Project Setup

 1.Page Object Model (POM): The project follows the Page Object Model (POM) design pattern, with separate classes for interacting with the login, products, and cart pages.

 2.Test Automation: The test uses Playwright for browser automation and simulates a real user interaction with the SauceDemo site.