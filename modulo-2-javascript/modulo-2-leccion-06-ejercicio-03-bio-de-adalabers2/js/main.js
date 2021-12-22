'use strict';

/* EJERCICIO 3
Bio de Adalabers 2
Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1?
Nota: para que el ejercicio funcione bien debéis usar funciones normales, no arrow funtions. En siguientes sesiones veremos por qué cambia el this al usar arrow funtions. */

const adalaber1 = {
    name: 'Susana',
    age: 34,
    career: 'Periodista',
    run: () => 'Estoy corriendo',
    runAMarathon: distance => `Estoy corriendo una maratón de ${distance} kilómetros`,
    showBio: function() {
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.career}.`);
    }
};

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    career: 'actriz'
};

adalaber2.showBio = function() {
    console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.career}.`);
}

adalaber1.showBio();
adalaber2.showBio();