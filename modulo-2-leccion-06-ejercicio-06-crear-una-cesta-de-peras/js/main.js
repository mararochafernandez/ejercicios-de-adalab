'use strict';

/* EJERCICIO 6
Crear una cesta de peras
Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:
- Número máximo de peras
- Número mínimo de peras
- Número actual de peras
- Número inicial de peras
Y varios métodos que hagan:
- Añadir al cesto una pera
- Sacar del cesto una pera
- Restablecer el número de peras al valor inicial.
Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente. */

const pearsBasket = {
  maxNum: 12,
  minNum: 1,
  currentNum: 8,
  initialNum: 3,
  addPear: function() {
    this.currentNum++;
  },
  removePear: function() {
    this.currentNum--;
  },
  resetPears: function() {
    this.currentNum = this.initialNum;
  }
}

console.log(`Número máximo de peras: ${pearsBasket.maxNum}`);
console.log(`Número mínimo de peras: ${pearsBasket.minNum}`);
console.log(`Número actual de peras: ${pearsBasket.currentNum}`);
console.log(`Número inicial de peras: ${pearsBasket.initialNum}`);

pearsBasket.addPear();
console.log(`Añadir al cesto una pera: ${pearsBasket.currentNum}`);

pearsBasket.removePear();
console.log(`Sacar del cesto una pera: ${pearsBasket.currentNum}`);

pearsBasket.resetPears();
console.log(`Restablecer el número de peras al valor inicial: ${pearsBasket.currentNum}`);