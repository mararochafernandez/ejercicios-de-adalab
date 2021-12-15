'use strict';

/* EJERCICIO 4
REPASO: Mi lista de tareas
Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
1. Mostrar una frase que indique cuántas tareas hay.
2. Pintar todas las tareas en pantalla.
3. Tachar las ya realizadas.
4. Permitir marcar una tarea como 'completa' o 'incompleta'.
Vamos a partir de este array de datos en nuestro fichero JavaScript:
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
la tarea debe mostrarse como completada (tachada)
debemos modificar su estado (propiedad completed) en el array tasks.
d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información. */


// variables globales
const tasks = [{
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
let completedTasks = 0;
let incompleteTasks = 0;

// obtener elementos html
const listElement = document.querySelector('.js-list');

// función pintar tarea
function renderTask(index) {
  let htmlTask = '';
  if (tasks[index].completed === true) {
    htmlTask = `<li class="completed">${tasks[index].name} <input id="item${index}" value="${index}" type="checkbox" name="item" checked /></li>`;
  } else {
    htmlTask = `<li>${tasks[index].name} <input id="item${index}" value="${index}" type="checkbox" name="item" /></li>`;
  }
  return htmlTask;
}

// función pintar todas las tareas
function renderTasks() {
  let htmlTasks = '';
  for (let i = 0; i < tasks.length; i++) {
    htmlTasks += renderTask(i);
  }
  return htmlTasks;
}

// función calcular tareas totales
function calculateTotals() {
  completedTasks = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completedTasks++;
    }
  }
  incompleteTasks = tasks.length - completedTasks;
}

// función pintar tareas totales
function renderTotals() {
  const textElement = document.querySelector('.js-text');
  textElement.innerHTML = `Total de tareas: ${tasks.length} - Completadas: ${completedTasks} - Incompletas: ${incompleteTasks}`;
}

// función manejar evento checkbox
function handleClickCheckbox(event) {
  const ckeckbox = event.currentTarget;
  ckeckbox.parentNode.classList.toggle('completed');
  tasks[ckeckbox.value].completed = ckeckbox.checked;
  calculateTotals();
  renderTotals();
}

// función escuchar eventos checkbox
function listenCheckbox() {
  for (let i = 0; i < tasks.length; i++) {
    const checkboxElement = document.querySelector(`#item${i}`);
    checkboxElement.addEventListener('click', handleClickCheckbox);
  }
}

// pintar todas las tareas
listElement.innerHTML = renderTasks();
// calcular totales
calculateTotals();
// pintar totales
renderTotals();
// escuchar eventos checkbox
listenCheckbox();