'use strict';

/* EJERCICIO 7 BONUS
¡Esto es un abeto!
Intenta cambiar el código para que aparezca el árbol completo.
    ★
    ▲
   ▲▲▲
  ▲▲▲▲▲
 ▲▲▲▲▲▲▲
▲▲▲▲▲▲▲▲▲
    | */

const char = '▲';
const star = '★';
const stem = '|';
const space = '    ';

function createTree(height) {
  console.log(space + star);

  let tree = '';
  for (let i = 0; i < height; i++) {
    tree += char;
  }

  for (let i = 0; i < height; i++) {
    console.log(space.slice(i, height) + tree.slice(0, i) + char + tree.slice(0, i));
  }

  console.log(space + stem);
}

createTree(5);