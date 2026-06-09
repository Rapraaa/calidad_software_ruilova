// src/validador.js

// Valida que la edad sea un número entre 0 y 120
function validarEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }
  if (edad < 0 || edad > 120) {
    throw new RangeError("La edad debe estar entre 0 y 120");
  }
  return true;
}

// Valida que el nombre no esté vacío y tenga al menos 2 caracteres
function validarNombre(nombre) {
  if (!nombre || nombre.trim() === "") {
    throw new Error("El nombre no puede estar vacío");
  }
  if (nombre.trim().length < 2) {
    throw new Error("El nombre debe tener al menos 2 caracteres");
  }
  return true;
}

// Divide dos números — lanza error si el divisor es cero
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

module.exports = { validarEdad, validarNombre, dividir };
