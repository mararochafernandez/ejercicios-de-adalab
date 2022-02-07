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

// 1. Libros ordenados de menor a mayor precio
// http://localhost:3000/books/order-by-price

app.get('/books/order-by-price', (req, res) => {
  const query = db.prepare('SELECT * FROM books ORDER BY price');
  const books = query.all();

  const response = { result: books };
  res.json(response);
});

// 2. Libros con precio superior a 10 €
// http://localhost:3000/books/price?max=10

app.get('/books/price', (req, res) => {
  const max = req.query.max;

  const query = db.prepare('SELECT * FROM books WHERE price > ?');
  const books = query.all(max);

  const response = { result: books };
  res.json(response);
});

// 3. Libros en stock
// http://localhost:3000/books/available

app.get('/books/available', (req, res) => {
  const query = db.prepare('SELECT * FROM books WHERE stock > 0 OR ebook = 1');
  const books = query.all();

  const response = { result: books };
  res.json(response);
});

// 4. Libros físicos y en stock
// http://localhost:3000/books/available/on-paper

app.get('/books/available/on-paper', (req, res) => {
  const query = db.prepare('SELECT * FROM books WHERE stock > 0 AND ebook = 0');
  const books = query.all();

  const response = { result: books };
  res.json(response);
});

// 5. Libro con id = 1
// http://localhost:3000/book?id=1

app.get('/book', (req, res) => {
  const id = req.query.id;

  const query = db.prepare('SELECT * FROM books WHERE id = ?');
  const books = query.get(id);

  const response = { result: books };
  res.json(response);
});

// 6. Los 3 primeros libros ordenados alfabéticamente por nombre
// http://localhost:3000/books/order-by-title?limit=3&offset=3

// 7. Los 3 siguientes libros ordenados alfabéticamente por nombre
// http://localhost:3000/books/order-by-title?limit=3&offset=3

app.get('/books/order-by-title', (req, res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;

  if (limit) {
    const query = db.prepare('SELECT * FROM books ORDER BY title LIMIT ?');
    const books = query.all(limit);
    const response = { result: books };
    res.json(response);
  } else if (limit && offset) {
    const query = db.prepare(
      'SELECT * FROM books ORDER BY title LIMIT ? OFFSET ?'
    );
    const books = query.all(limit, offset);
    const response = { result: books };
    res.json(response);
  }
});
