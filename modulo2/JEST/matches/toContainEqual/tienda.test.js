// tests/tienda.test.js
const { obtenerCatalogo, filtrarPorCategoria } = require("../src/tienda");

// toContainEqual — el array contiene un objeto con ese contenido
test("el catálogo contiene el producto Teclado", () => {
  const catalogo = obtenerCatalogo();

  expect(catalogo).toContainEqual({
    id: 2,
    nombre: "Teclado",
    precio: 45,
    categoria: "periféricos",
  });
});

test("el catálogo NO contiene un producto con id=99", () => {
  const catalogo = obtenerCatalogo();

  expect(catalogo).not.toContainEqual(expect.objectContaining({ id: 99 }));
});

test("filtrar periféricos devuelve ratón y teclado", () => {
  const catalogo = obtenerCatalogo();
  const perifericos = filtrarPorCategoria(catalogo, "periféricos");

  expect(perifericos).toHaveLength(2);
  expect(perifericos).toContainEqual(
    expect.objectContaining({ nombre: "Ratón" }),
  );
  expect(perifericos).toContainEqual(
    expect.objectContaining({ nombre: "Teclado" }),
  );
});
