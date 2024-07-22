import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.intercept(
    "GET",
    "https://api.github.com/orgs/code-with-ahsan/repos?type=public",
    {
      fixture: "projects.json",
    }
  ).as("getProjects");
});

Given("I am on the app page", () => {
  cy.visit("/");
  cy.login();
});

Then("I should see my {int} Github projects", (int) => {
  cy.wait("@getProjects");
  cy.get(".gh-list-item").should("have.length", int);
});

Then("I should see my email in the header", () => {
  const testEmail = "mustafa@example.com";
  const userEmail = cy.get("#userEmail");
  userEmail.should("be.visible");
  userEmail.should("have.text", testEmail);
});

When("I click the logout button", () => {
  cy.get("#logoutButton").click();
});

Then("I should be logged out", () => {
  cy.url().should("equal", `${Cypress.env("baseUrl")}/login`);
});
