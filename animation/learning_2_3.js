window.requestAnimFrame = (function() {
  return window.requestAnimationFrame     ||
    window.webkitRequestAnimationFrame    ||
    window.mozRequestAnimationFrame       ||
    window.oRequestAnimationFrame         ||
    window.msRequestAnimationFrame        ||
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();


var canvas = document.getElementById('animation');
var ctx = canvas.getContext('2d');
var W = window.innerWidth, H = window.innerHeight, teta = 60, linesListRight = [], linesListLeft = [];
var v = 0.5, mp = [-1,1], linesNum = 20, plusMinus = mp[Math.floor(Math.random()*mp.length)];
canvas.width = W;
canvas.height = H/3;

function paintOnCanvas(){
  // ctx.fillStyle = "#213b66";
  ctx.clearRect(0, 0, W, H/3);
}

function LinesRight(){
  this.x = (1 - Math.random())*W;
  this.y = -50*Math.random();
  this.xTo = this.x + Math.random()*200;
  this.yTo = H/3* Math.random();
  this.vxTo = v*plusMinus;
  this.vyTo = v*plusMinus;

  this.draw = function(){
    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.lineWidth = 0.25;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.xTo, this.yTo);
    ctx.stroke();
  }
}

function LinesLeft(){
  this.x = (1 - 2*Math.random())*3/2*W;
  this.y = -50*Math.random();
  this.xTo = this.x - Math.random()*200;
  this.yTo = H/3* Math.random();
  this.vxTo = v*plusMinus;;
  this.vyTo = v*plusMinus;;

  this.draw = function(){
    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.lineWidth = 0.25;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.xTo, this.yTo);
    ctx.stroke();
  }
}

for (var i = 0; i < linesNum; i++) {
  linesListRight.push(new LinesRight());
  linesListLeft.push(new LinesLeft());
}


function fillBoard(){
  paintOnCanvas();

  for (var i = 0; i < linesListRight.length; i++) {
    lineR = linesListRight[i];
    lineL = linesListLeft[i];
    lineR.draw();
    lineL.draw();
  }

  update();

}

function update(){

  for (var i = 0; i < linesListRight.length; i++) {
    lineR = linesListRight[i];
    lineL = linesListLeft[i];

    lineR.xTo += lineR.vxTo;
    lineR.yTo += lineR.vyTo;

    lineL.xTo += lineL.vxTo;
    lineL.yTo += lineL.vyTo;


  if (lineR.yTo > H/3 - 50 || lineR.yTo < lineR.y + 10) {
    lineR.vyTo = -lineR.vyTo;
  }

  if (lineR.xTo > lineR.x + 100 || lineR.xTo < lineR.x - 100) {
    lineR.vxTo = -lineR.vxTo;
  }

  if (lineL.yTo > H/3 - 50 || lineL.yTo < lineL.y + 10) {
    lineL.vyTo = -lineL.vyTo;
  }

  if (lineL.xTo > lineL.x + 100 || lineL.xTo < lineL.x - 100) {
    lineL.vxTo = -lineL.vxTo;
  }
}
}

function animloop() {
  requestAnimFrame(animloop);
  fillBoard();
  update();
}
animloop();
