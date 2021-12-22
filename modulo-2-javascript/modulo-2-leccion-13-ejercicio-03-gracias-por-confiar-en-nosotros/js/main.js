'use strict';

/* EJERCICIO 3
Gracias por confiar en nosotros
Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map? */

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

const premiumUsers = users.map(user => {
  let message = `Bienvenida, ${user.name}`;
  if (user.isPremium === true) {
    message += '. Gracias por confiar en nosotros.';
  }
  return message;
});

console.log(premiumUsers);


/*
// Otra forma de escribirlo:
const getPremiumUsers = user => {
  let message = `Bienvenida, ${user.name}`;
  if (user.isPremium === true) {
    message += '. Gracias por confiar en nosotros.';
  }
  return message;
};
const premiumUsers = users.map(getPremiumUsers);
*/


/*
// Otra forma de escribirlo:
function getPremiumUsers(user) {
  let message = `Bienvenida, ${user.name}`;
  if (user.isPremium === true) {
    message += '. Gracias por confiar en nosotros.';
  }
  return message;
}
const premiumUsers = users.map(getPremiumUsers);
*/