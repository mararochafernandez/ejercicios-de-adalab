'use strict';

/* EJERCICIO 3
Autocompletado
Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
Nombre
Apellidos
Teléfono
Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente. */

const users = [{
    name: 'Mara',
    lastname: 'Rocha',
    age: 37
  },
  {
    name: 'Julia',
    lastname: 'Fernández',
    age: 6
  },
  {
    name: 'Elena',
    lastname: 'Fernández',
    age: 3
  }
];

const selectElement = document.querySelector('.js-select');
const inputElements = document.querySelectorAll('.js-input');

for (let i = 0; i < users.length; i++) {
  const newOption = document.createElement('option');
  const newContent = document.createTextNode(users[i].name);
  newOption.value = users[i].name.toLowerCase();
  newOption.appendChild(newContent);
  selectElement.appendChild(newOption);
}

function handleChangeSelect(event) {
  for (const inputElement of inputElements) {
    if (event.currentTarget.value) {
      for (const user of users) {
        if (event.currentTarget.value === user.name.toLocaleLowerCase()) {
          inputElement.value = user[inputElement.id];
        }
      }
    } else {
      inputElement.value = '';
    }
  }
}

selectElement.addEventListener('change', handleChangeSelect);