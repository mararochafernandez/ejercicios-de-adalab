'use strict';

/* EJERCICIO 2
Chihuahas, chihuahas por todas partes
Sigamos jugando un poco con el Dog API:
a) Vamos a modificar el ejemplo anterior para que las fotos de nuestra página salgan sólo perros de la raza Chihuahua (consulta la documentación de este API).
b) Vamos a encapsular toda la lógica para crear una petición en una función. Añadimos un botón a la página con el título 'Enséñame otro Chihuahua' de forma que al pulsarlo se haga otra petición al servidor de una imagen aleatoria y aparezca una nueva imagen de Chihuaua. */

function getBoxerImage(button, image) {

  function getDogImage() {
    fetch('https://dog.ceo/api/breed/boxer/images/random') //chihuahua
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector(image);
        img.src = data.message;
        img.alt = 'Un perro';
      });
  }

  const btn = document.querySelector(button);
  btn.addEventListener('click', getDogImage);

}

getBoxerImage('.js-dog1', '.js-img1');
getBoxerImage('.js-dog2', '.js-img2');