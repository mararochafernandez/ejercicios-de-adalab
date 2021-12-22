'use strict';

/* EJERCICIO 2
Saludar es de buena educación
Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano? */

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const welcomeNames = names.map(name => `Bienvenida, ${name}`);

console.log(welcomeNames);


/*
// Otra forma de escribirlo:
const getWelcomeNames = name => `Bienvenida, ${name}`;
const welcomeNames = names.map(getWelcomeNames);
*/


/*
// Otra forma de escribirlo:
function getWelcomeNames(name) {
  return `Bienvenida, ${name}`;
}
const welcomeNames = names.map(getWelcomeNames);
*/