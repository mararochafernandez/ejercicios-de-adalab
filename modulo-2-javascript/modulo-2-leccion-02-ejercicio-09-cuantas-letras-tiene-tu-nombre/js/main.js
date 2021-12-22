'use strict';

const name = 'Begoña del Pozo';
const text = document.querySelector('.text');

text.innerHTML = `El nombre de mi compañera es <strong>${name}</strong>, y está compuesto por <strong>${name.length - 2}</strong> caracteres`;