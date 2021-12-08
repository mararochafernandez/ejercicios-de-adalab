'use strict';

/* EJERCICIO 4
Investigando event
Tenemos que preparar un botón con un listener para loguear el objeto event en la consola. Investigar si la clave type que encontramos en él es una propiedad o un método.
Nota: cuando logueamos un objeto en la consola, a su izquierda aparece un triangulo que nos permite desplegarlo para ver sus métodos y propiedades. */

const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('click', handlerButtonClick);

function handlerButtonClick(event) {
    console.log(event.type);
    console.log(event);
}