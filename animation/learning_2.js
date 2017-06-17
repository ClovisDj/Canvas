var canvas = document.getElementById('animation');
var ctx = canvas.getContext('2d');
var W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H/3;

ctx.fillStyle = '#213b66';
ctx.fillRect(0,0,W,canvas.height);

// ctx.strokeStyle = '#FFF';
// ctx.beginPath();
// ctx.lineWidth = 0.25;
// ctx.moveTo(0,0);
// ctx.lineTo(200,150);
// ctx.stroke();
//
// // ctx.lineWidth = 0.;
// ctx.moveTo(150,0);
// ctx.lineTo(50,100);
// ctx.stroke();
//
// ctx.moveTo(300,0);
// ctx.lineTo(200,200);
// ctx.stroke();
//
// ctx.moveTo(550,0);
// ctx.lineTo(700,200);
// ctx.stroke();

// var x = 1, y = 1, a=Math.PI/100;
// setInterval(function(){
//   ctx.strokeStyle = "#FFF";
//   ctx.save();
//   ctx.beginPath();
//   ctx.lineWidth = 0.25;
//   ctx.moveTo(500,0);
//   ctx.lineTo(x,150);
//   ctx.stroke();
//   x += 20;
// }, 30);


// setTimeout(draw, 500);

// window.requestAnimationFrame(draw);


// var x = 300, y = 200, dx = 1, teta = Math.PI/180;
// function animate(){
//   requestAnimationFrame(animate);
//   ctx.clearRect(0,0,W, H/3);
//   // ctx.fillStyle = '#213b66';
//
//   ctx.beginPath();
//   ctx.strokeStyle = "#FFF";
//   ctx.lineWidth = 0.25;
//   ctx.moveTo(500,0);
//   ctx.lineTo(x,y);
//   ctx.stroke();
//   x += dx;
//   if (x>700){
//     dx = -dx;
//   }
//   if (x<300) {
//     dx = -dx;
//     ctx.globalAlpha = 1;
//   }
//   if (x>500 && x < 550) {
//     ctx.globalAlpha = 0.8;
//   } else if (x > 550 && x < 600) {
//     ctx.globalAlpha = 0.7;
//   }else if (x > 600 && x < 650) {
//     ctx.globalAlpha = 0.6;
//   }else if (x > 650) {
//     ctx.globalAlpha = 0.3;
//   }
// };

// animate();
var points = [(300, 0), (500, 100), (700, 0), (900, 100)];

// for (var point in points) {


var x = 600, y = -50, dx = 1, w = x-500, z = y+200;

function motion(){

  requestAnimationFrame(motion);
  ctx.clearRect(0,0,W, H/3);
  ctx.beginPath();
  ctx.strokeStyle = "#FFF";
  ctx.lineWidth = 0.25;
  ctx.moveTo(x,y);
  ctx.lineTo(w,z);
  ctx.stroke();
  w += dx;

  if (w>x+500){
    dx = -dx;
  };
  if (w<x-500) {
    dx = -dx;
  };

  if (w > x+100 && w < x+150) {
    ctx.globalAlpha = 0.8;
  } else if (w > x+150 && w < x+200) {
    ctx.globalAlpha = 0.7;
  }else if (w > x+200 && w < x+250) {
    ctx.globalAlpha = 0.6;
  }else if (w > x+250 && w < x+300) {
    ctx.globalAlpha = 0.5;
  }else if (w > x+300 && w < x+350) {
    ctx.globalAlpha = 0.4;
  }else if (w > x+350 && w < x+400) {
    ctx.globalAlpha = 0.3;
  }else if (w > x+400 && w < x+450) {
    ctx.globalAlpha = 0.2;
  }else if (w > x+ 450) {
    ctx.globalAlpha = 0;
  };

  if (w < x-100 && w > x-150) {
    ctx.globalAlpha = 0.8;
  } else if (w < x-150 && w > x-200) {
    ctx.globalAlpha = 0.7;
  }else if (w < x-200 && w > x-250) {
    ctx.globalAlpha = 0.6;
  }else if (w < x-250 && w > x-300) {
    ctx.globalAlpha = 0.5;
  }else if (w < x-300 && w > x-350) {
    ctx.globalAlpha = 0.4;
  }else if (w < x-350 && w > x-400) {
    ctx.globalAlpha = 0.3;
  }else if (w < x-400 && w > x-450) {
    ctx.globalAlpha = 0.2;
  }else if (w < x-450) {
    ctx.globalAlpha = 0;
  };
};

motion();



// motion(500,100);
