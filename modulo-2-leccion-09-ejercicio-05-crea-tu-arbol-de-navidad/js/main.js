'use strict';

/* EJERCICIO 5 BONUS
Crea tu árbol de Navidad
Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:
eas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:
▲
▲▲
▲▲▲
▲▲▲▲
▲▲▲▲▲ */

const char = '▲';

function createTree(height) {
  let tree = '';
  for (let i = 0; i < height; i++) {
    tree += char;
  }

  for (let i = 0; i < height; i++) {
    console.log(tree.slice(0, i + 1));
  }
}

createTree(5);