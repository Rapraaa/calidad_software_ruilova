function aprueba(nota){
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
        throw new TypeError('nota inválida');
    }

    if (nota >= 7)
        return 'aprueba';
    else if (nota < 7 && nota >= 4)
        return 'supletorio';
    else
        return 'reprueba';
}

module.exports = { aprueba };