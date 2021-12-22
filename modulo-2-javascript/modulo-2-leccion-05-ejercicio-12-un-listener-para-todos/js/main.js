'use strict';

/* EJERCICIO 12 BONUS
Un listener para todos
Vamos a refactorizar el EJERCICIO 9 para mejorarlo. Tenemos que quitar ese mogollón de listeners en los lis, reemplazarlos por uno solo en la etiqueta madre (ul) y trabajar con event.target.
¡A por ello!
Nota: esta técnica de poner un listener en la madre y acceder a la hija sobre la que se ha hecho click se llama event delegation. */

// VOY A UTILIZAR EL EJERCICIO 10:

// inicializar películas
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// crear elementos de la lista de películas
const item1 = `<li class="item"><span class="link">${inception}</span></li>`;
const item2 = `<li class="item"><span class="link">${theButterFlyEffect}</span></li>`;
const item3 = `<li class="item"><span class="link">${eternalSunshineOfTheSM}</span></li>`;
const item4 = `<li class="item"><span class="link">${blueVelvet}</span></li>`;
const item5 = `<li class="item"><span class="link">${split}</span></li>`;

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
        listElement.innerHTML = item1 + item2 + item3 + item4 + item5;

        // escuchar y manejar eventos click de la lista
        listElement.addEventListener('click', printItem);

        // imprimir en consola el contenido de los elementos de la lista
        function printItem(event) {

            // elemento escuchado: event.currentTarget
            // elemento clickado: event.target
            const element = event.target;

            // si el elemento clickado contiene la clase .link
            if (element.classList.contains('link')) {

                // imprimir en consola el contenido del elemento clickado
                console.log(element.innerHTML);
            }
        }
    } else {

        // borrar elementos de la lista
        listElement.innerHTML = '';
    }
}