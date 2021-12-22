'use strict';

/* EJERCICIO 5
Jugando con el teclado
Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document. */

// obtener elemento html con clase .body
const bodyElement = document.querySelector('.body');

// cambiar color de fondo de bodyElement según la tecla pulsada
function changeBackgroundColor(event) {

    // borrar clase .background--x si bodyElement la contiene
    if (bodyElement.classList.contains('background--1')) {
        bodyElement.classList.remove('background--1');
    }
    if (bodyElement.classList.contains('background--2')) {
        bodyElement.classList.remove('background--2');
    }

    // añadir clase .background--x según la tecla pulsada
    switch (event.key) {
        case 'r':
            bodyElement.classList.add('background--1');
            break;
        case 'm':
            bodyElement.classList.add('background--2');
            break;
    }
}

// escuchar y gestionar evento keydown
document.addEventListener('keydown', changeBackgroundColor);