'use strict';


/* EJERCICIO 1
Función multiplicación
Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log(). */
console.log('EJERCICIO 1:');

function multiplicacion(a, b) {
    return a * b;
}

console.log(multiplicacion(10, 10));
console.log(multiplicacion(2, 5));
console.log(multiplicacion(3, 7));


/* EJERCICIO 2
Función media
Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola. */
console.log('EJERCICIO 2:');

function media(a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(media(10, 10, 10, 10));
console.log(media(2, 4, 6, 8));
console.log(media(2, 2, 4, 4));


/* EJERCICIO 3
Ticket con IVA
Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo. */
console.log('EJERCICIO 3:');

const resultado = function ticketConIVA(precio) {
    return `Precio sin IVA: ${precio}, IVA: ${precio * 0.21} y total: ${precio + precio * 0.21}`;
}

console.log(resultado(10));


/* EJERCICIO 4
Pares o nones
Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
Ejecutala e imprime el resultado para comprobar que funciona. */
console.log('EJERCICIO 4:');

function par(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(par(10));


/* EJERCICIO 5
querySelector para todas
Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:
const btnEl = getEl(".btn");
Nota: Prepara un HTML con varios elementos para poder probarla.*/
console.log('EJERCICIO 5:');

function getEl(selector) {
    return document.querySelector(selector);
}

const btnEl = getEl(".btn");

console.log(btnEl);
console.log(getEl('.menu'));
console.log(getEl('.container'));
console.log(getEl('.title'));
console.log(getEl('.text'));