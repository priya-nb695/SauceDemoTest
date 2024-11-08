const fs = require('fs').promises;

async function saveProductInfo(productInfo) {
  const data = `Product Name: ${productInfo.name}\nPrice: ${productInfo.price}\n`;
  await fs.writeFile('productInfo.txt', data);
}

module.exports = { saveProductInfo };
