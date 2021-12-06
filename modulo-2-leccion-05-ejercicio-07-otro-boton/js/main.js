'use strict';

/* EJERCICIO 7
Otro botón
Vamos a preparar un botón y una clase de CSS. La clase tiene que cambiar alguno de los estilos del botón (por ejemplo el color de fondo), pero no se la vamos a poner inicialmente. Cada vez que la usuaria pulse el botón hay que:
- añadir la clase si no la tiene
- quitarla la clase si la tiene
Nota: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle */

// obtener elemento html con clase .button
const buttonElement = document.querySelector('.button');

// escuchar y gestionar evento click
buttonElement.addEventListener('click', changeStyle);

// añadir o eliminar estilo
function changeStyle(event) {
    event.currentTarget.classList.toggle('button--tomato');
}

/***/

/*
// lo mismo pero con función arrow
buttonElement.addEventListener('click', (event) => event.currentTarget.classList.toggle('button--tomato'));
*/