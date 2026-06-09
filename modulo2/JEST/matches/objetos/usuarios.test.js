// tests/usuarios.test.js
const { crearUsuario, actualizarCiudad } = require("./usuarios");

// toHaveProperty — el objeto tiene esa propiedad (y opcionalmente ese valor)
test("el usuario creado tiene la propiedad nombre", () => {
  const usuario = crearUsuario("Ana", "ana@ejemplo.com");
  expect(usuario).toHaveProperty("nombre");
});

test("el email se guarda en minúsculas", () => {
  const usuario = crearUsuario("Ana", "ANA@EJEMPLO.COM");
  expect(usuario).toHaveProperty("email", "ana@ejemplo.com");
});

test("el usuario empieza activo", () => {
  const usuario = crearUsuario("Luis", "luis@ejemplo.com");
  expect(usuario).toHaveProperty("activo", true);
});

// Propiedad anidada con punto
test("el usuario tiene dirección con ciudad", () => {
  const usuario = crearUsuario("Ana", "ana@ejemplo.com");
  expect(usuario).toHaveProperty("direccion.ciudad", "Sin asignar");
});

test("actualizarCiudad cambia la ciudad correctamente", () => {
  const usuario = crearUsuario("Ana", "ana@ejemplo.com");
  const actualizado = actualizarCiudad(usuario, "Madrid");
  expect(actualizado).toHaveProperty("direccion.ciudad", "Madrid");
});

// expect.objectContaining — verifica solo las propiedades que nos importan
// Útil cuando el objeto tiene campos dinámicos (id, fechas)
test("el usuario tiene el nombre y email correctos (sin importar el id)", () => {
  const usuario = crearUsuario("Ana", "ana@ejemplo.com");

  // id y creadoEn son dinámicos — no los verificamos
  expect(usuario).toEqual(
    expect.objectContaining({
      nombre: "Ana",
      email: "ana@ejemplo.com",
      activo: true,
    }),
  );
});

test("el array de usuarios contiene a Ana (búsqueda parcial)", () => {
  const lista = [
    crearUsuario("Ana", "ana@ejemplo.com"),
    crearUsuario("Luis", "luis@ejemplo.com"),
  ];

  expect(lista).toContainEqual(expect.objectContaining({ nombre: "Ana" }));
});
