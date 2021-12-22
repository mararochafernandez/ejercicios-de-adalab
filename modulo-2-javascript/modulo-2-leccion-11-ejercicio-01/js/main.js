'use strict';

/* EJERCICIO 1
Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
1. la URL base del API
2. si necesita autenticación
3. método HTTP que deben usar las peticiones a este API
4. URL para acceder a la info del personaje "Luke Skywalker"
5. URL para acceder a la info de la película "A New Hope"
6. a qué otros recursos puedo acceder desde el API además de personajes y pelis
7. URL para acceder al listado de personajes, ¿está paginada?
8. cómo puedo buscar personajes mediante la URL
9. cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee */

// 1. URL base: 
const url = 'https://swapi.py4e.com/api/';

// 2. No necesita autenticación

// 3. Método HTTP: GET

// 4. Info del personaje Luke Skywalker: 
const urlLukeSkywalker = 'https://swapi.py4e.com/api/people/1/';

// 5. Info de la película A New Hope:
const urlANewHope = 'https://swapi.py4e.com/api/films/1/';

// 6. Otros recursos: planets, species, starships, vehicles

// 7. Listado de personajes (sí, está paginado):
const urlPeople = 'https://swapi.py4e.com/api/people/?page=1';

// 8. Buscar personajes por nombre o parte del nombre (en minúsculas):
const urlSearchByName = 'https://swapi.py4e.com/api/people/?search=luke';

// Traducir a Wookiee: ?format=wookiee