'use strict';


/*** VERSION WITH LOCAL STORAGE ***/


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


let fav = {};


// listen and handle click event of palettes
function handleClickPalette(event) {

  // paint fav icon
  event.currentTarget.lastChild.classList.toggle('fas');
  event.currentTarget.lastChild.classList.toggle('fa-heart');

  // save fav in local storage
  if (event.currentTarget.lastChild.classList.contains('fa-heart')) {
    fav[event.currentTarget.id] = true;
  } else {
    fav[event.currentTarget.id] = false;
  }
  localStorage.setItem('fav', JSON.stringify(fav));
}


function listenPalettes() {
  const paletteElements = document.querySelectorAll('.palette__container');
  for (const palette of paletteElements) {
    palette.addEventListener('click', handleClickPalette);
  }
}


// render palettes
function renderPalettes(palettes) {

  // query fav in local storage
  fav = JSON.parse(localStorage.getItem('fav'));

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
    newContainer.id = palette.id;

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

    // paint fav icon
    if (fav) {
      if (fav[palette.id]) {
        newPalette.lastChild.lastChild.className = 'palette__color fas fa-heart';
      }
    } else {
      fav = {};
    }

    palettesElement.appendChild(newPalette);
  }
}


// listen and handle keyup event of search input
function handleKeyupSearchInput(event) {
  const term = event.currentTarget.value.toLowerCase();

  // filter palettes
  const filteredPalettes = palettes.filter(palette => palette.name.toLowerCase().includes(term) || palette.from.toLowerCase().includes(term));

  // render filtered palettes
  renderPalettes(filteredPalettes);

  // listen and handle palettes
  listenPalettes();
}

function listenSearchInput() {
  const searchInputElement = document.querySelector('.search__input');
  searchInputElement.addEventListener('keyup', handleKeyupSearchInput);
}


// get palettes data from api
function getPalettes(url) {

  // fetch request
  fetch(url)
    .then(response => response.json())
    .then(data => {
      palettes = data.palettes;

      // save data in local storage
      localStorage.setItem('palettes', JSON.stringify(palettes));

      // render palettes
      renderPalettes(palettes);

      // listen and handle palettes
      listenPalettes();
    });
}


// query data in local storage
let palettes = JSON.parse(localStorage.getItem('palettes'));

if (!palettes) {
  // get data from api
  getPalettes(API_URL);
} else {
  // render palettes
  renderPalettes(palettes);

  // listen and handle palettes
  listenPalettes();
}

// listen and handle search input
listenSearchInput();