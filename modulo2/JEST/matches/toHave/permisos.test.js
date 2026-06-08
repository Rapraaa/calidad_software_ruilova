// tests/permisos.test.js
const {
  obtenerPermisos,
  puedeRealizarAccion,
  rolesConAcceso,
} = require("./permisos");

// toContain — el array contiene ese elemento primitivo (string, número...)
test('el admin tiene el permiso "eliminar"', () => {
  expect(obtenerPermisos("admin")).toContain("eliminar");
});

test('el editor tiene el permiso "leer"', () => {
  expect(obtenerPermisos("editor")).toContain("leer");
});

// not.toContain — el array NO contiene ese elemento
test('el editor NO tiene el permiso "eliminar"', () => {
  expect(obtenerPermisos("editor")).not.toContain("eliminar");
});

test('el visitante NO tiene el permiso "escribir"', () => {
  expect(obtenerPermisos("visitante")).not.toContain("escribir");
});

// toHaveLength — el array o string tiene esa longitud
test("el admin tiene exactamente 4 permisos", () => {
  expect(obtenerPermisos("admin")).toHaveLength(4);
});

test("el visitante tiene exactamente 1 permiso", () => {
  expect(obtenerPermisos("visitante")).toHaveLength(1);
});

test("rol desconocido devuelve array vacío", () => {
  expect(obtenerPermisos("desconocido")).toHaveLength(0);
});

// toContain en el array de roles
test('la lista de roles contiene "editor"', () => {
  expect(rolesConAcceso()).toContain("editor");
});

test("la lista de roles tiene 3 elementos", () => {
  expect(rolesConAcceso()).toHaveLength(3);
});
