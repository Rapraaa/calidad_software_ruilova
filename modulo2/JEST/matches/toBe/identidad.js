function identidad(valor, { clone = false } = {}) {
  const esObjeto = valor !== null && typeof valor === "object";
  if (clone) {
    if (!esObjeto) throw new TypeError("Solo se puede clonar un objeto");

    if (Array.isArray(valor)) return [...valor];
    return { ...valor };
  }
  return valor;
}
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("a y b deben ser numeros");
  }
  return a + b;
}
module.exports = { identidad, suma };
