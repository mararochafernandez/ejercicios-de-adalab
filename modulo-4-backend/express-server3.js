// src/index.js

const express = require('express');
const cors = require('cors');
const path = require('path');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/test', (req, res) => {
  res.json({ result: 'ok' });
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
