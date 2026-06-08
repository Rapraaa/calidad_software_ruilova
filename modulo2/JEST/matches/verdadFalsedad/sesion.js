// src/sesion.js

// Devuelve el usuario si el token es válido, o null si no lo es
function obtenerUsuarioPorToken(token, usuarios) {
  if (!token) return null;
  return usuarios.find((u) => u.token === token) ?? null;
}

// Devuelve el mensaje de bienvenida si el usuario existe, o undefined si no
function mensajeBienvenida(usuario) {
  if (!usuario) return undefined;
  return `Bienvenido, ${usuario.nombre}`;
}

// Devuelve true si el usuario tiene sesión activa, false si no
function tieneSesionActiva(usuario) {
  return Boolean(usuario && usuario.activo);
}

module.exports = {
  obtenerUsuarioPorToken,
  mensajeBienvenida,
  tieneSesionActiva,
};
