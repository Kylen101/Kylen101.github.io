const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// function resizeCanvas() {
//   //fit canvas to window and fix issues with canvas blur on zoom
//   canvas.style.width = window.innerWidth + "px";
//   canvas.style.height = window.innerHeight + "px";
//   const scale = window.devicePixelRatio;
//   canvas.width = window.innerWidth * scale;
//   canvas.height = window.innerHeight * scale;
//   ctx.scale(scale, scale);
// }
// resizeCanvas();
// window.addEventListener("resize", resizeCanvas);

//canvas commands  https://www.w3schools.com/tags/ref_canvas.asp
//example drawings

//Add new function for each new shape type

function drawRectangle(x, y, width, height, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = strokeColor;
  ctx.strokeRect(x, y, width, height);
}

function drawCircle(x, y, radius, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
}

function drawTriangle(x1, y1, x2, y2, x3, y3, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.stroke();
}
// need to stop rotation after it is done
function drawOctagon(centerX, centerY, radius, fillColor, strokeColor) {
  ctx.rotate(22 * Math.PI / 180);
  var vertices = [];
  for (var i = 0; i < 8; i++) {
    var angle = Math.PI / 4 + i * (Math.PI / 4);
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);
    vertices.push({ x: x, y: y });
  }
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(vertices[0].x, vertices[0].y);
  for (var i = 1; i < 8; i++) {
    ctx.lineTo(vertices[i].x, vertices[i].y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.rotate(-22 * Math.PI / 180);

  ctx.strokeStyle = strokeColor;
  ctx.stroke();
 
}
function drawText(font,text,x,y,color,weight){
ctx.font = font;
ctx.fillStyle = color;
ctx.fillText(text,x,y);
}
//Animation begins
function cycle(){
 ctx.clearRect(0, 0, canvas.width, canvas.height);
//Road made with inner width and height maybe make this like the other shapes.
drawRectangle(
  window.innerWidth - 1000,
  window.innerHeight - 315,
  1000,
  300,
  "Black",
  "Black"
);

//Top height bottom height length interior color lining color
//Wheels
drawCircle(100, 230, 50, "Black", "Black");
drawCircle(400, 230, 50, "Black", "Black");
drawCircle(100, 230, 40, "Grey", "Black");
drawCircle(400, 230, 40, "Grey", "Black");
//Car rectangles
drawRectangle(310, 41, 80, 100, "Orange", "Orange");
drawRectangle(50, 120, 400, 100, "Orange", "Orange");
//Road lane dividers
drawRectangle(200, 400, 100, 50, "Yellow", "Yellow");
drawRectangle(700, 400, 100, 50, "Yellow", "Yellow");
//Windisheld
drawTriangle(390, 41, 390, 121, 450, 121, "Grey", "Black");
//Sign pole
drawRectangle(595, 179, 10, 103, "Grey", "Grey");
//Sign
drawOctagon(595, -124, 80, "Red", "Black");
//Sign text
drawText("60px Highway Gothic", "Stop", 535, 125,"White")


//     for (let x = 0; x < size; x+=30) {
//         ctx.fillStyle = `hsl(${x+y},90%,50%)`
//         ctx.fillRect(x, y, 30, 30)
//     }
// }

//___________________get mouse input___________________

// let mouse = {
//   down: false,
//   x: 0,
//   y: 0
// };
// canvas.addEventListener("mousemove", event => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });
// canvas.addEventListener("mousedown", event => {
//   mouse.down = true;
//   // console.log(mouse);
// });
// canvas.addEventListener("mouseup", event => {
//   mouse.down = false;
// });

//___________________get keyboard input___________________
// ⇦73   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar 32
// const keys = [];
// document.onkeydown = event => {
// 	keys[event.keyCode] = true;
// 	console.log(event.keyCode);
// }
// document.onkeyup = event => {
// 	keys[event.keyCode] = false;
// }

//___________________new key input method___________________
// let left = false
// let right = false
// let up = false
// let down = false

// window.addEventListener("keyup", function(event) {
//     switch (event.code) {
//         case "ArrowRight":
//             right = false
//             break;
//         case "ArrowLeft":
//             left = false
//             break;
//         case "ArrowUp":
//             up = false
//             break;
//         case "ArrowDown":
//             down = false
//             break;
//     }
// });

// window.addEventListener("keydown", function(event) {
//        switch (event.code) {
//         case "ArrowRight":
//             right = true
//             break
//         case "ArrowLeft":
//             left = true
//             break
//         case "ArrowUp":
//             up = true
//             break
//         case "ArrowDown":
//             down = true
//             break
//     }
// })

//___________________animation loop ___________________

 

  requestAnimationFrame(cycle);
}
 requestAnimationFrame(cycle);



