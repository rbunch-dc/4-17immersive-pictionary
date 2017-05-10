var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d'); // prepare the canvas to be ready to draw

function clearCanvas() {
    context.clearRect(0, 0, 500, 500);
}

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.self = this;
}
Ball.prototype.r = 50;
Ball.prototype.xDirection = 1;
Ball.prototype.yDirection = 1;
Ball.prototype.red = 0;
Ball.prototype.blue = 0;
Ball.prototype.green = 0;
Ball.prototype.ranX = Math.random() * 4;
Ball.prototype.drawBall = function(){
    context.fillStyle = "#"+this.red+this.green+this.blue;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    context.fill();

};

Ball.prototype.updateBallPos = function(){
    clearCanvas();
    console.log(this);
    this.drawBall();
    if (this.x >= 500 - this.r) {
        this.xDirection = -this.xDirection;
        this.x = 500 - this.r;
    }
    else if (this.x <= this.r) {
        this.xDirection = -this.xDirection;
        this.x = this.r;
    }
    if (this.y >= 500 - this.r) {
        this.yDirection = -this.yDirection;
        this.y = 500 - this.r;
    }
    else if (this.y <= this.r) {
        this.yDirection = -this.yDirection;
        this.y = this.r;
    }
    this.x += this.ranX * this.xDirection;
    this.y += 2 * this.yDirection;
    this.red += 5;
    this.blue += 1;
    this.green += 3;
}

var ball1 = new Ball(300, 400);
console.log(ball1.drawBall)
var ball2 = new Ball(200, 200);



var score = 0;
function drawText(){
    context.font = "30px Arial";
    context.fillStyle = "blue";
    context.textAlign = "center";
    context.strokeText("Score: " + score, 100, 100);
}

var score_dis = setInterval(drawText);
setInterval(ball1.updateBallPos, 1000/60);
setInterval(ball2.updateBallPos, 1000/60);


function speededUp(e, Ball){
    if ((Math.abs(e.clientX  - Ball.x) < Ball.r) && (Math.abs(e.clientY - Ball.y) < Ball.r)){
        console.log(e);
        Ball.xDirection += 2;
        Ball.yDirection += 2;
        Ball.xDirection = -Ball.xDirection;
        Ball.yDirection = -Ball.yDirection;
        score += 1;
    }
}

canvas.addEventListener("click", function(e){
    console.log(e);
        speededUp(e, ball1);
        if (score >= 10) {
            speededUp(e, ball2);
        }
    }
);