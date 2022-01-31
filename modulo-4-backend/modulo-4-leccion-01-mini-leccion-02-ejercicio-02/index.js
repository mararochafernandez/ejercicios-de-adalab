const fs = require('fs');

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};

const handleWriteFile = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Guardado');
  }
};

fs.writeFile('./output.txt', JSON.stringify(myObject), handleWriteFile);

// node index.js
