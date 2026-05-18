const { aprueba } = require('./aprueba');

describe('aprueba', () => {
    
    test('Happy path: 7 => aprueba', () => {
        expect(aprueba(7)).toBe('aprueba'); 
    });

    test('Happy path: 6 => supletorio', () => {
        expect(aprueba(6)).toBe('supletorio'); 
    });

    test('Happy path: 2 => reprueba', () => {
        expect(aprueba(2)).toBe('reprueba');  
    });


    test('Sad path: nota inválida', () => {
        expect(() => aprueba(-1)).toThrow('nota inválida');
        expect(() => aprueba('18')).toThrow('nota inválida'); 
    });
});