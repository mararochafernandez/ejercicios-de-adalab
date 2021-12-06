'use strict';

/* EJERCICIO 4
Scroll es de colores
Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
- Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
- Preparar classes para cambiar el color de fondo del div.
- Escuchar el evento scroll sobre la ventana window.
- Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
Nota: window.scrollY nos devuelve la posición del scroll vertical. */

// obtener scroll vertical
const windowScroll = window.scrollY;

// obtener elemento html con clase .body
const bodyElement = document.querySelector('.body');

// cambiar color de fondo de bodyElement según la posición del scroll vertical
function changeBackgroundColor() {
    if (windowScroll > 0 && windowScroll < 250) {
        bodyElement.classList.add('background--1');
    } else if (windowScroll >= 250 && windowScroll < 500) {
        bodyElement.classList.add('background--2');
    } else if (windowScroll >= 500 && windowScroll < 750) {
        bodyElement.classList.add('background--3');
    } else if (windowScroll >= 750 && windowScroll < 1000) {
        bodyElement.classList.add('background--4');
    }
}

// escuchar y gestionar evento scroll
window.addEventListener('scroll', changeBackgroundColor);