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

// Lista de libros ordenados de menor a mayor por precio o nombre
// http://localhost:3000/books?order_by=price
// http://localhost:3000/books?order_by=title
// http://localhost:3000/books

app.get('/books', (req, res) => {
  const orderBy = req.query.order_by;
  let result = [];

  if (orderBy && orderBy === 'price') {
    const query = db.prepare('SELECT * FROM books ORDER BY price');
    result = query.all();
  } else if (orderBy && orderBy === 'title') {
    const query = db.prepare('SELECT * FROM books ORDER BY title');
    result = query.all();
  } else {
    const query = db.prepare('SELECT * FROM books');
    result = query.all();
  }

  res.json(result);
});

// Actualizar título de un libro
// http://localhost:3000/books/1

app.patch('/books/:id', (req, res) => {
  const id = req.params.id;
  const title = req.body.title;

  if (title) {
    const query = db.prepare('UPDATE books SET title = ? WHERE id = ?');
    const result = query.run(title, id);

    res.json(result);
  } else {
    res
      .status(404)
      .json({ result: 'Error: hay que introducir el título del libro' });
  }
});

// Actualizar stock de todos los libros en papel
// http://localhost:3000/stock

app.patch('/stock', (req, res) => {
  const stock = req.body.stock;

  if (stock) {
    const query = db.prepare('UPDATE books SET stock = ? WHERE ebook = 0');
    const result = query.run(stock);

    res.json(result);
  } else {
    res
      .status(404)
      .json({ result: 'Error: hay que introducir una cantidad de stock' });
  }
});

// Actualizar todos los datos de un libro
// http://localhost:3000/books/1

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const author = req.body.author;
  const summary = req.body.summary;
  const price = req.body.price;
  const stock = req.body.stock;
  const ebook = req.body.ebook;

  if (title && author && summary && price && stock && ebook) {
    const query = db.prepare(
      'UPDATE books SET title = ?, author = ?, summary = ?, price = ?, stock = ?, ebook = ? WHERE id = ?'
    );
    const result = query.run(title, author, summary, price, stock, ebook, id);

    res.json(result);
  } else {
    res
      .status(404)
      .json({ result: 'Error: hay que introducir todos los datos del libro' });
  }
});

// Añadir libro
// http://localhost:3000/book

app.post('/book/', (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const summary = req.body.summary || '';
  const price = req.body.price || 0;
  const stock = req.body.stock || 0;
  const ebook = req.body.ebook || 0;

  if (title && author) {
    const query = db.prepare(
      'INSERT INTO books (title, author, summary, price, stock, ebook) VALUES (?, ?, ?, ?, ?, ?)'
    );
    const result = query.run(title, author, summary, price, stock, ebook);

    res.json(result);
  } else {
    res.status(404).json({
      result: 'Error: hay que introducir título y autor',
    });
  }
});

// Eliminar libro
// http://localhost:3000/books/10

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;

  const query = db.prepare('DELETE FROM books WHERE id = ?');
  const result = query.run(id);

  res.json(result);
});
