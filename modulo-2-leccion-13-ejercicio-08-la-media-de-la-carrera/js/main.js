'use strict';

/* EJERCICIO 8
La media de la carrera
Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce? */

const times = [56, 9, 45, 28, 35];

//let result = times.reduce((acc, number) => acc + number, 0);
let result = times.reduce((acc, number) => acc + number);

//result = result / times.length;
result /= times.length;

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