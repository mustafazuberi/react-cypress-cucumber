describe("App", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.github.com/orgs/code-with-ahsan/repos?type=public",
      {
        fixture: "projects.json",
      }
    ).as("getProjects");
  });

  it("it should logout the user on clicking logout button", () => {
    cy.visit("/");
    cy.login();
    cy.get("#logoutButton").click();
    cy.url().should("equal", `${Cypress.env("baseUrl")}/login`);
  });

  it("it should see the user's email in the header", () => {
    const testEmail = "emailForTest@test.com";
    cy.visit("/login");
    cy.login(testEmail);
    cy.visit("/");
    const userEmail = cy.get("#userEmail");
    userEmail.should("be.visible");
    userEmail.should("have.text", testEmail);
  });

  it("should see the list of github projects", () => {
    cy.visit("/");
    cy.login();
    cy.wait("@getProjects").then((interception) => {
      console.log("Intercepted Request:", interception.response.body);
	  expect(interception.response.body).to.be.an('array');
    });
    cy.get(".gh-list-item").should("have.length", 30);
  });
});
