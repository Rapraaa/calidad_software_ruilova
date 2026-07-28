// src/notas.js

// Calcula el promedio de un array de números
function calcularPromedio(numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

// Calcula el precio final aplicando un porcentaje de descuento
function aplicarDescuento(precio, porcentaje) {
  return precio * (1 - porcentaje / 100);
}

// Devuelve la nota más alta del array
function notaMaxima(notas) {
  return Math.max(...notas);
}

// Devuelve la nota más baja del array
function notaMinima(notas) {
  return Math.min(...notas);
}

module.exports = { calcularPromedio, aplicarDescuento, notaMaxima, notaMinima };
