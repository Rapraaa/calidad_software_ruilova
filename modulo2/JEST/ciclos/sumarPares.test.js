const{ sumarPares } = require('./sumarPares');

describe('sumarPares', () => {
  test('Happy path: [1,2,3,4] => 6', () => {
    expect(sumarPares([1,2,3,4])).toBe(6);
  })

  test('Happy path: [1,3,5] => 0', () => {
    expect(sumarPares([1,3,5])).toBe(0);
  })

  test('Sad path: arreglo vacio', () => {
    expect(() => sumarPares(0)).toThrow('Arreglo no valido');
    expect(() => sumarPares([])).toThrow('Arreglo no valido');
  })
})