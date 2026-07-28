// src/tienda.js

// Devuelve el catálogo completo de productos
function obtenerCatalogo() {
  return [
    { id: 1, nombre: "Ratón", precio: 25, categoria: "periféricos" },
    { id: 2, nombre: "Teclado", precio: 45, categoria: "periféricos" },
    { id: 3, nombre: "Monitor", precio: 280, categoria: "pantallas" },
    { id: 4, nombre: "Cable USB", precio: 8, categoria: "accesorios" },
  ];
}

// Devuelve los productos de una categoría
function filtrarPorCategoria(productos, categoria) {
  return productos.filter((p) => p.categoria === categoria);
}

module.exports = { obtenerCatalogo, filtrarPorCategoria };
