'use strict';

/* EJERCICIO 2
Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género. */


// variables
const baseUrl = 'https://swapi.py4e.com/api/';
let nextUrl = null;
let counter = 0;


// get html elements
const searchButtonElement = document.querySelector('.js-search');
const nameInputElement = document.querySelector('.js-name');
const totalElement = document.querySelector('.js-total');
const resultsElement = document.querySelector('.js-results');
const paginationElement = document.querySelector('.js-pagination');


// reset html results and counter
function reset() {
  totalElement.innerHTML = '';
  resultsElement.innerHTML = '';
  paginationElement.innerHTML = '';
  counter = 0;
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
      html += `<ol start="${counter + 1}">`;
      for (const result of data.results) {
        counter++;
        html += `<li>${result.name} - ${result.gender}</li>`;
      }
      html += '</ol>';
      resultsElement.innerHTML += html;

      // pagination
      if (data.next) {
        nextUrl = data.next;
        paginationElement.innerHTML = '<input class="js-load" type="submit" value="Cargar más" />';
        const loadButtonElement = document.querySelector('.js-load');
        loadButtonElement.addEventListener('click', handleClickLoadButton);
      } else {
        nextUrl = null;
        paginationElement.innerHTML = '';
      }

      // save results in local storage
      const localStorageName = nameInputElement.value.toLowerCase();
      const localStorageValue = {
        counter: counter,
        next: nextUrl,
        total: totalElement.innerHTML,
        results: resultsElement.innerHTML,
        pagination: paginationElement.innerHTML
      };
      localStorage.setItem(localStorageName, JSON.stringify(localStorageValue));
    });
}


// listen and handle events

function handleClickLoadButton() {
  // pagination request
  if (nextUrl) {
    getListOfPeople(nextUrl);
  }
}

function handleClickSearchButton() {
  // reset html results and counter
  reset();

  if (nameInputElement.value) {
    const name = nameInputElement.value.toLowerCase();

    // get results in local storage
    const resultsLocalStorage = JSON.parse(localStorage.getItem(name));
    if (resultsLocalStorage) {
      counter = resultsLocalStorage.counter;
      nextUrl = resultsLocalStorage.next;
      totalElement.innerHTML = resultsLocalStorage.total;
      resultsElement.innerHTML = resultsLocalStorage.results;
      paginationElement.innerHTML = resultsLocalStorage.pagination;

      // pagination
      if (nextUrl) {
        const loadButtonElement = document.querySelector('.js-load');
        loadButtonElement.addEventListener('click', handleClickLoadButton);
      }

    } else {
      // main request
      getListOfPeople(`${baseUrl}/people/?search=${name}`);
    }
  }
}

searchButtonElement.addEventListener('click', handleClickSearchButton);