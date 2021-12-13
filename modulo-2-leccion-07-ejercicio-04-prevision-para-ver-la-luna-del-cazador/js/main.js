'use strict';

/* EJERCICIO 4
Previsión para ver la Luna del cazador
Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.
NOTA: Vamos a realizar este ejercicio de forma que, antes de programar nada, escribamos el un papel el listado de las acciones (algoritmo) que tenemos que realizar para conseguir el resultado que buscamos. Una vez escrito este listado, ya nos pondremos a programarlo en JS. */

const lunasDelCazador = [2017];

for (let i = 1; i <= 15; i++) {
  lunasDelCazador[i] = lunasDelCazador[i - 1] + 3;
  console.log(`(${i}) ${lunasDelCazador[i]}`);
}