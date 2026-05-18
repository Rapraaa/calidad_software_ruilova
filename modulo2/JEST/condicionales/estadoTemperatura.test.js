const { estadoTemperatura } = require('./estadoTemperatura');

describe('estadoTemperatura', () => {
    
    test('Happy path: 30 => Calor', () => {
        expect(estadoTemperatura(30)).toBe('Calor'); 
    });

    test('Happy path: 6 => Templado', () => {
        expect(estadoTemperatura(25)).toBe('Templado'); 
    });

    test('Happy path: 1 => Frio', () => {
        expect(estadoTemperatura(2)).toBe('Frio');  
    });


    test('Sad path: temperatura inválida', () => {
        expect(() => estadoTemperatura(70)).toThrow('temperatura inválida');
        expect(() => estadoTemperatura(-70)).toThrow('temperatura inválida');
        expect(() => estadoTemperatura('18')).toThrow('temperatura inválida'); 
    });
});