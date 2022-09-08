import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'src/__test__/e2e/*.cy{.ts,.tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
