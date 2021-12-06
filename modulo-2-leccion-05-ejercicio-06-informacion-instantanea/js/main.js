'use strict';

/* EJERCICIO 6
Información instantánea
Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
Nota: el objetivo es hacerlo utilizando event.currentTarget. */

// obtener elemento html con clase .input
const inputElement = document.querySelector('.input');

// obtener elemento html con clase .text
const textElement = document.querySelector('.text');

// escuchar y gestionar evento keydown
inputElement.addEventListener('keydown', writeInTextElement);

// escribir en textElement el valor introducido en inputElement
function writeInTextElement(event) {
    textElement.innerHTML = event.currentTarget.value + event.key;
}