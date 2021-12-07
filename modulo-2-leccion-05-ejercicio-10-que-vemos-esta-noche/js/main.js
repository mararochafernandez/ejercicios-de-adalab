'use strict';

/* EJERCICIO 10
¿Qué vemos esta noche?
Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película. */

// inicializar películas
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// obtener elemento html <button> con clase .button
const buttonElement = document.querySelector('.button');

// escuchar y manejar evento click
buttonElement.addEventListener('click', displayList);

// mostrar lista de películas
function displayList() {

    // obtener elemento html <ul> con clase .list
    const listElement = document.querySelector('.list');

    // si la lista está vacía...
    if (!listElement.innerHTML) {

        // mostrar elementos de la lista
        const item1 = `<li class="item"><span class="item--1">${inception}</span></li>`;
        const item2 = `<li class="item"><span class="item--2">${theButterFlyEffect}</span></li>`;
        const item3 = `<li class="item"><span class="item--3">${eternalSunshineOfTheSM}</span></li>`;
        const item4 = `<li class="item"><span class="item--4">${blueVelvet}</span></li>`;
        const item5 = `<li class="item"><span class="item--5">${split}</span></li>`;
        listElement.innerHTML = item1 + item2 + item3 + item4 + item5;

        // obtener elementos html <li> con clase .item--x
        const item1Element = document.querySelector('.item--1');
        const item2Element = document.querySelector('.item--2');
        const item3Element = document.querySelector('.item--3');
        const item4Element = document.querySelector('.item--4');
        const item5Element = document.querySelector('.item--5');

        // escuchar y gestionar eventos click de la lista
        item1Element.addEventListener('click', printItem);
        item2Element.addEventListener('click', printItem);
        item3Element.addEventListener('click', printItem);
        item4Element.addEventListener('click', printItem);
        item5Element.addEventListener('click', printItem);

        // imprimir en consola el contenido de los elementos de la lista
        function printItem(event) {
            console.log(event.currentTarget.innerHTML)
        }
    } else {

        // borrar elementos de la lista
        listElement.innerHTML = '';
    }
}