'use strict';

/* EJERCICIO 6 BONUS
Mejora tu árbol de Navidad
Intenta ponerle una estrella y un tronco al árbol para que quede mucho más mono. Sería algo así:
★
▲
▲▲
▲▲▲
▲▲▲▲
▲▲▲▲▲
| */

const char = '▲';
const star = '★';
const stem = '|';

function createTree(height) {
  console.log(star);

  let tree = '';
  for (let i = 0; i < height; i++) {
    tree += char;
  }

  for (let i = 0; i < height; i++) {
    console.log(tree.slice(0, i + 1));
  }

  console.log(stem);
}

createTree(5);