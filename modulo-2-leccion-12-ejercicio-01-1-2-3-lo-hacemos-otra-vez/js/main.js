'use strict';

/* EJERCICIO 1
1, 2, 3, lo hacemos otra vez
Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML. */

const numbers = [1, 2, 3];

for (const number of numbers) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(number);
  newItem.appendChild(newContent);
  const list = document.querySelector('.list');
  list.appendChild(newItem);
}