// console.log("Test JS!")

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
// context.moveTo(0,0);
// Move the pen/hand/tool to 100,100
context.moveTo(100,100);
// Draw a line to 200,200
context.lineTo(200,200);
// WITHOUT MOVING THE PEN, draw to 300,100
context.lineTo(300,100);
context.lineTo(100,200);
context.lineTo(300,150);
context.lineTo(100,100);
context.strokeStyle = "#ff0000";
// context.stroke();

// Draw a circle!
context.beginPath()
context.fillStyle = "#FFFF00";
context.arc(200,200,50,0,2*Math.PI)
// context.fill();
// context.stroke();

var x = 200;
var y = 200;
var radius = 50;
var xDirection = 1;
var yDirection = 1;
var red = 0;
var blue = 0;
var green = 0;

function drawBall(){
	// Fill style = red
	context.fillStyle = "#"+red+blue+green;
	console.log(red)
	console.log(context.fillStyle);
	context.beginPath();
	context.arc(x,y,radius,0,2*Math.PI);
	context.clearRect(0,0,500,500);
	context.fill();
	if((x > 500-radius) || (x < radius)){
		// we have reached the right side. Reverse!
		xDirection = -xDirection;
	}
	if((y > 500-radius) || (y < radius)){
		// we have reached the right side. Reverse!
		yDirection = -yDirection;
	}
	var randomX = Math.random() * 4
	var randomY = Math.random() * 4
	x += randomX * xDirection;
	y += randomY * yDirection;
	red += 5;
	blue += 1;
	green += 10;

}

var ball = setInterval(drawBall,20);

canvas.addEventListener("click", function(event){
	console.log(event.x, event.y);
});