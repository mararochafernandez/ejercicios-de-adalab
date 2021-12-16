'use strict';

/* EJERCICIO 3
Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:
- nombre
- número de repositorios
- avatar (imagen) */

function getGitHubUserInfo() {
  const inputElement = document.querySelector('.js-input');
  if (inputElement.value) {
    fetch(`https://api.github.com/users/${inputElement.value}`)
      .then(response => response.json())
      .then(data => {
        const nameElement = document.querySelector('.js-name');
        const reposElement = document.querySelector('.js-repos');
        const imageElement = document.querySelector('.js-image');
        if (data.name && data.public_repos && data.avatar_url) {
          nameElement.innerHTML = `Nombre: ${data.name}`;
          reposElement.innerHTML = `Repositorios públicos: ${data.public_repos}`;
          imageElement.src = data.avatar_url;
          imageElement.alt = `GitHub user: ${data.name}`;
        }
      });
  }
}

const buttonElement = document.querySelector('.js-button');
buttonElement.addEventListener('click', getGitHubUserInfo);