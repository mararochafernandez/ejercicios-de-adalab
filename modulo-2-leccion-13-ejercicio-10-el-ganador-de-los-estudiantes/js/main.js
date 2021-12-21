'use strict';

/* EJERCICIO 7
El ganador de los estudiantes
Como en el ejemplo anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son. */



/// SIN TERMINAR ///



const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const usersWithEvenPins = users.filter(user => !(user.pin % 2));

console.log(usersWithEvenPins);