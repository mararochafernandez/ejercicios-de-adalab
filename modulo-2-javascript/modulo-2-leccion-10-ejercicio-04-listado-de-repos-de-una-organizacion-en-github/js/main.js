'use strict';

/* EJERCICIO 4
Listado de repos de una organización en Github
Vamos a seguir explorando el API de GitHub explorando la parte del API para acceder a la info sobre organizaciones. La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este: (imagen).
Para ello vamos a hacer lo siguiente:
Preparar un input con un botón para que la usuaria introduzca la organización.
Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio). */

function getGitHubUserInfo() {
  const inputElement = document.querySelector('.js-input');
  if (inputElement.value) {
    fetch(`https://api.github.com/orgs/${inputElement.value}`)
      .then(response => response.json())
      .then(data => {
        const repos_url = data.repos_url;
        return fetch(`https://api.github.com/orgs/${inputElement.value}/repos`);
      })
      .then(reposResponse => reposResponse.json())
      .then(reposData => {
        const listlement = document.querySelector('.js-list');
        let html = '';
        for (const repoData of reposData) {
          html += `<li>${repoData.name}</li>`;
        }
        listlement.innerHTML = html;
      });
  }
}

const buttonElement = document.querySelector('.js-button');
buttonElement.addEventListener('click', getGitHubUserInfo);