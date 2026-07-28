// tests/inventario.test.js
const { Inventario } = require("./inventario");

describe("Inventario", () => {
  let inv;

  // Estado base antes de cada test: inventario con 3 productos
  beforeEach(() => {
    inv = new Inventario();
    inv.agregar("A001", "Teclado", 50);
    inv.agregar("A002", "Ratón", 30);
    inv.agregar("A003", "Monitor", 10);
  });

  describe("agregar", () => {
    test("añade un producto nuevo correctamente", () => {
      inv.agregar("A004", "Auriculares", 20);
      expect(inv.totalProductos()).toBe(4);
      expect(inv.existencias("A004")).toBe(20);
    });

    test("cantidad negativa lanza error", () => {
      expect(() => inv.agregar("A005", "Cable", -5)).toThrow(
        "La cantidad no puede ser negativa",
      );
    });
  });

  describe("retirar", () => {
    test("descuenta la cantidad correctamente", () => {
      inv.retirar("A001", 10);
      expect(inv.existencias("A001")).toBe(40);
    });

    test("retirar todo deja en cero", () => {
      inv.retirar("A003", 10);
      expect(inv.existencias("A003")).toBe(0);
    });

    test("producto inexistente lanza error", () => {
      expect(() => inv.retirar("X999", 1)).toThrow("Producto X999 no existe");
    });

    test("stock insuficiente lanza error", () => {
      expect(() => inv.retirar("A002", 100)).toThrow("Stock insuficiente");
    });
  });

  describe("existencias", () => {
    test("devuelve la cantidad de un producto existente", () => {
      expect(inv.existencias("A001")).toBe(50);
      expect(inv.existencias("A002")).toBe(30);
    });

    test("devuelve 0 para un producto que no existe", () => {
      expect(inv.existencias("XXXXX")).toBe(0);
    });
  });
});
