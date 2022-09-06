
describe('Login', () => {
  it('should be able to list repositories', () => {
    cy.visit('http://localhost:3000')

    cy.get("[data-test-id='login-button']").click()
    cy.get("[data-test-id='email-input']").type("istic@senaisp.com.br")
    cy.get("[data-test-id='password-input']").type("ISTIC@123")
    
    cy.get("[data-testid='button']").click()

    cy.intercept('https://api.github.com/users/ElderGr/repos').as('getRepos')

    cy.get("[data-test-id='user-input']").clear()
    cy.get("[data-test-id='user-input']").type("ElderGr")
    cy.wait('@getRepos').then((interception) => {
      cy.contains('anima-o').should("be.visible")
    })
  })
})