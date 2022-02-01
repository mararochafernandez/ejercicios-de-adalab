// Fichero src/index.js

const express = require('express');
const cors = require('cors');

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
