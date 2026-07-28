// Crea un objeto producto con su total ya calculado
function crearProducto(nombre, precio, cantidad) {
  return {
    nombre,
    precio,
    cantidad,
    total: precio * cantidad,
  };
}

// Recibe un array de productos y devuelve los que cuestan menos que el límite
function filtrarBaratos(productos, limite) {
  return productos.filter((p) => p.precio < limite);
}

// Devuelve el nombre de los productos en un array de strings
function obtenerNombres(productos) {
  return productos.map((p) => p.nombre);
}

module.exports = { crearProducto, filtrarBaratos, obtenerNombres };
