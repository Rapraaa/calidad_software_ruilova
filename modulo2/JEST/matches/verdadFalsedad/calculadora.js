// src/calculadora.js

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

// Devuelve true si el número es par, false si es impar
function esPar(numero) {
  return numero % 2 === 0;
}

// Devuelve el saludo según la hora del día (0-23)
function obtenerSaludo(hora) {
  if (hora < 12) return "Buenos días";
  if (hora < 20) return "Buenas tardes";
  return "Buenas noches";
}

module.exports = { sumar, restar, multiplicar, esPar, obtenerSaludo };
