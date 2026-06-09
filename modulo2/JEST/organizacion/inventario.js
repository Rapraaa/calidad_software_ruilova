// src/inventario.js
class Inventario {
  constructor() {
    this.productos = new Map();
  }

  agregar(id, nombre, cantidad) {
    if (cantidad < 0) throw new Error("La cantidad no puede ser negativa");
    this.productos.set(id, { id, nombre, cantidad });
  }

  retirar(id, cantidad) {
    const producto = this.productos.get(id);
    if (!producto) throw new Error(`Producto ${id} no existe`);
    if (producto.cantidad < cantidad) throw new Error("Stock insuficiente");
    producto.cantidad -= cantidad;
    return producto;
  }

  existencias(id) {
    return this.productos.get(id)?.cantidad ?? 0;
  }

  totalProductos() {
    return this.productos.size;
  }
}

module.exports = { Inventario };
