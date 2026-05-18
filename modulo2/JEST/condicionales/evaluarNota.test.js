const{ evaluarNota } = require('./evaluarNota');

describe('evaluarNota', () => {
  test('Happy path: 8 => Aprobado', () => {
    expect(evaluarNota(8)).toBe('Aprobado');
  })

  test('Happy path: 5 => Supletorio', () => {
    expect(evaluarNota(5)).toBe('Supletorio');
  })

  test('Happy path: 2 => Reprobado', () => {
    expect(evaluarNota(2)).toBe('Reprobado');
  })

  test('Sad path: nota invalida', () => {
    expect(() => evaluarNota(-1)).toThrow('Nota invalida');
    expect(() => evaluarNota('7')).toThrow('Nota invalida');
    expect(() => evaluarNota(11)).toThrow('Nota invalida');
  })
})


