'use strict';

/* EJERCICIO 1
Numeritos
Vamos a crear una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden. */

function get100Numbers() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    // otra forma: array[i] = i + 1; 
    array.push(i + 1);
  }
  return array;
}

const numbers = get100Numbers();

for (const number of numbers) {
  console.log(number);
}