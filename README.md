# game-ping-pong
Juego sencillo de pong con canvas y JavaScript

Para realizarlo hemos usado estos recursos:
- [tutorial para crear un juego de Pong](http://blog.mailson.org/2013/02/simple-pong-game-using-html5-and-canvas/)
- [documentación de MDN sobre canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Para el desarrollo hemos seguido estos pasos:
1. Crear un elemento canvas en HTML con un tamaño determinado (el resto de pasos los haremos desde JavaScript)
2. Accedemos al elemento del DOM que representa el canvas y accedemos a su contexto 2D. A partir de ahora para poder pintar en el canvas lo haremos siempre a partir de su contexto
3. Hemos explirado los métodos de canvas para pintar rectángulos como `fillRect`, `strokeRect` y para borrar `clearRect`
4. Hemos explorado cómo usar la propiedad `fillStyle` para cambiar el color de lo que vamos a pintar a continuación
5. Hemos explorado el pintado de otras formas mediante paths, en concreto para pintar un círculo. Usamos `beginPath`, `arc` y `fill`
6. Para simular movimiento de un elemento en el canvas, lo repintamos completo en otra posición y para ejecutar la función que lo hace usamos de forma continua usamos `setInterval`

Tras este primer acercamiento, para seguir con el juego tenemos que implementar:
- Gestión de colisión de la pelota con los bordes del mundo, y rebote
- Colisión de la pelota con las palas
- Movimiento de las palas con el teclado
- Sistema de puntaje del juego
