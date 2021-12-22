'use strict';


/* EJERCICIO 5
querySelector para todas
Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:
const btnEl = getEl(".btn");
Nota: Prepara un HTML con varios elementos para poder probarla.*/

function getEl(selector) {
    return document.querySelector(selector);
}

const btnEl = getEl(".btn");
console.log(btnEl);

const menuEl = getEl(".menu");
console.log(menuEl);

const containerEl = getEl(".container");
console.log(containerEl);

const titleEl = getEl(".title");
console.log(titleEl);

const textEl = getEl(".text");
console.log(textEl);