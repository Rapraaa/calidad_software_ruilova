function obtenerFrutas() {
  return ["manzana", "pera", "uva", "mango"];
}

function contienePalabra(texto, palabra) {
  if (typeof texto !== "string" || typeof palabra !== "string") {
    throw new TypeError("Ambos argumentos deben ser strings");
  }
  return texto.toLowerCase().includes(palabra.toLowerCase());
}

function agregarElemento(lista, elemento) {
  if (!Array.isArray(lista)) throw new TypeError("lista debe ser un array");
  if (!elemento) throw new Error("elemento no puede estar vacío");
  lista.push(elemento);
  return lista;
}

module.exports = { obtenerFrutas, contienePalabra, agregarElemento };
