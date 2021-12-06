'use strict';

/* EJERCICIO 9
Favoritos
Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
- Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
- Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector(). */

// obtener elementos html
const yanelisTeacher = document.querySelector('.teacher--yanelis');
const dayanaTeacher = document.querySelector('.teacher--dayana');
const ivanTeacher = document.querySelector('.teacher--ivan');

// escuchar y gestionar eventos click
yanelisTeacher.addEventListener('click', changeStyle);
dayanaTeacher.addEventListener('click', changeStyle);
ivanTeacher.addEventListener('click', changeStyle);

// añadir o eliminar estilo
function changeStyle(event) {
    const currentElement = event.currentTarget;
    currentElement.classList.toggle('teacher--selected');

    const favorite = currentElement.querySelector('.favorite');
    favorite.innerHTML = changeText(favorite.innerHTML);
}

// añadir o eliminar texto
function changeText(text) {
    if (text === 'Añadir') {
        text = 'Quitar';
    } else {
        text = 'Añadir';
    }
    return text;
}