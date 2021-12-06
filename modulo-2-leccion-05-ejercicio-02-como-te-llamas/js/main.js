'use strict';

/* EJERCICIO 2
¿Cómo te llamas?
Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.
Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, en el caso de los inputs utilizaremos value. */

// obtener elemento html con clase .name
const inputName = document.querySelector('.name');

// obtener elemento html con clase .button
const button = document.querySelector('.button');

// escuchar y gestionar evento click
button.addEventListener('click', () => inputName.value ? console.log(`Hola, ${inputName.value}`) : console.error('Error: input vacío'));

/***/

// LA SENTENCIA ANTERIOR PERO DE FORMA MÁS LEGIBLE:

/*
// función imprimir mensaje en consola
function printMessage() {
    if (inputName.value !== '') {
        // si el valor del input no está vacío
        console.log(`Hola, ${inputName.value}`);
    } else {
        console.error('Error: input vacío');
    }
}

// escuchar y gestionar evento click
button.addEventListener('click', printMessage);
*/