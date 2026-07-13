// src/test/setup.ts
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { server } from './mocks/server'

// Node >= 22 expone un `localStorage` experimental que queda `undefined` sin
// `--localstorage-file` y tapa al de jsdom, rompiendo el middleware `persist`
// de Zustand. Instalamos un Storage en memoria para los tests.
class MemoryStorage implements Storage {
  #data = new Map<string, string>()
  get length() {
    return this.#data.size
  }
  clear() {
    this.#data.clear()
  }
  getItem(key: string) {
    return this.#data.has(key) ? this.#data.get(key)! : null
  }
  key(index: number) {
    return Array.from(this.#data.keys())[index] ?? null
  }
  removeItem(key: string) {
    this.#data.delete(key)
  }
  setItem(key: string, value: string) {
    this.#data.set(key, String(value))
  }
}

Object.defineProperty(globalThis, 'localStorage', {
  value: new MemoryStorage(),
  configurable: true,
  writable: true,
})

// Radix (Select/Popover/Tooltip) usa APIs de puntero/scroll que jsdom no
// implementa. Sin este parche, user.click() sobre el trigger del Select lanza
// 'target.hasPointerCapture is not a function'.
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false
}
if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {}
}
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {}
}

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => {
  cleanup()
  server.resetHandlers()
})
afterAll(() => server.close())
