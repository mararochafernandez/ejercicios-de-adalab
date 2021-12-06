'use strict';

/* EJERCICIO 4
Scroll es de colores
Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
- Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
- Preparar classes para cambiar el color de fondo del div.
- Escuchar el evento scroll sobre la ventana window.
- Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
Nota: window.scrollY nos devuelve la posición del scroll vertical. */


// cambiar color de fondo de bodyElement según la posición del scroll vertical
function changeBackgroundColor() {

    // obtener scroll vertical
    const windowScroll = window.scrollY;

    // obtener elemento html con clase .body
    const bodyElement = document.querySelector('.body');

    // borrar clase .background--x si bodyElement la contiene
    if (bodyElement.classList.contains('background--1')) {
        bodyElement.classList.remove('background--1');
    }
    if (bodyElement.classList.contains('background--2')) {
        bodyElement.classList.remove('background--2');
    }
    if (bodyElement.classList.contains('background--3')) {
        bodyElement.classList.remove('background--3');
    }
    if (bodyElement.classList.contains('background--4')) {
        bodyElement.classList.remove('background--4');
    }
    if (bodyElement.classList.contains('background--5')) {
        bodyElement.classList.remove('background--5');
    }

    // añadir clase .background--x según la posición del scroll vertical
    if (windowScroll >= 0 && windowScroll < 250) {
        bodyElement.classList.add('background--1');
    } else if (windowScroll >= 250 && windowScroll < 500) {
        bodyElement.classList.add('background--2');
    } else if (windowScroll >= 500 && windowScroll < 750) {
        bodyElement.classList.add('background--3');
    } else if (windowScroll >= 750 && windowScroll < 1000) {
        bodyElement.classList.add('background--4');
    } else if (windowScroll >= 1000) {
        bodyElement.classList.add('background--5');
    }
}

// escuchar y gestionar evento scroll
window.addEventListener('scroll', changeBackgroundColor);