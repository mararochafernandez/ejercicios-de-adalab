'use strict';

/* EJERCICIO 1
Numero aleatorio
Vamos a jugar un poco con el código del ejemplo anterior. Mirando la documentación de 'rand.fun', vamos a pedir un número entero (integer).
Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría así https://api.rand.fun/text/password?length=20 */

function getInteger() {
  fetch('https://api.rand.fun/number/integer?min=10&max=99')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}

function getString() {
  fetch('https://api.rand.fun/text/string?length=2')
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}

document.querySelector('.js-button1').addEventListener('click', getInteger);
document.querySelector('.js-button2').addEventListener('click', getString);