const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
 
  
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    chromeWebSecurity:false,
    experimentalSessionAndOrigin:true,
    testIsolation:"off",
    defaultCommandTimeout: 5000,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {

      on('task', {
        log(message) {
            console.log(message + '\n');
            return null;
            // Then to see the log messages in the terminal
            // Use: cy.task("log", "my message");
          },
      });

      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },

  },
});
