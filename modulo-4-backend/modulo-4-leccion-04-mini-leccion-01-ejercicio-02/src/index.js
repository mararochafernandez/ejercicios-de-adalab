const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// import data
const data = require('./data/rick-and-morty.json');
const users = data.results;

// endpoints

app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const foundUser = users.find((user) => user.id === userId);

  const response = {
    id: foundUser.id,
    name: foundUser.name,
    status: foundUser.status,
  };
  res.json(response);
});

app.get('/users/:userId/episodes', (req, res) => {
  const userId = parseInt(req.params.userId);
  const foundUser = users.find((user) => user.id === userId);

  const response = foundUser.episode;
  res.json(response);
});

// config express static server
const staticServerPath = './public';
app.use(express.static(staticServerPath));

// not found error
app.get('*', (req, res) => {
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
