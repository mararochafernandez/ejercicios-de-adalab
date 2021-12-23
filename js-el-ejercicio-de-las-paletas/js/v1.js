'use strict';


/*** VERSION WITHOUT LOCAL STORAGE ***/


/* SAMPLE PALETTE:
<section class="palette">
  <p class="palette__title">Space Ship</p>
  <ul class="palette__container">
    <li class="palette__color" style="background-color:#ffcc00"></li>
    <li class="palette__color"></li>
    <li class="palette__color"></li>
    <li class="palette__color"></li>
    <li class="palette__color"></li>
  </ul>
</section> */


const API_URL = 'https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json';


// render palettes
function renderPalettes(palettes) {

  // palettes html element <main>
  const palettesElement = document.querySelector('.palettes');
  palettesElement.textContent = '';

  for (const palette of palettes) {

    // palette title <p>
    const newTitle = document.createElement('p');
    newTitle.className = 'palette__title';
    newTitle.textContent = `${palette.name} from ${palette.from}`;

    // palette container <ul>
    const newContainer = document.createElement('ul');
    newContainer.className = 'palette__container';

    for (const color of palette.colors) {

      // palette colors <li>
      const newColor = document.createElement('li');
      newColor.className = 'palette__color';
      newColor.style.backgroundColor = `#${color}`;
      newContainer.appendChild(newColor);
    }

    // palette <section>
    const newPalette = document.createElement('section');
    newPalette.className = 'palette';
    newPalette.appendChild(newTitle);
    newPalette.appendChild(newContainer);

    palettesElement.appendChild(newPalette);
  }
}


// listen and handle click event of palettes
function handleClickPalette(event) {
  event.currentTarget.lastChild.classList.toggle('fas');
  event.currentTarget.lastChild.classList.toggle('fa-heart');
}

function listenPalettes() {
  const paletteElements = document.querySelectorAll('.palette__container');
  for (const palette of paletteElements) {
    palette.addEventListener('click', handleClickPalette);
  }
}


// listen and handle keyup event of search input
function handleKeyupSearchInput(event) {
  const searchTerm = event.currentTarget.value.toLowerCase();
  getPalettes(API_URL, searchTerm);
}

function listenSearchInput() {
  const searchInputElement = document.querySelector('.search__input');
  searchInputElement.addEventListener('keyup', handleKeyupSearchInput);
}


// get palettes data from api
function getPalettes(url, term) {

  // fetch request
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // filter palettes
      const filteredPalettes = data.palettes.filter(palette => palette.name.toLowerCase().includes(term) || palette.from.toLowerCase().includes(term));

      // render palettes
      if (!term) {
        renderPalettes(data.palettes);
      } else {
        renderPalettes(filteredPalettes);
      }

      // listen and handle palettes
      listenPalettes();
    });
}


// listen and handle search input
listenSearchInput();


// get palettes data from api
getPalettes(API_URL);