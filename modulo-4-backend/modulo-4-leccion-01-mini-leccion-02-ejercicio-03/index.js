const fs = require('fs');

// read json file
fs.readFile('./input-file.json', 'utf8', (err, fileContent) => {
  if (err) {
    console.log(err);
  } else {
    const dataFromFile = JSON.parse(fileContent);
    dataFromFile.age = 38;
    console.log(dataFromFile);

    // write json file
    fs.writeFile('./output-file.json', JSON.stringify(dataFromFile), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Guardado');
      }
    });
  }
});

// node index.js
