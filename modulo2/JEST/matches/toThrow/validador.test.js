// tests/validador.test.js
const { validarEdad, validarNombre, dividir } = require("../src/validador");

// IMPORTANTE: siempre envuelve la llamada en una función flecha → () =>
// Sin la función flecha Jest no puede capturar el error

// toThrow() — lanza ALGÚN error (sin importar cuál)
test("edad negativa lanza algún error", () => {
  expect(() => validarEdad(-1)).toThrow();
});

// toThrow('mensaje') — lanza un error con ese mensaje exacto
test("edad mayor a 120 lanza RangeError con el mensaje correcto", () => {
  expect(() => validarEdad(200)).toThrow("La edad debe estar entre 0 y 120");
});

// toThrow(TypeError) — verifica el tipo de error
test("edad como string lanza TypeError", () => {
  expect(() => validarEdad("veinte")).toThrow(TypeError);
});

// toThrow(RangeError)
test("edad fuera de rango lanza RangeError", () => {
  expect(() => validarEdad(-5)).toThrow(RangeError);
  expect(() => validarEdad(150)).toThrow(RangeError);
});

// toThrow(/regex/) — el mensaje contiene ese patrón
test('nombre vacío lanza error que menciona "vacío"', () => {
  expect(() => validarNombre("")).toThrow(/vacío/);
});

test("nombre de 1 carácter lanza error de longitud", () => {
  expect(() => validarNombre("A")).toThrow("al menos 2 caracteres");
});

// not.toThrow() — la función NO lanza error (funciona correctamente)
test("edad válida no lanza error", () => {
  expect(() => validarEdad(25)).not.toThrow();
  expect(() => validarEdad(0)).not.toThrow();
  expect(() => validarEdad(120)).not.toThrow();
});

test("nombre válido no lanza error", () => {
  expect(() => validarNombre("Ana")).not.toThrow();
});

test("dividir entre cero lanza error", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero");
});

test("dividir números válidos no lanza error", () => {
  expect(() => dividir(10, 2)).not.toThrow();
  expect(dividir(10, 2)).toBe(5);
});
