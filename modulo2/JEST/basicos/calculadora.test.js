// tests/calculadora.test.js

// Importamos las funciones que vamos a probar
const { sumar, restar, multiplicar, dividir } = require("./calculadora");

// test() recibe dos cosas:
//   1. Un string que describe qué se está probando
//   2. Una función que ejecuta la prueba

test("sumar 2 + 3 devuelve 5", () => {
  const resultado = sumar(2, 3);
  expect(resultado).toBe(5);
  //     ↑ valor real    ↑ valor esperado
});

test.only("restar 10 - 4 devuelve 6", () => {
  expect(restar(10, 4)).toBe(6);
});

test("multiplicar 3 × 4 devuelve 12", () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test("dividir 10 ÷ 2 devuelve 5", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("dividir entre cero lanza un error", () => {
  // Cuando una función debe lanzar un error,
  // hay que envolverla en una función flecha
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero");
});
