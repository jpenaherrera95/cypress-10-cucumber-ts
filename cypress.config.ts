const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  const environmentName = config.env.environmentName || "qa";
  const environmentFilename = `./cypress/config/${environmentName}.env.json`;
  const settings = require(environmentFilename);
  console.log("this are the settings", settings);
  if (settings.baseUrl) {
    config.baseUrl = settings.baseUrl;
  }
  if (settings.env) {
    config.env = {
      ...config.env,
      ...settings.env,
    };
  }

  console.log(config);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    nonGlobalStepDefinitions: true,
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents,
  },
});
