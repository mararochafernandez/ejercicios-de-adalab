'use strict';

const userName = 'Mara';
const text = document.querySelector('.text');

if (userName === 'Mara' || userName === 'Begoña') {
    text.innerHTML = `Bienvenida, ${userName}`;
} else {
    text.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado';
}