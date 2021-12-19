'use strict';

/* EJERCICIO 1
Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
- la URL base del API
- si necesita autenticación
- método HTTP que deben usar las peticiones a este API
- URL para acceder a la info del personaje "Luke Skywalker"
- URL para acceder a la info de la película "A New Hope"
- a qué otros recursos puedo acceder desde el API además de personajes y pelis
- URL para acceder al listado de personajes, ¿está paginada?
- cómo puedo buscar personajes mediante la URL
- cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee */

// URL base: 
const url = 'https://swapi.py4e.com/api/';

// No necesita autenticación

// Protocolo: HTTPS (Hypertext Transfer Protocol Secure)

// Método HTTP: GET

// Info del personaje Luke Skywalker: 
const urlLukeSkywalker = 'https://swapi.py4e.com/api/people/1/';

// Info de la película A New Hope:
const urlANewHope = 'https://swapi.py4e.com/api/films/1/';

// Buscar personajes por nombre (en minúsculas):
const urlSearchByName = 'https://swapi.py4e.com/api/people/?search=luke';

// Traducir a Wookiee: ?format=wookiee