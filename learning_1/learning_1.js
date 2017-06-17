function draw(id){
  var canvas = document.getElementById(id);
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  };
};

$(document).ready(function(){
  draw('canvas');
});

$('.jumbotron').css("background-color", "powderblue");

$(document).ready().click(function(event){
  $(event.target).closest('td').append("<canvas id='canvas2' width='100' height='100'> </canvas>");
  draw('canvas2');
  event.preventDefault;
});

function radgrad(){
  var radgra = document.getElementById('canvas3');
  if (radgra.getContext){
    var ctx = radgra.getContext('2d');
    var grad = ctx.createRadialGradient(41,12,0.05,50,50,40);
    grad.addColorStop(0,'#FFF');
    grad.addColorStop(0.7,'#c10000');
    grad.addColorStop(0.98, '#c10000');
    grad.addColorStop(1, 'rgba(159, 1, 45, 0)');

    ctx.fillStyle=grad;
    ctx.fillRect(0,0,100,100);
  }
};

$(document).ready(function(){
  radgrad();
});
