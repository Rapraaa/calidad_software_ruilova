// tests/carrito.test.js
const { Carrito } = require("./carrito");

describe("Carrito de compras", () => {
  let carrito; // variable compartida entre los tests

  // beforeEach se ejecuta ANTES de cada test
  // Crea un carrito fresco para cada test — sin contaminación entre tests
  beforeEach(() => {
    carrito = new Carrito();
  });

  test("empieza vacío", () => {
    expect(carrito.items).toHaveLength(0);
    expect(carrito.calcularTotal()).toBe(0);
  });

  test("agregar un producto lo añade a items", () => {
    carrito.agregar({ id: 1, nombre: "Ratón", precio: 29.99, cantidad: 1 });

    expect(carrito.items).toHaveLength(1);
    expect(carrito.items[0].nombre).toBe("Ratón");
  });

  test("agregar el mismo producto incrementa su cantidad", () => {
    carrito.agregar({ id: 1, nombre: "Ratón", precio: 29.99, cantidad: 1 });
    carrito.agregar({ id: 1, nombre: "Ratón", precio: 29.99, cantidad: 2 });

    expect(carrito.items).toHaveLength(1); // sigue siendo 1 producto
    expect(carrito.items[0].cantidad).toBe(3); // pero con cantidad 3
  });

  test("calcularTotal suma precio × cantidad de todos los items", () => {
    carrito.agregar({ id: 1, nombre: "Ratón", precio: 29.99, cantidad: 2 });
    carrito.agregar({ id: 2, nombre: "Teclado", precio: 89.99, cantidad: 1 });

    // 29.99*2 + 89.99*1 = 59.98 + 89.99 = 149.97
    expect(carrito.calcularTotal()).toBeCloseTo(149.97, 2);
  });

  test("eliminar un producto lo quita de items", () => {
    carrito.agregar({ id: 1, nombre: "Ratón", precio: 29.99, cantidad: 1 });
    carrito.agregar({ id: 2, nombre: "Teclado", precio: 89.99, cantidad: 1 });

    carrito.eliminar(1);

    expect(carrito.items).toHaveLength(1);
    expect(carrito.items[0].id).toBe(2);
  });

  test("eliminar un id inexistente lanza error", () => {
    expect(() => carrito.eliminar(99)).toThrow(
      "Producto con id 99 no encontrado",
    );
  });

  test("cantidadTotal suma todas las cantidades", () => {
    carrito.agregar({ id: 1, nombre: "Ratón", precio: 29.99, cantidad: 3 });
    carrito.agregar({ id: 2, nombre: "Teclado", precio: 89.99, cantidad: 2 });

    expect(carrito.cantidadTotal).toBe(5);
  });

  // Cada test empieza con el carrito vacío gracias a beforeEach
  // Este test NO está afectado por los productos añadidos en los tests anteriores
  test("el carrito sigue vacío al inicio de este test", () => {
    expect(carrito.items).toHaveLength(0);
  });
});
