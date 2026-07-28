// src/usuario.js
function crearUsuario(nombre, email, edad) {
  if (!nombre || nombre.trim() === "")
    throw new Error("El nombre es obligatorio");
  if (!email || !email.includes("@")) throw new Error("El email no es válido");
  if (edad < 0 || edad > 120) throw new Error("La edad no es válida");

  return {
    id: Math.floor(Math.random() * 10000),
    nombre: nombre.trim(),
    email: email.toLowerCase(),
    edad,
    activo: true,
    creadoEn: new Date().toISOString(),
  };
}

function desactivarUsuario(usuario) {
  return { ...usuario, activo: false };
}

function cambiarEmail(usuario, nuevoEmail) {
  if (!nuevoEmail.includes("@")) throw new Error("Email inválido");
  return { ...usuario, email: nuevoEmail.toLowerCase() };
}

module.exports = { crearUsuario, desactivarUsuario, cambiarEmail };
