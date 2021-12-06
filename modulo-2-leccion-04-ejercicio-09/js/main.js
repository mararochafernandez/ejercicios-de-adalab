'use strict';

/* EJERCICIO 7 

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
} */


/* ARROW FUNCTIONS */

// obtener elemento html
const getElement = selector => document.querySelector(selector);

console.log(getElement('.text'));

// obtener contenido del elemento html 
const textElement = getElement('.text').innerHTML;

console.log(textElement);

// convertir en número
const numElement = parseInt(textElement);

console.log(numElement);

// averiguar si es par o impar
const par = num => num % 2 ? false : true;

console.log(par(numElement));

// imprimir resultado en pantalla
console.log(par(numElement) ? `Este número es PAR: ${numElement}` : `Este número es IMPAR: ${numElement}`);