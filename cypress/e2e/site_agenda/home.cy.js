/// <reference types="cypress" />

describe('Testes funcionalidades Site Agenda de Contatos', () => {
    it('Deve renderizar texto correto', () => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
        cy.get('h1').first().should('have.text', 'Agenda de  contatos')
    })
})

describe('Deve incluir um novo contato na agenda', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Adiciona contato com sucesso', () => {
        cy.get('input[placeholder*="Nome"]').should('be.visible').type('Luan Glaab')
        cy.get('input[placeholder*="E-mail"]').should('be.visible').type('luan@gmail.com')
        cy.get('input[placeholder*="Telefone"]').should('be.visible').type('1245678-9111')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})

describe('Deve alterar os dados de um contato', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Edita contato com sucesso', () => {
        cy.get('.edit').should('be.visible').first().click()
        cy.get('input[placeholder*="Nome"]').focus().clear()
        cy.get('input[placeholder*="Nome"]').should('be.visible').type('Lucas Exemplo')
        cy.get('input[placeholder*="E-mail"]').focus().clear()
        cy.get('input[placeholder*="E-mail"]').should('be.visible').type('novoemail@gmail.com')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})

describe('Deve alterar os dados de um contato', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Deleta contato com sucesso', () => {
        cy.get('.delete').should('be.visible').click({ multiple: true })
    })
})

// npm run cypress open