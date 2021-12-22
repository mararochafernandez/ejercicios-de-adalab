'use strict';

let ingredient = 'Espinacas';

switch (ingredient) {
    case 'Pollo':
        console.log('Ingrediente: ' + ingredient);
        console.log('Receta sugerida: Filete con patatas');
        break;
    case 'Merluza':
        console.log('Ingrediente: ' + ingredient);
        console.log('Receta sugerida: Merluzita en salsa verde');
        break;
    case 'Espinacas':
        console.log('Ingrediente: ' + ingredient);
        console.log('Receta sugerida: Espinacas rehogadas');
        break;
    default:
        console.log('Nada en la nevera');
}