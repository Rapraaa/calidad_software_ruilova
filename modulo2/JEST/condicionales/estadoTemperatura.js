function estadoTemperatura(temperatura){
    if (typeof temperatura !== 'number' || temperatura < -50 || temperatura > 60) {
        throw new TypeError('temperatura inválida');
    }
    

    if (temperatura >= 30)
        return 'Calor';
    else if (temperatura < 30 && temperatura >= 15)
        return 'Templado';
    else
        return 'Frio';
}

module.exports = { estadoTemperatura };