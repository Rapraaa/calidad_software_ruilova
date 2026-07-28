// tests/usuario.test.js
const { crearUsuario, desactivarUsuario, cambiarEmail } = require("./usuario");

// describe() agrupa tests relacionados bajo una descripción común
describe("crearUsuario", () => {
  test("crea un usuario con los datos correctos", () => {
    const usuario = crearUsuario("Ana García", "ana@ejemplo.com", 28);

    expect(usuario).toHaveProperty("nombre", "Ana García");
    expect(usuario).toHaveProperty("email", "ana@ejemplo.com");
    expect(usuario).toHaveProperty("edad", 28);
    expect(usuario).toHaveProperty("activo", true);
  });

  test("convierte el email a minúsculas", () => {
    const usuario = crearUsuario("Luis", "LUIS@EJEMPLO.COM", 35);
    expect(usuario.email).toBe("luis@ejemplo.com");
  });

  test("elimina espacios del nombre", () => {
    const usuario = crearUsuario("  Ana  ", "ana@ejemplo.com", 28);
    expect(usuario.nombre).toBe("Ana");
  });

  // Describe anidado para los casos de error
  describe("cuando los datos son inválidos", () => {
    test("lanza error si el nombre está vacío", () => {
      expect(() => crearUsuario("", "ana@ejemplo.com", 28)).toThrow(
        "El nombre es obligatorio",
      );
    });

    test("lanza error si el nombre es solo espacios", () => {
      expect(() => crearUsuario("   ", "ana@ejemplo.com", 28)).toThrow(
        "El nombre es obligatorio",
      );
    });

    test("lanza error si el email no tiene arroba", () => {
      expect(() => crearUsuario("Ana", "sinArroba.com", 28)).toThrow(
        "El email no es válido",
      );
    });

    test("lanza error si la edad es negativa", () => {
      expect(() => crearUsuario("Ana", "ana@ejemplo.com", -1)).toThrow(
        "La edad no es válida",
      );
    });

    test("lanza error si la edad supera 120", () => {
      expect(() => crearUsuario("Ana", "ana@ejemplo.com", 150)).toThrow(
        "La edad no es válida",
      );
    });
  });
});

describe("desactivarUsuario", () => {
  test("marca al usuario como inactivo", () => {
    const usuario = crearUsuario("Luis", "luis@ejemplo.com", 30);
    const inactivo = desactivarUsuario(usuario);

    expect(inactivo.activo).toBe(false);
  });

  test("no modifica el usuario original", () => {
    const usuario = crearUsuario("Luis", "luis@ejemplo.com", 30);
    desactivarUsuario(usuario);

    // El original debe seguir activo
    expect(usuario.activo).toBe(true);
  });
});

describe("cambiarEmail", () => {
  test("actualiza el email correctamente", () => {
    const usuario = crearUsuario("Ana", "ana@viejo.com", 28);
    const actualizado = cambiarEmail(usuario, "ANA@NUEVO.COM");

    expect(actualizado.email).toBe("ana@nuevo.com");
  });

  test("lanza error si el nuevo email es inválido", () => {
    const usuario = crearUsuario("Ana", "ana@viejo.com", 28);
    expect(() => cambiarEmail(usuario, "sinArroba")).toThrow("Email inválido");
  });
});
