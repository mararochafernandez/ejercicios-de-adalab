'use strict';

/* EJERCICIO 1
Bio de Adalabers
Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
- Susana, 34 años, periodista
Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
'Mi nombre es Susana, tengo 34 años y soy periodista'
Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
- Rocío, 25 años, actriz */

const adalaber1 = {
    name: 'Susana',
    age: 34,
    career: 'Periodista'
};

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    career: 'actriz'
};

const containerElement = document.querySelector('.container');

const text1 = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.career}.</p>`;

const text2 = `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.career}.</p>`;

containerElement.innerHTML = text1 + text2;