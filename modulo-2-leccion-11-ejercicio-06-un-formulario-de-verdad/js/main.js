'use strict';

/* EJERCICIO 6
Un formulario de verdad
Vamos a seguir trabajando sobre el ejercicio 4. El formulario nos ha quedado un poco pobretón, añadamos al menos un campo más para el apellido.
¡Pero, ojo! Queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.
¡A por ello! */

// objeto
const user = {
  name: '',
  lastName: ''
};

// get html elements
const inputElements = document.querySelectorAll('.js-input');
const textElement = document.querySelector('.js-text');

// render data
function renderData(user) {
  if (user && (user.name !== '' || user.lastName !== '')) {
    textElement.innerHTML = `Usuario: ${user.name} ${user.lastName}`;
  } else {
    textElement.innerHTML = '';
  }
}

// handle keyup event
function handleKeyupInput(event) {
  const value = event.currentTarget.value;
  const id = event.currentTarget.id;
  user[id] = value;

  // save data in local storage
  localStorage.setItem('user', JSON.stringify(user));

  // render data
  renderData(user);
}

// query data in local storage
const userLocalStorage = JSON.parse(localStorage.getItem('user'));

// render data
renderData(userLocalStorage);

for (const inputElement of inputElements) {
  // set input value and object value
  if (userLocalStorage) {
    inputElement.value = userLocalStorage[inputElement.id];
    user[inputElement.id] = userLocalStorage[inputElement.id];
  }
  // listen keyup event
  inputElement.addEventListener('keyup', handleKeyupInput);
}