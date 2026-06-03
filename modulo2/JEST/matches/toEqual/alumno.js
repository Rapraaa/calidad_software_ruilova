function crearAlumno(nombre, edad) {
  if (!nombre || typeof nombre != "string") {
    throw new TypeError("Nombre invalido");
  }
  if (edad < 0) {
    throw new TypeError("Edad invalida");
  }
  return {
    nombre,
    edad,
  };
}
module.exports = { crearAlumno };
