"use strict"
/**
 * @fileOverview Este archivo contiene ejemplos de funciones con for
 * @author Christian Vazquez
 * @version 1.0
 */

/**
 * @description sumaArray suma los valores de un array 
 * @param {Array} numeros  array de numeros 
 * @return {number}
 */

function sumaArray(numeros) {
    let suma = 0;
    for (let a of numeros) {
        suma = suma + a
    }
    return suma;
}
let sumaValor = sumaArray([2, 3, 4, 5]);
console.log(sumaValor)

function sumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + numeros[pos];
    }
    return suma
}

let sumaValor2 = sumaArray2([2, 3, 4, 5]);
console.log(sumaValor2)

hola
function sumaArray3(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

let sumaValor3 = sumaArray3([2, 3, 4, 5]);
console.log(sumaValor3)