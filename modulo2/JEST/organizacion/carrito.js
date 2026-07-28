// src/carrito.js
class Carrito {
  constructor() {
    this.items = [];
  }

  agregar(producto) {
    const existente = this.items.find((i) => i.id === producto.id);
    if (existente) {
      existente.cantidad += producto.cantidad;
    } else {
      this.items.push({ ...producto });
    }
  }

  eliminar(id) {
    const indice = this.items.findIndex((i) => i.id === id);
    if (indice === -1) throw new Error(`Producto con id ${id} no encontrado`);
    this.items.splice(indice, 1);
  }

  calcularTotal() {
    return this.items.reduce((total, item) => {
      return total + item.precio * item.cantidad;
    }, 0);
  }

  limpiar() {
    this.items = [];
  }

  get cantidadTotal() {
    return this.items.reduce((sum, item) => sum + item.cantidad, 0);
  }
}

module.exports = { Carrito };
