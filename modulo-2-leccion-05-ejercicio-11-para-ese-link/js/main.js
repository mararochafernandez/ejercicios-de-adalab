'use strict';

/* EJERCICIO 11
Para ese link
¿Recuerdas el proyecto del módulo uno? Los enlaces de la cabecera de nuestra página tenían un problema, como nuestra cabecera era flotante, al navegar a una sección parte del contenido de quedaba oculto tras la cabecera.
Vamos a animarnos y a preparar un HTML muy sencillo con:
- una cabecera flotante que contenga un menu con tres enlaces
- tres secciones con bastante 'lorem ipsum' para que haya un scroll generoso
El primer paso para arreglar este comportamiento es escuchar el click en los enlaces y prevenir el comportamiento por defecto.
Hhhmm, pero entonces no pasa nada al hacer click... Correcto, ¡ejercicio terminado!
Nota: no te preocupes, veremos cómo hacer que esos enlaces acaben de funcionar en futuras lecciones. */

// obtener elemento html con la clase .link--x
const linkElement1 = document.querySelector('.link--1');
const linkElement2 = document.querySelector('.link--2');
const linkElement3 = document.querySelector('.link--3');

// escuchar evento click
linkElement1.addEventListener('click', handlerLinkClick);
linkElement2.addEventListener('click', handlerLinkClick);
linkElement3.addEventListener('click', handlerLinkClick);

// gestionar evento click
function handlerLinkClick(event) {
    event.preventDefault();
}