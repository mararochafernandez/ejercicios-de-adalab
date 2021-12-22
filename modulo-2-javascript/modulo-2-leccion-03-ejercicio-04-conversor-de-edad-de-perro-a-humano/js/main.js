'use strict';

const dogAge = 0;
let humanAge;

const dog = document.querySelector('.dog');
const human = document.querySelector('.human');

if (dogAge === 0) {
    humanAge = 'es un bebé';
} else if (dogAge === 1) {
    humanAge = 15;
} else if (dogAge === 2) {
    humanAge = 15 + 9;
} else if (dogAge > 2) {
    humanAge = 15 + 9 + (dogAge - 2) * 5;
} else if (dogAge < 0) {
    humanAge = 'no ha nacido aún';
}

dog.innerHTML = dogAge;
human.innerHTML = humanAge;