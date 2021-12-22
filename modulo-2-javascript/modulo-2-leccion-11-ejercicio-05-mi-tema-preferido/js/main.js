'use strict';

/* EJERCICIO 5
Mi tema preferido
Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:
Añadiremos dos radio buttons para poder elegir entre claro y oscuro.
Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.
Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.
Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.
Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción. */

// get html elements
const radioElements = document.querySelectorAll('.js-radio');
const bodyElement = document.querySelector('.js-body');

// handle click event
function handleClickRadio(event) {
  const radio = event.currentTarget.value;

  // apply selected theme
  bodyElement.classList.remove('light');
  bodyElement.classList.remove('dark');
  if (radio === 'light') {
    bodyElement.classList.add(radio);
  } else {
    bodyElement.classList.add(radio);
  }

  // save data in local storage
  localStorage.setItem('theme', radio);
}

// query data in local storage
const themeLocalStorage = localStorage.getItem('theme');

// apply stored theme
if (themeLocalStorage) {
  bodyElement.classList.remove('light');
  bodyElement.classList.remove('dark');
  bodyElement.classList.add(themeLocalStorage);
}

for (const radioElement of radioElements) {

  // check radio button
  if (radioElement.value === themeLocalStorage) {
    console.log(radioElement);
    radioElement.checked = true;
  }

  // listen click event
  radioElement.addEventListener('click', handleClickRadio);
}