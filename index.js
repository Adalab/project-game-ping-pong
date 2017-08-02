'use strict';

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) { // si puedo acceder al elemento  comprueba si el método existe.
    // tb comprueba si el navegador soporta canvas
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'orange'; // con esto se elige el color y con eso ya se puede pintar, es como elegir primro el pincel
    var yPositionStick = canvas.height/2 - 100/2;
    ctx.fillRect(25, yPositionStick, 20, 100);  // pinta en las cordenadas x y ancho y alto
    // ctx.clearRect(45, 45, 60, 60); // borra
    // ctx.strokeRect(50, 50, 50, 50); // pinta solo el borde
    var xPositionStick2 = canvas.width - 25 - 20;

    ctx.fillRect( xPositionStick2, yPositionStick, 20, 100);
  }
}
draw();
