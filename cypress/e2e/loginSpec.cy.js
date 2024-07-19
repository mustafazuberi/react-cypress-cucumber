describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should login with email and password", () => {
    cy.login();
    cy.url().should("equal", `${Cypress.env("baseUrl")}/`);
  });

  it("should show the error message when email is not provided", () => {
    cy.get("#email-address").clear();
    cy.get("#password").type("test123");
    cy.get("#loginSubmitButton").click();

    const emailErrorElement = cy.get("#emailError");
    emailErrorElement.should("be.visible");
    emailErrorElement.should("have.text", "Email is required.");

    cy.wait(2000);
    cy.url().should("equal", `${Cypress.env("baseUrl")}/login`);
  });

  it("should show the error message when password is not provided", () => {
    cy.get("#email-address").type("mustafa@example.com");
    cy.get("#password").clear();
    cy.get("#loginSubmitButton").click();

    const passwordErrorElement = cy.get("#passwordError");
    passwordErrorElement.should("be.visible");
    passwordErrorElement.should("have.text", "Password is required.");

    cy.wait(2000);
    cy.url().should("equal", `${Cypress.env("baseUrl")}/login`);
  });
});
