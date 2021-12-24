'use strict';

const API_URL = 'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json';

let users = [];

/* Do your magic! 🦄🦄🦄 */


// check/uncheck favorite
function checkFav(user) {
  if (users[user.id].fav) {
    users[user.id].fav = false;
    user.classList.remove('fav');
  } else {
    users[user.id].fav = true;
    user.classList.add('fav');
  }

  // save data in local storage
  localStorage.setItem('users', JSON.stringify(users));
}


// handle click event
function handleClickItem(event) {
  checkFav(event.currentTarget);
}


// render list of users
function renderList(usersData) {
  for (const userData of usersData) {

    // image element <img>
    const newImage = document.createElement('img');
    newImage.className = 'list__image';
    newImage.src = userData.picture;
    newImage.alt = userData.name;

    // name element <h2>
    const newName = document.createElement('h2');
    newName.className = 'list__name';
    newName.textContent = userData.name;

    // email element <p>
    const newEmail = document.createElement('p');
    newEmail.className = 'list__email';
    newEmail.textContent = `E-mail: ${userData.email}`;

    // phone element <p>
    const newPhone = document.createElement('p');
    newPhone.className = 'list__phone';
    newPhone.textContent = `Teléfono: ${userData.phone}`;

    // comment element <p>
    const newComment = document.createElement('p');
    newComment.className = 'list__comment';
    newComment.textContent = userData.comment;

    // container element <div>
    const newContainer = document.createElement('div');
    newContainer.className = 'list__container';

    newContainer.appendChild(newName);
    newContainer.appendChild(newEmail);
    newContainer.appendChild(newPhone);
    newContainer.appendChild(newComment);

    // item element <li>
    const newItem = document.createElement('li');
    newItem.className = userData.fav ? 'list__item fav' : 'list__item';
    newItem.id = userData.id;

    // listen click event
    newItem.addEventListener('click', handleClickItem);

    newItem.appendChild(newImage);
    newItem.appendChild(newContainer);

    document.querySelector('.js-list').appendChild(newItem);
  }
}


// get users from api
function getUsers(url) {

  // fetch request
  fetch(url)
    .then(response => response.json())
    .then(data => {
      users = data;

      for (let i = 0; i < users.length; i++) {
        // add id and fav properties
        users[i].id = i;
        users[i].fav = false;
        // fix image url
        users[i].picture = users[i].picture.replace('ejercicio-fin-de-semana-promo-j', 'ejercicios-extra/js-fetch-arrays-princesas-disney');
      }

      // save data in local storage
      localStorage.setItem('users', JSON.stringify(users));

      renderList(users);
    });
}


// query data in local storage
users = JSON.parse(localStorage.getItem('users'));

if (users) {
  renderList(users);
} else {
  getUsers(API_URL);
}