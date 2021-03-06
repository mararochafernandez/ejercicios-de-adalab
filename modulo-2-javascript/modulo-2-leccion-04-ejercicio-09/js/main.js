'use strict';

// EJERCICIO 7 
/*
const textEl = getEl('.text').innerHTML;
const num = parseInt(textEl);

function getEl(selector) {
    return document.querySelector(selector);
}

function par(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (par(num) === true) {
    console.log('Este número es PAR: ' + num);
} else {
    console.log('Este número es IMPAR: ' + num);
}
*/

/***/

// Transformar el ejercicio anterior usando funciones arrow

// obtener elemento html
const getElement = selector => document.querySelector(selector);

// obtener contenido del elemento html 
const text = getElement('.text').innerHTML;

// convertir en número
const number = parseInt(text);

// averiguar si es par o impar
const par = num => num % 2 ? false : true;

// imprimir resultado en pantalla
console.log(par(number) ? `Este número es PAR: ${number}` : `Este número es IMPAR: ${number}`);