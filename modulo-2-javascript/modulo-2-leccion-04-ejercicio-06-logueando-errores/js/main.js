'use strict';


/* EJERCICIO 6
Logueando errores
Nos hemos dado cuenta de que cuando llamamos a getEl a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error.
Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:
- Al recoger el elemento de HTML vamos a guardarlo en una constante.
- Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}
- Finalmente tras nuestro condicional retornaremos la constante con el elemento.
Nota: podemos imprimir/loguear errores con console.error().*/

function getEl(selector) {
    const element = document.querySelector(selector);
    if (element === null) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }
    return element;
}

const textEl = getEl('.text');
if (textEl) {
    console.log(textEl.innerHTML);
}