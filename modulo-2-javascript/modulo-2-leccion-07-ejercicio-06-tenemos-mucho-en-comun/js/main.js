'use strict';

/* EJERCICIO 6
Tenemos mucho en común
Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra. */

function getElement(selector) {
  return document.querySelector(selector);
}

getElement('.button').addEventListener('click', event => {
  event.preventDefault();
  const obra1 = getElement('.obra1').value;
  const obra2 = getElement('.obra2').value;
  const obras = [obra1, obra2];
  for (const obra of obras) {
    if (obra !== '') {
      console.log(`¡A mí también me encantó "${obra}"! Tenemos mucho en común, humana.`);
    }
  }
});