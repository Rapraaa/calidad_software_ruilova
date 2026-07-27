describe('Flujo crítico 2: Alta de una categoría', () => {
  it('rechaza un nombre demasiado corto (escenario de validación)', () => {
    cy.intercept('GET', /\/categories(\?|$)/, {
      statusCode: 200,
      body: { data: { items: [], total: 0, page: 1, limit: 50 } },
    })

    cy.visitAutenticado('/categorias')
    cy.contains('button', 'Nueva categoría').click()
    cy.get('#name').type('A')
    cy.contains('button', 'Guardar').click()

    cy.contains('p', 'Mínimo 2 caracteres').should('exist')
  })

  it('crea una categoría y la muestra en la lista (happy path)', () => {
    const items: Array<{ id: string; name: string }> = []

    cy.intercept('GET', /\/categories(\?|$)/, (req) => {
      req.reply({ statusCode: 200, body: { data: { items, total: items.length, page: 1, limit: 50 } } })
    })
    cy.intercept('POST', /\/categories$/, (req) => {
      const categoria = { id: 'c1', name: req.body.name }
      items.push(categoria)
      req.reply({ statusCode: 201, body: { data: categoria } })
    }).as('crear')

    cy.visitAutenticado('/categorias')
    cy.contains('button', 'Nueva categoría').click()
    cy.get('#name').type('Tecnología')
    cy.contains('button', 'Guardar').click()

    cy.wait('@crear').its('request.body.name').should('eq', 'Tecnología')
    cy.contains('td', 'Tecnología').should('be.visible')
  })
})
