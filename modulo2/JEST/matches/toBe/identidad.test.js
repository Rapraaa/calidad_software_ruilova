const { identidad, suma } = require("./identidad");

describe("toBe Igualdad estricta", () => {
  test("Happy path: primitivos con toBe", () => {
    expect(suma(5, 2)).toBe(7);
    expect(identidad("jest")).toBe("jest");
  });
  test("Happy path: misma referencia de objeto", () => {
    const obj = { x: 1 };
    const mismo = identidad(obj);
    expect(mismo).toBe(obj);
  });
  test("Sad path: 2: objeto clonado no es la misma refereicnia", () => {
    const obj = { x: 1 };
    const clonado = identidad(obj, { clone: true });
    expect(clonado).not.toBe(obj);
  });
  test("Sad path: suma con valores no numericos", () => {
    expect(() => suma("2", 3).toThrow("a y b deben ser numeros"));
  });
});
