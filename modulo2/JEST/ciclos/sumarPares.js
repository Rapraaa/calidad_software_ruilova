function sumarPares(numeros) {
    if(!Array.isArray(numeros) || numeros.length === 0)
        throw new TypeError('Arreglo no valido');
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0){
            suma += numeros[i];
        }
    }
    return suma;
}
module.exports = { sumarPares };