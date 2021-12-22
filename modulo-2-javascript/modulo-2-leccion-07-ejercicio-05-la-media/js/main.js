'use strict';

/* EJERCICIO 5
La media
a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.
c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador. */

const numbersA = [2, 3, 5, 7, 11];
let acc = 0;
let result = 0;

for (let i = 0; i < 5; i++) {
  acc = acc + numbersA[i];
  console.log(`(${i}) número: ${numbersA[i]} - acumulador: ${acc}`);
}

result = acc / 5;
console.log(`La media es: ${result}`);

/***/

const numbersB = [2, 3, 5, 7, 11];
numbersB[5] = 13;
acc = 0;
result = 0;

for (let i = 0; i < 6; i++) {
  acc = acc + numbersB[i];
  console.log(`(${i}) número: ${numbersB[i]} - acumulador: ${acc}`);
}

result = acc / 5;
console.log(`La media es: ${result}`);

/***/

const numbersC = [2, 3, 5, 7, 11, 13, 17];

function calcAverage(array) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc = acc + array[i];
    console.log(`(${i}) número: ${array[i]} - acumulador: ${acc}`);
  }
  return acc / 5;
}

console.log(`La media de A es: ${calcAverage(numbersA)}`);
console.log(`La media de B es: ${calcAverage(numbersB)}`);
console.log(`La media de C es: ${calcAverage(numbersC)}`);