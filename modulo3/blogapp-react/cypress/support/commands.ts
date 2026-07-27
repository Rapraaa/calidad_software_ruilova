const AUTH_KEY = 'blogapp-auth'

export function jwtFalso(payload: Record<string, unknown> = { id: 'u1' }): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = btoa(JSON.stringify(payload))
  return `${header}.${body}.firma-de-prueba`
}

declare global {
  namespace Cypress {
    interface Chainable {
      visitAutenticado(path: string, payload?: Record<string, unknown>): Chainable<void>
    }
  }
}

Cypress.Commands.add('visitAutenticado', (path: string, payload: Record<string, unknown> = { id: 'u1' }) => {
  const token = jwtFalso(payload)
  cy.visit(path, {
    onBeforeLoad(win) {
      win.localStorage.setItem(
        AUTH_KEY,
        JSON.stringify({ state: { token, userId: payload.id ?? 'u1', isAuthenticated: true }, version: 0 }),
      )
    },
  })
})

export {}
