describe('Repositories', () => {
  beforeEach(() => {
    cy.appLogin({
        email: "istic@senaisp.com.br",
        password: "ISTIC@123"
    })
  })

  it('should be able to list repositories', () => {
    cy.get("[data-test-id='repositorios']").click()

    cy.intercept('https://api.github.com/users/ElderGr/repos').as('getRepos')

    cy.get("[data-test-id='user-input']").clear()
    cy.get("[data-test-id='user-input']").type("ElderGr")
    cy.wait('@getRepos').then((interception) => {
      cy.contains('anima-o').should("be.visible")
    })
  })

  it('should not be able to no list repositories of a inexistent user', () => {  
    cy.get("[data-test-id='repositorios']").click()

    cy.intercept('https://api.github.com/users/usuario-teste-inexistente/followers').as('getFollowers')

    cy.get("[data-test-id='user-input']").clear()
    cy.get("[data-test-id='user-input']").type("usuario-teste-inexistente")
    cy.wait('@getFollowers').then((interception) => {
      cy.get("[data-test-id='list-container']").contains('Não há repositórios').should("be.visible")
    })
  })
})