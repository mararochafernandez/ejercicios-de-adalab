'use strict';

/* EJERCICIO 1
Hola click
Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió! */

// obtener elemento html con clase .button
const button = document.querySelector('.button');

// obtener elemento html con clase .text
const text = document.querySelector('.text');

// escuchar y gestionar evento click

/*
// forma 1: con función clásica aparte
function changeText() {
    text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}
button.addEventListener('click', changeText);
*/

/*
// forma 2: con función clásica
button.addEventListener('click', function changeText() {
    text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
});
*/

// forma 3: con función arrow
button.addEventListener('click', () => text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!');