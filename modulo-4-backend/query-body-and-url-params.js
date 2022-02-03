const users = [{ name: 'Sofía' }, { name: 'María' }];

// list users
server.get('/users', (req, res) => {
  const response = { result: users };

  res.json(response);
});

/*** BODY PARAMS ***/

// add new user
server.post('/user', (req, res) => {
  console.log('Query param userName:', req.body.userName);

  // add new user to daba base
  users.push({ name: req.body.userName });

  const response = { result: `User created: ${req.body.userName}` };

  res.json(response);
});

// list users
server.post('/users', (req, res) => {
  const filterByName = req.body.filterByName;

  // filter users by name
  const filteredUsers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(filterByName.toLocaleLowerCase())
  );

  const response = { result: filteredUsers };

  res.json(response);
});

/*** QUERY PARAMS ***/

// add new user
server.post('/user', (req, res) => {
  console.log('Query param userName:', req.query.userName);

  // add new user to daba base
  users.push({ name: req.query.userName });

  const response = { result: `User created: ${req.query.userName}` };

  res.json(response);
});

// list users
server.get('/users', (req, res) => {
  const filterByName = req.query.filterByName;

  // filter users by name
  const filteredUsers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(filterByName.toLocaleLowerCase())
  );

  const response = { result: filteredUsers };

  res.json(response);
});

/*** URL PARAMS ***/

const users = [
  { id: 1, name: 'Sofía' },
  { id: 2, name: 'María' },
];

// get user from users
app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

  // find user by id
  const foundUser = users.find((user) => user.id === userId);

  const response = { id: foundUser.id, name: foundUser.name };

  res.json(response);
});
