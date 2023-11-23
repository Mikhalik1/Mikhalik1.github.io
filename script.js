var canvas = document.getElementById("Mycanvas");
var im = document.getElementById("im");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var x2 = canvas.width / 2;
var y2 = canvas.height - 30;
var con = 1;
var paddleHeight = 15;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;
var count = 0;
var dx = 1;
var dy = -1;
var dx2 = 2;
var dy2 = -2;
var bib = 0;
var ballRadius = 10;
var rightPressed = false;
var leftPressed = false;
    function getRndInteger(min, max) 
    {
        return Math.random() * (max - min + 1) + min;
      }

var audio1 = new Audio('ya no me enojo contigo solo observo y pienso (LetraLyrics).mp3');

var audio2 = new Audio('Ирина Аллегрова -  с Днём Рождения.mp3');
var audio3 = new Audio('бара бара бара бере бере бере.mp3');
audio1.volume = 0.1;
audio2.volume = 0.1;
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
  }



function draw()
{
  
    ctx.clearRect(0,0,canvas.width, canvas.height);

    drawBall();
    drawpaddle();
    x += dx; 
    y += dy;
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius){
        if (x > paddleX && x < paddleX + paddleWidth){
          if(count == 10){
          audio1.pause();
          audio2.play();
          im.style.display = "block";
          dx = 0;
          dy = 0;
          }
          count++;
          dy = -dy;
        }
        else{
        alert("ты лох");
        document.location.reload();
        clearInterval(interval);
    }
}
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }
      ctx.textAlign = "center";
      ctx.font = "50px serif";
      ctx.fillText(count, x2, 40)


}
function drawpaddle(){
  
    ctx.beginPath();
    ctx.rect(paddleX ,  canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
      rightPressed = true;
      if(bib == 0){
        audio1.play();
        bib++;
      }
    } else if (e.keyCode == 37 || e.keyCode == 65) {
      leftPressed = true;
      if(bib == 0){
        audio1.play();
        bib++;
      }
    }
  }
  function keyUpHandler(e) {
    if (e.keyCode == 39 || e.keyCode == 68) {
      rightPressed = false;
    } else if (e.keyCode == 37 || e.keyCode == 65) {
      leftPressed = false;
      
    }
  }

var interval = setInterval(draw, 10);
