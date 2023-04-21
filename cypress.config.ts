import { defineConfig } from "cypress";

const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

export default defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };
      // implement node event listeners here
      on("file:preprocessor", cucumber(options));
    },
    baseUrl: "http://dev1.geneat.vn:8101/en",
    viewportHeight: 1024,
    viewportWidth: 1440,
    defaultCommandTimeout: 30000,
    specPattern: "cypress/e2e/**/*.feature",
  },
});
