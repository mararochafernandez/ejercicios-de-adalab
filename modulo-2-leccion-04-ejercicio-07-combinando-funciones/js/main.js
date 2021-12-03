'use strict';


/* EJERCICIO 7
Combinando funciones
Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicio 5).
Sin modificar estas dos funciones, vamos a hacer lo siguiente:
- usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
- convertimos ese valor a número y lo asignamos a una constante
- usamos nuestra función del ejercicio 4 para saber si es par o impar
- escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...' */

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

const textEl = getEl('.text').innerHTML;
const num = parseInt(textEl);

if (par(num) === true) {
    console.log('Este número es PAR: ' + num);
} else {
    console.log('Este número es IMPAR: ' + num);
}