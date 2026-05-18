const{ sumatoriaCien } = require('./sumatoriaCien');

describe('sumatoriaCien', () => {
  test('Happy path: [100,101,99] => 2', () => {
    expect(sumatoriaCien([100,101,99])).toBe(2);
  })

  test('Happy path: [1,2,3] => 0', () => {
    expect(sumatoriaCien([1,2,3])).toBe(0);
  })

  test('Sad path: arreglo vacio', () => {
    expect(() => sumatoriaCien(0)).toThrow('Arreglo no valido');
    expect(() => sumatoriaCien([])).toThrow('Arreglo no valido');
  })
})