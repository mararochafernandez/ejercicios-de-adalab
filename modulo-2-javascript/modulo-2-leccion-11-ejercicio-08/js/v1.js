'use strict';

/* EJERCICIO 8
Sobre el ejercicio 2 vamos a cachear las búsquedas al servidor. De forma que cuando a busquemos una cadena a través del campo de búsqueda, primero busque en localStorage si ya tenemos un resultado en local para esa cadena. Si no lo hay se pide al servidor y luego se guarda en localStorage usando como clave el texto de la búsqueda; si al buscarlo en localStorage lo encontramos pues le enseñamos el resultado directamente al usuario y nos evitamos una petición al servidor. */

// variables
const url = 'https://swapi.py4e.com/api/';

// get html elements
const buttonElement = document.querySelector('.js-search');
const nameElement = document.querySelector('.js-name');
const resultElement = document.querySelector('.js-result');

// get list of people searching by name
function getListOfPeople(name) {
  let html = '';
  let results = '';
  resultElement.innerHTML = '';

  // first fetch request
  fetch(`${url}/people/?search=${name}`)
    .then(response => response.json())
    .then(data => {
      results = data.results;
      html = `<p>Número de resultados: ${data.count}</p>`;

      // check number of results
      if (data.count !== 0) {
        html += '<ol>';
        if (data.count <= 10) {

          // results of one page
          for (const result of results) {
            html += `<li>${result.name} - ${result.gender}</li>`;
          }
        } else {
          const pages = Math.ceil(data.count / 10, 1);
          for (let page = 1; page <= pages; page++) {

            // second fetch request
            fetch(`${url}/people/?search=${name}&page=${page}`)
              .then(pagesResponse => pagesResponse.json())
              .then(pagesData => {
                results = pagesData.results;

                // results of all pages
                for (const result of results) {
                  html += `<li>${result.name} - ${result.gender}</li>`;
                }
                resultElement.innerHTML = `${html}</ol>`;

                // save results in local storage
                localStorage.setItem(name, resultElement.innerHTML);
              });
          }
        }
      }
      resultElement.innerHTML = `${html}</ol>`;

      // save results in local storage
      localStorage.setItem(name, resultElement.innerHTML);
    });
}

// listen and handle event
function handleClickButton() {
  const nameValue = nameElement.value.toLowerCase();
  if (nameValue) {
    const resultsLocalStorage = localStorage.getItem(nameValue);
    if (resultsLocalStorage) {
      resultElement.innerHTML = resultsLocalStorage;
    } else {
      getListOfPeople(nameValue);
    }
  } else {
    resultElement.innerHTML = '';
  }
}

buttonElement.addEventListener('click', handleClickButton);