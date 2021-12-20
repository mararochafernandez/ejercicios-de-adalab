'use strict';

/* EJERCICIO 2
Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género. */


// variables
const baseURL = 'https://swapi.py4e.com/api/';
let nextURL = null;
let counter = 1;


// get html elements
const searchButtonElement = document.querySelector('.js-search');
const nameInputElement = document.querySelector('.js-name');
const totalElement = document.querySelector('.js-total');
const resultsElement = document.querySelector('.js-results');
const paginationElement = document.querySelector('.js-pagination');


// reset elements and counter
function reset() {
  totalElement.innerHTML = '';
  resultsElement.innerHTML = '';
  paginationElement.innerHTML = '';
  counter = 1;
}


// get list of people searching by name
function getListOfPeople(url) {
  let html = '';

  // fetch request
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // total
      if (!data.previous) {
        totalElement.innerHTML = `<p>Número de resultados: ${data.count}</p>`;
      }

      // results
      html += `<ol start="${counter}">`;
      for (const result of data.results) {
        counter++;
        html += `<li>${result.name} - ${result.gender}</li>`;
      }
      html += '</ol>';
      resultsElement.innerHTML += html;

      // pagination
      if (data.next) {
        nextURL = data.next;
        paginationElement.innerHTML = '<input class="js-load" type="submit" value="Cargar más" />';
        const loadButtonElement = document.querySelector('.js-load');
        loadButtonElement.addEventListener('click', handleClickLoadButton);
      } else {
        nextURL = null;
        paginationElement.innerHTML = '';
      }
    });
}


// listen and handle events

function handleClickLoadButton() {
  if (nextURL) {
    getListOfPeople(nextURL);
  }
}

function handleClickSearchButton() {
  reset();
  if (nameInputElement.value) {
    getListOfPeople(`${baseURL}/people/?search=${nameInputElement.value}`);
  }
}

searchButtonElement.addEventListener('click', handleClickSearchButton);