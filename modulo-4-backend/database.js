// select -> query.all() -> devuelve varios registros (array)
app.get('/users', (req, res) => {
  const query = db.prepare('SELECT * FROM users WHERE id >= ?');
  const users = query.all(2);
  res.json(users);
});

// select -> query.get() -> devuelve un registro (objeto)
app.get('/users', (req, res) => {
  const query = db.prepare(
    'SELECT * FROM users WHERE email = ? AND password = ?'
  );
  const user = query.get('lucia@hotmail.com', 'qwertyui');
  res.json(user);
});

// update -> query.run() -> devuelve { changes: 1, lastInsertRowid: 0 }
app.patch('/users', (req, res) => {
  const query = db.prepare(
    'UPDATE users SET email = ?, password = ? WHERE id = ?'
  );
  const result = query.run(req.body.email, req.body.password, req.body.id);
  res.json(result);
});

// insert into -> query.run() -> devuelve { changes: 1, lastInsertRowid: 6 }
app.post('/users', (req, res) => {
  const query = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
  const result = query.run(req.body.email, req.body.password);
  res.json(result);
});

// delete from -> query.run() -> devuelve { changes: 1, lastInsertRowid: 0 }
app.delete('/user', (req, res) => {
  const query = db.prepare('DELETE FROM users WHERE id = ?');
  const result = query.run(req.body.id);

  if (result.changes === 1) {
    res.json({
      result: 'User deleted',
    });
  } else {
    res.status(404).json({
      result: 'User not found',
    });
  }
});
