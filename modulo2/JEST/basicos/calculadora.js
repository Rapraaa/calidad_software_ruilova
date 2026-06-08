// src/calculadora.js

// Suma dos números y devuelve el resultado
function sumar(a, b) {
  return a + b;
}

// Resta el segundo número al primero
function restar(a, b) {
  return a - b;
}

// Multiplica dos números
function multiplicar(a, b) {
  return a * b;
}

// Divide el primer número entre el segundo
// Lanza un error si el divisor es cero
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

module.exports = { sumar, restar, multiplicar, dividir };
