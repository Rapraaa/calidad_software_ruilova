const {
  obtenerFrutas,
  contienePalabra,
  agregarElemento,
} = require("./toContainDemo");

describe("toContain matcher", () => {
  test("Happy path: elemento dentro de array", () => {
    const frutas = obtenerFrutas();
    expect(frutas).toContain("pera");
  });

  test("Happy path: palabra dentro de texto", () => {
    expect(contienePalabra("Jest es increíble", "increíble")).toBe(true);
  });

  test("Sad path: elemento no encontrado o tipo incorrecto", () => {
    const frutas = obtenerFrutas();
    expect(frutas).not.toContain("banana");
    expect(() => contienePalabra(123, "texto")).toThrow(
      "Ambos argumentos deben ser strings",
    );
  });

  test("Sad path: agregarElemento con valores inválidos", () => {
    expect(() => agregarElemento({}, "x")).toThrow("lista debe ser un array");
    expect(() => agregarElemento([], "")).toThrow(
      "elemento no puede estar vacío",
    );
  });
});
