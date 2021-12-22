'use strict';

/* EJERCICIO 2
De viaje
Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
Haz lo mismo para París y Nueva York
Nota: Usa imágenes que encuentres por Internet. */

const selectElement = document.querySelector('.js-select');
const bodyElement = document.querySelector('js-body');
let newSection = null;

function handleChangeSelect(event) {
  if (newSection) {
    newSection.remove();
  } else {
    newSection = document.createElement('section');
    bodyElement.appendChild(newSection);
  }



  for (let i = 0; i < 3; i++) {
    const newImage = document.createElement('img');
    newImage.src = `./images/${event.currentTarget.value}${i+1}.jpg`;
    newSection.appendChild(newImage);
  }
}

selectElement.addEventListener('change', handleChangeSelect);