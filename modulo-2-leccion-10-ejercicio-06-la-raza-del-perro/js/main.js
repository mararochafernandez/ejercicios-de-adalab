'use strict';

/* EJERCICIO 6
La raza del perro
Vamos a realizar un ejercicio con la API de 'https://dog.ceo/dog-api/' y la api de 'https://rand.fun/'. Tenemos que pedir un listado de razas de perros, y con un número aleatorio elegir una raza del listado:
pintar un mensaje que muestre la raza elegida al azar.
pedir una imagen aleatoria de un perro de esa raza y pintarla.
Si has llegado hasta aquí te proponemos otro reto, intenta que la última función sea la única que se encargue de interactuar con html, y sea esta la que pinte la raza y la imagen. ¡Al turrón! */

let breeds = [];
let breed = '';

function getDogImageByBreed() {
  fetch('https://dog.ceo/api/breeds/list')
    .then(breedsResponse => breedsResponse.json())
    .then(breedsData => {
      breeds = breedsData.message;
      const numberOfBreeds = breedsData.message.length;
      console.log(`Número de razas: ${numberOfBreeds}`);
      return fetch(`https://api.rand.fun/number/integer?min=0&max=${numberOfBreeds - 1}`);
    })
    .then(integerResponse => integerResponse.json())
    .then(integerData => {
      const randomNumber = integerData.result;
      console.log(`Número aleatorio: ${randomNumber}`);
      breed = breeds[randomNumber];
      console.log(`Raza: ${breed}`);
      return fetch(`https://dog.ceo/api/breed/${breeds[randomNumber]}/images/random`);
    })
    .then(imageResponse => imageResponse.json())
    .then(imageData => {
      const textElement = document.querySelector('.js-text');
      const imageElement = document.querySelector('.js-image');
      const imageURL = imageData.message;
      console.log(`URL: ${imageURL}`);
      textElement.innerHTML = breed;
      imageElement.src = imageURL;
      imageElement.alt = breed;
    });
}

getDogImageByBreed();