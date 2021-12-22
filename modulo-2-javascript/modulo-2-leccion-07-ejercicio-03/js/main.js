'use strict';

/* EJERCICIO 3
Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.
NOTA: Este tipo de variables como acc que se va actualizando y al final tiene el resultado de varias operaciones se llama acumulador. Puede ser de tipo numérico pero también de tipo cadena si vamos acumulando una cadena cada vez más larga. */

let acc = 0;

for (let i = 0; i < 10; i++) {
  acc = acc + 2;
  console.log(`(${i}) ${acc}`);
}

console.log(`El resultado es: ${acc}`);