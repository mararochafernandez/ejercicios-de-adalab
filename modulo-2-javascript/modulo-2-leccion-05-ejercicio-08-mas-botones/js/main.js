'use strict';

/* EJERCICIO 8
Más botones
Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler.
Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado. */

// obtener elemento html con clase .button--x
const buttonElement1 = document.querySelector('.button--1');
const buttonElement2 = document.querySelector('.button--2');

// escuchar y gestionar evento click
buttonElement1.addEventListener('click', changeStyle);
buttonElement2.addEventListener('click', changeStyle);

// añadir o eliminar estilo
function changeStyle(event) {
    const currentElement = event.currentTarget;
    currentElement.classList.toggle('button--tomato');
}