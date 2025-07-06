const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://webdriveruniversity.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-json",
    overwrite: true,
    html: true,
    json: true
  }
});
