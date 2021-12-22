'use strict';

/* EJERCICIO 7
Encuentra el usuario
a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.
b) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice. */

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];


// a) find:

const userInfo = users.find((user) => user.pin === 5232);
console.log(userInfo);


// b) findIndex y splice:

const userIndex = users.findIndex((user) => user.pin === 5232);
console.log(userIndex);

users.splice(userIndex, 1);
console.log(users);