'use strict';

/* EJERCICIO 1
Inflar las notas
¡Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío! */

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map(mark => mark + 1);

console.log(inflatedMarks);


/*
// Otra forma de escribirlo:
const getInflatedMarks = mark => mark + 1;
const inflatedMarks = marks.map(getInflatedMarks);
*/


/*
// Otra forma de escribirlo:
function getInflatedMarks(mark) {
  return mark + 1;
}
const inflatedMarks = marks.map(getInflatedMarks);
*/