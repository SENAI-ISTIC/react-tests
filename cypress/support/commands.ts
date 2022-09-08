const frontURL = "http://localhost:3000"
const githubURL = "https://api.github.com"


Cypress.Commands.add("appLogin", (login: any) =>{
    cy.visit(`${frontURL}/`)
    console.log(login)
    cy.get("[data-test-id='login-button']").click()
    
    cy.get("[data-test-id='email-input']").type(login.email)
    cy.get("[data-test-id='password-input']").type(login.password)
   
    cy.get("[data-testid='button']").click()
})