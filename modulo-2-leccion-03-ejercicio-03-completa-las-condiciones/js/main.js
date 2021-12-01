'use strict';

const number = 5;
const text = document.querySelector('.text');

if (number === 0) {
    text.innerHTML = 'El número es 0';
} else if (number < 0) {
    text.innerHTML = 'El número es negativo';
} else if (number + 2 > 13 && number + 2 <= 20) {
    text.innerHTML = 'El número más 2 es mayor que 13 pero menor o igual que 20';
} else if (number > 20 && number < 50) {
    text.innerHTML = 'El número es mayor que 20 pero menor que 50';
} else if (number === 123123125) {
    text.innerHTML = 'El número es 123123125';
} else {
    text.innerHTML = 'El número no es 123123125';
}