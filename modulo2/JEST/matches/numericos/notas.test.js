// tests/notas.test.js
const {
  calcularPromedio,
  aplicarDescuento,
  notaMaxima,
  notaMinima,
} = require("./notas");

// toBeGreaterThan — el valor es mayor que el esperado
test("el promedio de [6, 8, 10] es mayor que 7", () => {
  expect(calcularPromedio([6, 8, 10])).toBeGreaterThan(7);
});

// toBeGreaterThanOrEqual — mayor o igual
test("la nota máxima de [5, 7, 9] es mayor o igual que 9", () => {
  expect(notaMaxima([5, 7, 9])).toBeGreaterThanOrEqual(9);
});

// toBeLessThan — el valor es menor que el esperado
test("la nota mínima de [5, 7, 9] es menor que 6", () => {
  expect(notaMinima([5, 7, 9])).toBeLessThan(6);
});

// toBeLessThanOrEqual — menor o igual
test("el descuento nunca eleva el precio original", () => {
  const precioFinal = aplicarDescuento(100, 10);
  expect(precioFinal).toBeLessThanOrEqual(100);
});

// toBeCloseTo — comparar decimales (0.1 + 0.2 ≠ 0.3 exacto en JS)
test("promedio de [1, 2] es cercano a 1.5", () => {
  // Sin toBeCloseTo algunos decimales fallan por precisión de punto flotante
  expect(calcularPromedio([1, 2])).toBeCloseTo(1.5, 1);
});

test("descuento del 33% sobre 100 es cercano a 67", () => {
  // 100 * (1 - 33/100) = 67.00000... — seguro con toBeCloseTo
  expect(aplicarDescuento(100, 33)).toBeCloseTo(67, 2);
});

test("promedio con decimales — toBeCloseTo evita errores de precisión", () => {
  // 1/3 + 2/3 + ... pueden acumular error de punto flotante
  expect(calcularPromedio([0.1, 0.2, 0.3])).toBeCloseTo(0.2, 5);
});
