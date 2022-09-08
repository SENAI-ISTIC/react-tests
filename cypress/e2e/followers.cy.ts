describe('Followers', () => {
    beforeEach(() => {
        cy.appLogin({
            email: "istic@senaisp.com.br",
            password: "ISTIC@123"
        })
    })

    it('should be able to list followers', () => {  
      cy.get("[data-test-id='seguidores']").click()
  
      cy.intercept('https://api.github.com/users/ElderGr/followers').as('getFollowers')
  
      cy.get("[data-test-id='user-input']").clear()
      cy.get("[data-test-id='user-input']").type("ElderGr")
      cy.wait('@getFollowers').then((interception) => {
        cy.contains('hstrada').should("be.visible")
      })
    })

    it('should not be able to no list followers of a inexistent user', () => {  
        cy.get("[data-test-id='seguidores']").click()
    
        cy.intercept('https://api.github.com/users/usuario-teste-inexistente/followers').as('getFollowers')
    
        cy.get("[data-test-id='user-input']").clear()
        cy.get("[data-test-id='user-input']").type("usuario-teste-inexistente")
        cy.wait('@getFollowers').then((interception) => {
          cy.get("[data-test-id='list-container']").contains('Não há seguidores').should("be.visible")
        })
      })
  })