const { crearAlumno } = require("./alumno");

describe("toEqual crear alumno", () => {
  test("Happy path: ToEqual", () => {
    expect(crearAlumno("Ana", 20)).toEqual({ nombre: "Ana", edad: 20 });
  });
  test("Sad path: lanzar error datos invalidos", () => {
    expect(() => crearAlumno(null, 20)).toThrow("Nombre invalido");
    expect(() => crearAlumno("Maria", -1)).toThrow("Edad invalida");
  });
});
