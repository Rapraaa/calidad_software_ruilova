const { arregloElemento } = require('./arregloElemento');

describe('arregloElemento', () => {
  test('Happy path: [5,5,5] => 5', () => {
    expect(arregloElemento([5,5,5])).toBe(5);
  })
  test('Happy path: [6,6,6] => 6', () => {
    expect(arregloElemento([6,6,6])).toBe(6);
  })
  test('Sad path: arreglo vacio', () => {
    expect(() => arregloElemento(0)).toThrow('Arreglo no valido');
    expect(() => arregloElemento([])).toThrow('Arreglo no valido');
  })
})