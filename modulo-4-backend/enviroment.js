// enviroment

console.log('Entorno:', process.env);

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://misuperweb.com'
    : 'http://localhost:3000';

const getDataFromApi = () => {
  fetch(`${serverUrl}/ruta-de-mi-endpoint`)
    .then((response) => response.json())
    .then((response) => response);
};

// heroku

const serverPort = process.env.PORT || 3000;
