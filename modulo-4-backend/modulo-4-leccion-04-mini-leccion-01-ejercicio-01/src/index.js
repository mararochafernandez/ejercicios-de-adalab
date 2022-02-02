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

// endpoints

app.get('/users/:userId/orders/:OrderId', (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.OrderId);
  res.json({ result: 'ok' });
});
