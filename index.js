'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var stick = {
  width: 20,
  height: 100
};
var yPositionStick = canvas.height/2 - stick.height/2;
var xInitialPosition1 = 25;
var xInitialPosition2 = canvas.width - xInitialPosition1 - stick.width;

var xBall = canvas.width/2;
var yBall = canvas.height/2;

function drawStick() {
  if (canvas.getContext) { // si puedo acceder al elemento  comprueba si el método existe.
    // tb comprueba si el navegador soporta canvas

    ctx.fillStyle = 'orange'; // con esto se elige el color y con eso ya se puede pintar, es como elegir primro el pincel
    ctx.fillRect(xInitialPosition1, yPositionStick, stick.width, stick.height);  // pinta en las cordenadas x y ancho y alto
    // ctx.clearRect(45, 45, 60, 60); // borra
    // ctx.strokeRect(50, 50, 50, 50); // pinta solo el borde
    ctx.fillRect( xInitialPosition2, yPositionStick, stick.width, stick.height);
  }
}

function drawBall(){
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(xBall, yBall, 15, 0, 2*Math.PI);
  ctx.fill();
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStick();
  drawBall();
}

draw();

setInterval(function (){
  xBall = xBall + 10;
  draw();
}, 200);
