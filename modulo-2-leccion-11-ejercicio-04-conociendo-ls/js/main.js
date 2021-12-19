'use strict';

/* EJERCICIO 4
Conociendo LS
Escribir datos en formularios es muy tedioso para los usuarios. ¡Vamos a cachearlos para facilitarles la vida!
Prepara un input de texto para el nombre y un párrafo vacío
Cada vez que la usuaria escriba su nombre (keyUp) tenemos que pintar el valor en el párrafo y guardarlo en localStorage.
Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo. */

// get html elements
const nameElement = document.querySelector('.js-name');
const textElement = document.querySelector('.js-text');

// handle keyup event
function handleKeyupName(event) {
  const name = event.currentTarget.value;

  // save or remove data in local storage
  if (name) {
    localStorage.setItem('name', name);
  } else {
    localStorage.removeItem('name');
  }

  // render data
  textElement.innerHTML = name;
}

// listen keyup event
nameElement.addEventListener('keyup', handleKeyupName);

// query data in local storage
const nameLocalStorage = localStorage.getItem('name');

// render data
if (nameLocalStorage) {
  nameElement.value = nameLocalStorage;
  textElement.innerHTML = nameLocalStorage;
}