'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';
const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';
const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';
const list = document.querySelector('.list');

list.innerHTML = `<li>
    <p>${firstDogName}:</p>
    <img src="${firstDogImage}" alt="${firstDogName}" title="${firstDogName}" />
</li>
<li>
    <p>${secondDogName}:</p>
    <img src="${secondDogImage}" alt="${secondDogName}" title="${secondDogName}" />
</li>
<li>
    <p>${thirdDogName}:</p>
    <img src="${thirdDogImage}" alt="${thirdDogName}" title="${thirdDogName}" />
</li>`;