const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get('/response-a', (req, res) => {
  res.json({ result: 'ok' });
});

app.get('/response-b', (req, res) => {
  res.send('<h1>Esta es una página de prueba</h1>');
});

app.get('/response-c', (req, res) => {
  const randomNumber = getRandomIntInclusive(0, 10);

  if (isEven(randomNumber)) {
    res.redirect('https://www.youtube.com/');
  } else {
    res.redirect('https://www.instagram.com/');
  }
});

app.get('/response-d', (req, res) => {
  const user = parseInt(req.query.user);

  if (user === 1 || user === 2) {
    res.status(200).json({ result: 'ok' });
  } else {
    res.status(404).json({ result: 'error: invalid query param' });
  }
});

// get random integer between two values (inclusives)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// determine if a number is even
function isEven(number) {
  return !(number % 2);
}
