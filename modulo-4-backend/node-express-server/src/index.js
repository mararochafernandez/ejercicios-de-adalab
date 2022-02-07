// src/index.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  // comment next line to hide data base logs in console
  verbose: console.log,
});

// endpoints

app.get('/test', (req, res) => {
  const query = db.prepare('SELECT * FROM users');
  const users = query.all();
  const user = query.get();

  const response = { result: 'ok' };
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
