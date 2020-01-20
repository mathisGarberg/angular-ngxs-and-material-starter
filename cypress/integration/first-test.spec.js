describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/profile");
    // cy.get('#text').type('Mathis');
    // cy.get('#username').type(Cypress.config('username'));
    // cy.get('#password').type(Cypress.config('password'));
    cy.get('#text').type(Cypress.config('username'));
    cy.get('.submit-btn').click();
    cy.url().should('include', '/profile');
    cy.fixture('users').then((users) => {
      localStorage.setItem(
        'users',
        JSON.stringify(users)
      );
    });
  });


// describe('Login Page', () => {
//   beforeEach(() => {
//     // Start server to listen to routes.
//     cy.server();

//     // The ** wildcard character sequence matches a partial path.
//     // We listen for POSTs where the URL ends with /authenticate.
//     // Alias the route with 'as()' to find it later.
//     cy.route('POST', **/authenticate').as('authenticate');
//   });

//   it('user can log in', function () {

//     cy.visit("/login");
//     cy.get('#username').type(Cypress.config('username'));
//     cy.get('#password').type(Cypress.config('password'));

//     // When we submit the form an async XHR call is made.
//     cy.get('.btn-primary').click();

//     // We wait until the call with the alias authenticate is resolved.
//     cy.wait('@authenticate');

//     // If we don't wait the assertion is false.
//     cy.get('h1').should('contain', 'Hi Michael');
//   });
// });
});
