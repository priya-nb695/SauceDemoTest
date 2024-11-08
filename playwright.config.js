const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['html', { outputFolder: 'docs', open: 'always' }],
  ],
});
