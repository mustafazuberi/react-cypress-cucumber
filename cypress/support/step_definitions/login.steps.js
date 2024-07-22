import {
  Given,
  And,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/login");
});

When(
  "I login using email {string} and password {string}",
  (email, password) => {
    cy.get("#email-address").type(email);
    cy.get("#password").type(password);
  }
);

And("I enter {string} as the password", (password) => {
  cy.get("#password").type(password);
});

And("I enter {string} as the email", (email) => {
  cy.get("#email-address").type(email);
});

And("I click on the login button", () => {
  cy.get("#loginSubmitButton").click();
});

Then("I should be logged in", () => {
  cy.url().should("equal", `${Cypress.env("baseUrl")}/`);
});

Then("I should see the email required error", () => {
  const emailErrorElement = cy.get("#emailError");
  emailErrorElement.should("be.visible");
  emailErrorElement.should("have.text", "Email is required.");
});

Then("I should see the password required error", () => {
  const passwordErrorElement = cy.get("#passwordError");
  passwordErrorElement.should("be.visible");
  passwordErrorElement.should("have.text", "Password is required.");
});
