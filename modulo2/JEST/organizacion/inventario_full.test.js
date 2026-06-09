// tests/inventario.test.js

const { Inventario } = require("./inventario");

describe("Inventario", () => {
  let inventario;

  beforeAll(() => {
    console.log("Iniciando suite de pruebas de Inventario");
  });

  beforeEach(() => {
    console.log("Prueba iniciada");
    inventario = new Inventario();

    inventario.agregar(1, "Laptop", 10);
    inventario.agregar(2, "Mouse", 20);
  });

  afterEach(() => {
    console.log("Prueba finalizada");
  });

  afterAll(() => {
    console.log("Suite de pruebas finalizada");
  });

  test("debe agregar productos correctamente", () => {
    inventario.agregar(3, "Teclado", 15);

    expect(inventario.totalProductos()).toBe(3);
    expect(inventario.existencias(3)).toBe(15);
  });

  test("debe retirar stock correctamente", () => {
    const producto = inventario.retirar(1, 3);

    expect(producto.cantidad).toBe(7);
    expect(inventario.existencias(1)).toBe(7);
  });

  test("debe lanzar error si el producto no existe", () => {
    expect(() => {
      inventario.retirar(999, 1);
    }).toThrow("Producto 999 no existe");
  });

  test("debe lanzar error si no hay stock suficiente", () => {
    expect(() => {
      inventario.retirar(1, 50);
    }).toThrow("Stock insuficiente");
  });

  test("debe retornar 0 para un producto inexistente", () => {
    expect(inventario.existencias(999)).toBe(0);
  });

  test("debe lanzar error al agregar cantidad negativa", () => {
    expect(() => {
      inventario.agregar(3, "Monitor", -5);
    }).toThrow("La cantidad no puede ser negativa");
  });

  test("debe contar correctamente el total de productos", () => {
    expect(inventario.totalProductos()).toBe(2);
  });
});
