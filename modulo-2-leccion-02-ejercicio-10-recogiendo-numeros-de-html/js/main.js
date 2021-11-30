'use strict';

const age = document.querySelector('.age');
const hours = document.querySelector('.hours');

hours.innerHTML = `Número de horas que he vivido: ${24 * 365 * parseInt(age.innerHTML)}`;