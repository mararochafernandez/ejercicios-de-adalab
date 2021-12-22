'use strict';

/* EJERCICIO 1
Películas
Vamos a hacer este ejercicio en parejas. ¿Listas? La primera de la pareja con el teclado va a crear un array movies con un listado de 3 películas que le gusten. Será un array de cadenas (strings).
Ahora toma el teclado la otra compañera y añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar el array completo en la consola.
El teclado vuelve a la primera de la pareja. Tienes que modificar la película que menos te guste de las que hay en el array (¿podría ser la que ha puesto tu compañera? :P) por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en la consola.
El teclado vuelve a la segunda de la pareja. Ahora es tu turno de modificar la película que menos te guste del array por otra. De nuevo, muestra el array completo en la consola para comprobar que funcionó.
Para terminar este ejercicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies. Ejecutamos la función para comprobar que se muestran los mensajes en la consola correspondientes. */

workWithMovies();

function workWithMovies() {
  const movies = ['Misterioso asesinato en Manhattan', 'Alta fidelidad', 'El gran Lebowski'];

  movies[3] = 'Noche en la Tierra';
  console.log(movies);

  movies[3] = 'Jurassic Park';
  console.log(movies);
}