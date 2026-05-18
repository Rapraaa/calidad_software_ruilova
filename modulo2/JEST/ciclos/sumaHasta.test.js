const {sumaHasta} = require('./sumaHasta');

describe('sumaHasta', () => {
  test('Happy path: n=5 => 15', () => {
    expect(sumaHasta(5)).toBe(15);
  })
  
  test('Happy path: n=1 => 1', () => {
    expect(sumaHasta(1)).toBe(1);
  })

  test('Sad path: n inválido', () => {
    expect(() => sumaHasta(0)).toThrow('n debe ser entero>=1');
    expect(() => sumaHasta(2.6)).toThrow('n debe ser entero>=1');
    expect(() => sumaHasta('10')).toThrow('n debe ser entero>=1');
  })
})