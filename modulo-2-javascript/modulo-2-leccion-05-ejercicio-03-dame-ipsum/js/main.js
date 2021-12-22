'use strict';

/* EJERCICIO 3
Dame ipsum
Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum. */

// contenido del nuevo párrafo
const newText = 'Vivamus ac enim sodales, cursus purus quis, iaculis purus. Nam mauris odio, egestas quis elit sit amet, malesuada tristique sapien. Aenean tincidunt lacus nec massa efficitur, eget congue elit varius.';

// obtener elemento html con clase .text
const text = document.querySelector('.text');

// obtener elemento html con clase .text2
const text2 = document.querySelector('.text2');

// escuchar y gestionar evento mouseover
text.addEventListener('mouseover', () => text2.innerHTML = newText);