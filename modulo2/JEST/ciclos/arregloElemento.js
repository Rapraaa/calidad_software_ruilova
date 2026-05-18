function arregloElemento(numeros) {
    if(!Array.isArray(numeros) || numeros.length === 0)
        throw new TypeError('Arreglo no valido');
    let total = 0;
    for(let i = 0; i < numeros.length; i++) 
        total += numeros[i];
    return total / numeros.length;
}
module.exports = { arregloElemento };