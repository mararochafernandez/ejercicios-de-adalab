'use strict';

// función para calcular anchos según modelo de caja
function boxModelCalculator(borderBox, width, padding, borderWidth) {
    // dos formas de calcular ancho del contenido y ancho total de la caja

    // versión 1: condicional clásico
    /*
    let contentWidth = width;
    let totalWidth = width;
    if (borderBox) {
        // modelo de caja tipo border-box
        contentWidth = width - padding * 2 - borderWidth * 2;
    } else {
        // modelo de caja tipo content-box
        totalWidth = width + padding * 2 + borderWidth * 2;
    }
    */

    // versión 2: condicional ternario
    const contentWidth = borderBox ? (width - padding * 2 - borderWidth * 2) : width;
    const totalWidth = borderBox ? width : (width + padding * 2 + borderWidth * 2);

    // devolver resultado en cadena de texto
    return `El ancho del contenido es: ${contentWidth} y el ancho total de la caja es: ${totalWidth}.`;
}

// caja a: tipo border-box, ancho 50px, padding 10px y borde 2px
const boxA = boxModelCalculator(true, 50, 10, 2);
console.log(boxA);

// caja b: tipo content-box, ancho 100px, padding 5px y borde 5px
const boxB = boxModelCalculator(false, 100, 5, 5);
console.log(boxB);

/***/

// función anterior transformada en función arrow
const boxModelCalculatorArrowFunction = (borderBox, width, padding, borderWidth) => {
    const contentWidth = borderBox ? (width - padding * 2 - borderWidth * 2) : width;
    const totalWidth = borderBox ? width : (width + padding * 2 + borderWidth * 2);
    return `El ancho del contenido es: ${contentWidth} y el ancho total de la caja es: ${totalWidth}.`;
}

// caja a: tipo border-box, ancho 50px, padding 10px y borde 2px
console.log(boxModelCalculatorArrowFunction(true, 50, 10, 2));

// caja b: tipo content-box, ancho 100px, padding 5px y borde 5px
console.log(boxModelCalculatorArrowFunction(false, 100, 5, 5));