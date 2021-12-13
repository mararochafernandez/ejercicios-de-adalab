'use strict';

/* EJERCICIO 7
A story of adalabers
Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:
- María, 29 años, diseñadora
- Lucía, 31 años, ingeniera química
- Susana, 34 años, periodista
- Rocío, 25 años, actriz
- Inmaculada, 21 años, diseñadora
En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
1. Una función countAdalabers que devuelve el número de adalabers en el listado.
2. Una función averageAge que devuelve la media de edad de listado.
3. Una función theYoungest que devuelve el nombre de la adalaber más joven.
4. Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto. */

const adalabers = [{
    name: 'María',
    age: 29,
    career: 'Diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    career: 'Ingeniera química'
  },
  {
    name: 'Susana',
    age: 34,
    career: 'Periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    career: 'Actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    career: 'Diseñadora'
  }
];

function countAdalabers(array) {
  return array.length;
}

function averageAge(array) {
  let acc = 0;
  for (const item of array) {
    acc += item.age;
  }
  return Math.round(acc / array.length);
}

function theYoungest(array) {
  let temp = array[0].age;
  for (let i = 1; i < array.length; i++) {
    if (array[i].age < temp) {
      temp = array[i].age;
    }
  }
  return temp;
}

function countDesigners(array) {
  let acc = 0;
  for (const item of array) {
    if (item.career === 'Diseñadora') {
      acc++;
    }
  }
  return acc;
}

console.log('Número total: ' + countAdalabers(adalabers));
console.log('Media de edad: ' + averageAge(adalabers));
console.log('La más joven: ' + theYoungest(adalabers));
console.log('Número de diseñadoras: ' + countDesigners(adalabers));

adalabers[adalabers.length] = {
  name: 'Mara',
  age: 37,
  career: 'Diseñadora'
};

console.log('Número total: ' + countAdalabers(adalabers));
console.log('Media de edad: ' + averageAge(adalabers));
console.log('La más joven: ' + theYoungest(adalabers));
console.log('Número de diseñadoras: ' + countDesigners(adalabers));

adalabers[adalabers.length] = {
  name: 'Pepita',
  age: 40,
  career: 'Programadora'
};

console.log('Número total: ' + countAdalabers(adalabers));
console.log('Media de edad: ' + averageAge(adalabers));
console.log('La más joven: ' + theYoungest(adalabers));
console.log('Número de diseñadoras: ' + countDesigners(adalabers));