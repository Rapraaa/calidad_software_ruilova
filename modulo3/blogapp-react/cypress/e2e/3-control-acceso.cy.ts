const listaVacia = { data: { items: [], total: 0, page: 1, limit: 10 } }

describe('Flujo crítico 3: Control de acceso a rutas privadas', () => {
  it('redirige al login cuando no hay sesión (escenario de error)', () => {
    cy.visit('/dashboard')
    cy.location('pathname').should('eq', '/login')
    cy.contains('Iniciar sesión').should('be.visible')
  })

  it('permite entrar al panel cuando hay sesión (happy path)', () => {
    cy.intercept('GET', /\/posts(\?|$)/, { statusCode: 200, body: listaVacia })
    cy.intercept('GET', /\/categories(\?|$)/, { statusCode: 200, body: listaVacia })
    cy.intercept('GET', /\/courses(\?|$)/, { statusCode: 200, body: listaVacia })
    cy.intercept('GET', /\/users(\?|$)/, { statusCode: 200, body: listaVacia })

    cy.visitAutenticado('/dashboard')
    cy.location('pathname').should('eq', '/dashboard')
    cy.contains('Iniciar sesión').should('not.exist')
  })
})
