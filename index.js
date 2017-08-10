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
var vxBall = 10;
var vyBall = 10;
var radiusBall = 9;

function drawStick() {
  if (canvas.getContext) { // si puedo acceder al elemento  comprueba si el método existe.
    // tb comprueba si el navegador soporta canvas

    ctx.fillStyle = '#e8efe8'; // con esto se elige el color y con eso ya se puede pintar, es como elegir primro el pincel
    ctx.fillRect(xInitialPosition1, yPositionStick, stick.width, stick.height);  // pinta en las cordenadas x y ancho y alto
    // ctx.clearRect(45, 45, 60, 60); // borra
    // ctx.strokeRect(50, 50, 50, 50); // pinta solo el borde
    ctx.fillRect( xInitialPosition2, yPositionStick, stick.width, stick.height);
  }
}

function drawBall(){
  ctx.fillStyle = '#434743';
  ctx.beginPath();
  ctx.arc(xBall, yBall, radiusBall, 0, 2*Math.PI);
  ctx.fill();
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStick();
  drawBall();
}

draw();

function updateBall(){
  if (xBall > canvas.width - radiusBall|| xBall - radiusBall < 0){
    vxBall = - vxBall
  }

  if (yBall > canvas.height - radiusBall|| yBall - radiusBall < 0){
    vyBall = - vyBall
  }

  xBall = xBall + vxBall;
  yBall = yBall + vyBall;
}

function updateStick (){
   this.player1 = new stick (5, 0);
   this.player1.y = this.height/2 - this.player1.height/2;
   this.player2 = new Paddle(this.width - 5 - 2, 0);
    this.player2.y = this.height/2 - this.player2.height/2;

}

updateStick.prototype.update = function()
{
    if (this.paused)
        return;

    // To which Y direction the paddle is moving
    if (this.keys.isPressed(83)) { // DOWN
        this.player1.y = Math.min(this.height - this.player1.height, this.player1.y + 4);
    } else if (this.keys.isPressed(87)) { // UP
        this.player1.y = Math.max(0, this.player1.y - 4);
    }

    if (this.keys.isPressed(40)) { // DOWN
        this.player2.y = Math.min(this.height - this.player2.height, this.player2.y + 4);
    } else if (this.keys.isPressed(38)) { // UP
        this.player2.y = Math.max(0, this.player2.y - 4);
    }
};



setInterval(function (){
  updateBall();
  draw();
}, 40);
