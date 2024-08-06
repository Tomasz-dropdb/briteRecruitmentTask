import { defineConfig } from "cypress";

export default defineConfig({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.',
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.ts',
    //baseUrl: "https://www.imdb.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
