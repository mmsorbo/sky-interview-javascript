const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({ plugins: [createEsbuildPlugin.default(config)] }),
  );

  on("task", {
    log(message) {
      // Then to see the log messages in the terminal
      //   cy.task('log', 'my message');
      console.log(message);
      return null;
    },
  });

  return config;
}

module.exports = defineConfig({
  video: false, //(process.env.CYPRESS_video || 0).toString() === '1',
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 60000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {},
  e2e: {
    specPattern: "**/*.feature",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
  },
});
