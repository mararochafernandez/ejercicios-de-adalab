'use strict';

/* EJERCICIO 10
El ganador de la carrera
Ya hemos conseguido los nombres de los competidores y nos gustaría que usases reduce para averiguar quién ha ganado.
PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :) */



/// SIN TERMINAR ///



const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 }
];

//let result = times.reduce((acc, number) => acc + number, 0);
let result = runners.reduce((acc, runner) => {
  //if () {}
  acc + number
}, 0);

// result = result / times.length;
//result /= times.length;

console.log(result);


/*
// Otra forma de escribirlo:
const getResult = (acc, number) => acc + number;
let result = times.reduce(getResult);
*/


/*
// Otra forma de escribirlo:
function getResult(acc, number) {
  return acc + number;
}
let result = times.reduce(getResult);
*/