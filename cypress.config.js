  import { defineConfig } from "cypress";
  import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
  import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
  import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

  export default defineConfig({
    e2e: {
      baseUrl: "http://localhost:5173",
      async setupNodeEvents(on, config) {
        const bundler = createBundler({
          plugins: [createEsbuildPlugin(config)],
        });

        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);

        return config;
      },
      specPattern: "**/*.{cy.{js,jsx,ts,tsx},feature}",
      chromeWebSecurity: false,
      env: {
        baseUrl: "http://localhost:5173",
      },
    },
  });
