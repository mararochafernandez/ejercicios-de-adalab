'use strict';

// get element html by css class
function getElement(selector) {
  return document.querySelector(selector);
}

// get random integer between two values (inclusives)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// determine if a number is even
function isEven(number) {
  return !(number % 2);
}

// event listener and handler
const buttonElement = getElement('.form__button');
buttonElement.addEventListener('click', handleclickButton);

function handleclickButton(event) {
  event.preventDefault();
  const randomNumber = changeStatus();
  console.log(`Número aleatorio: ${randomNumber}`);
  changeBackground(randomNumber);
}

// change text of .main__title amd return random number
function changeStatus() {
  const titleElement = getElement('.main__title');
  if (getElement('.form__select').value === ':)') {
    titleElement.innerHTML = ':)';
  } else {
    titleElement.innerHTML = ':(';
  }
  return getRandomIntInclusive(1, 100);
}

// change background color of .main according to random number
function changeBackground(number) {
  const mainElement = getElement('.main');
  if (isEven(number)) {
    mainElement.classList.remove('main--fuego-chileno');
    mainElement.classList.add('main--amarillo-correcto');
  } else {
    mainElement.classList.remove('main--amarillo-correcto');
    mainElement.classList.add('main--fuego-chileno');
  }
  console.log(`Es par: ${isEven(number)}`);
}