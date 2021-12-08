'use strict';

/* EJERCICIO 5
Investigando los elementos
Vamos a preparar un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir para investigarlo y comentar con la compañera estas propiedades:
- value
- nodeName
- required
Nota Cuando imprimimos un elemento en la consola con console.log vemos la etiqueta de HTML y podemos desplegarla para ver su contenido. Si queremos ver el objeto con sus propiedades y métodos tendremos que usar console.dir. */

const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('click', handlerButtonClick);

function handlerButtonClick() {
    const inputElement = document.querySelector('.input');
    if (inputElement.value) {
        // console.log
        console.log(inputElement);
        console.log(inputElement.value);
        console.log(inputElement.nodeName);
        console.log(inputElement.required);
        // console.dir
        console.dir(inputElement);
        console.dir(inputElement.value);
        console.dir(inputElement.nodeName);
        console.dir(inputElement.required);
    } else {
        console.error('Input vacío');
    }
}