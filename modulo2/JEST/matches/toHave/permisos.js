// src/permisos.js

// Devuelve la lista de acciones permitidas según el rol
function obtenerPermisos(rol) {
  const tabla = {
    admin: ["leer", "escribir", "eliminar", "configurar"],
    editor: ["leer", "escribir"],
    visitante: ["leer"],
  };
  return tabla[rol] ?? [];
}

// Devuelve true si el rol puede realizar la acción
function puedeRealizarAccion(rol, accion) {
  return obtenerPermisos(rol).includes(accion);
}

// Devuelve los roles que tienen al menos un permiso
function rolesConAcceso() {
  return ["admin", "editor", "visitante"];
}

module.exports = { obtenerPermisos, puedeRealizarAccion, rolesConAcceso };
