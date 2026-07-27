import { jwtFalso } from '../support/commands'

const listaVacia = { data: { items: [], total: 0, page: 1, limit: 10 } }

describe('Flujo crítico 1: Autenticación', () => {
  it('ingresa con credenciales válidas y sale de la pantalla de login (happy path)', () => {
    cy.intercept('POST', /\/auth\/login$/, {
      statusCode: 200,
      body: { data: { access_token: jwtFalso({ id: 'u1' }) } },
    }).as('login')
    cy.intercept('GET', /\/posts(\?|$)/, { statusCode: 200, body: listaVacia })
    cy.intercept('GET', /\/courses(\?|$)/, { statusCode: 200, body: listaVacia })
    cy.intercept('GET', /\/categories(\?|$)/, { statusCode: 200, body: listaVacia })

    cy.visit('/login')
    cy.get('#username').type('admin')
    cy.get('#password').type('secreta123')
    cy.contains('button', 'Ingresar').click()

    cy.wait('@login')
    cy.location('pathname').should('eq', '/')
    cy.contains('Iniciar sesión').should('not.exist')
  })

  it('muestra un aviso de error con credenciales inválidas (escenario de error)', () => {
    cy.intercept('POST', /\/auth\/login$/, {
      statusCode: 401,
      body: { message: 'Credenciales inválidas' },
    }).as('login')

    cy.visit('/login')
    cy.get('#username').type('admin')
    cy.get('#password').type('incorrecta')
    cy.contains('button', 'Ingresar').click()

    cy.wait('@login')
    cy.contains('Credenciales inválidas').should('be.visible')
    cy.location('pathname').should('eq', '/login')
  })
})
