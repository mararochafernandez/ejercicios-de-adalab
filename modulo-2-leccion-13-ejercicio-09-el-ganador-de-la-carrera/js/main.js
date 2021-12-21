'use strict';

/* EJERCICIO 9
El ganador de la carrera
Ya hemos conseguido los nombres de los competidores y nos gustaría que usases reduce para averiguar quién ha ganado.
PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :) */

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const result = runners.reduce((acc, runner) => acc.time < runner.time ? acc = runner : acc);

console.log(result);


// otra forma de hacerlo:

/*
const result = runners.reduce((acc, runner) => {
  if (acc.time < runner.time) {
    acc = runner;
  }
  return acc;
});
*/