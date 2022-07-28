'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const btn = document.querySelector('.reveal');
//Estamos creando un intervalo que dispara la funcion blurring cada 30 milisegundos

btn.addEventListener('click', function () {
  loadText.style.opacity = '1';
  btn.style.opacity = '0';
  let load = 0;
  let int = setInterval(blurring, 40);
  //la funcion blurring le suma uno a load hasta que llegue a > 99
  //al llegar a 100 va a limpiar el contador y de tiene la funcion blurring
  function blurring() {
    load++;

    if (load > 99) {
      clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    //load es el monto total del tiempo en el que queremos que pase
    // va de 0 a 100
    //Queremos la opaidad de 1, 0
    bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
  }

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  if (!blurring) return;
});
