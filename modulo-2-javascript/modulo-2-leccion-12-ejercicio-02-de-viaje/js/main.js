'use strict';

/* EJERCICIO 2
De viaje
Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
Haz lo mismo para París y Nueva York
Nota: Usa imágenes que encuentres por Internet. */

const selectElement = document.querySelector('.js-select');
const imageElements = document.querySelectorAll('.js-image');

function handleChangeSelect(event) {
  for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].src = `./images/${event.currentTarget.value}${i+1}.jpg`;
  }
}

selectElement.addEventListener('change', handleChangeSelect);