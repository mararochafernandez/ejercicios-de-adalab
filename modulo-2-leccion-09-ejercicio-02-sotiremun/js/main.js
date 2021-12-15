'use strict';

/* EJERCICIO 2
Sotiremun
Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden. */

function get100Numbers() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(i + 1);
  }
  return array;
}

function getReversed100Numbers() {
  return get100Numbers().reverse();
}

const numbers = getReversed100Numbers();

for (const number of numbers) {
  console.log(number);
}