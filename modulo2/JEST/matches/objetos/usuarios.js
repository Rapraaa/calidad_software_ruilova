// src/usuarios.js

// Crea un objeto usuario con todos sus campos
function crearUsuario(nombre, email) {
  return {
    id: Math.floor(Math.random() * 1000), // número dinámico
    nombre,
    email: email.toLowerCase(),
    activo: true,
    creadoEn: new Date().toISOString(), // fecha dinámica
    direccion: {
      ciudad: "Sin asignar",
      cp: "00000",
    },
  };
}

// Actualiza la ciudad del usuario y devuelve el objeto modificado
function actualizarCiudad(usuario, ciudad) {
  return { ...usuario, direccion: { ...usuario.direccion, ciudad } };
}

module.exports = { crearUsuario, actualizarCiudad };
