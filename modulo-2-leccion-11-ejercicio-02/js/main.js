'use strict';

/* EJERCICIO 2
Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género. */

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
              });
          }
        }
      }
      resultElement.innerHTML = `${html}</ol>`;
    });
}

// listen and handle event
function handleClickButton() {
  if (nameElement.value) {
    getListOfPeople(nameElement.value);
  } else {
    resultElement.innerHTML = '';
  }
}

buttonElement.addEventListener('click', handleClickButton);