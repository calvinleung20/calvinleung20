// to set up a test ball
//var testBall = new Ball(50, 100, 4, 4, 'blue', 10);

// to draw obviously testBall.draw()

// setup canvas

var canvas = document.querySelector('canvas');

//using canvas api
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// define Ball constructor

//this is defining the general object
//self explainatory

function Ball (x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// define ball draw method

// first begin path is used to state that we want to draw on the canvas
// fillstyle is defining the color of the shape
// arc is the radius of the arc, size of the balls
// fill is used to finish drawing the path that was started by begin path

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};


// add an update to the prototype
/*
this udpate function is used to update the ball's position
the first 4 conditions define how the ball will act when it reaches an edge
whenever it touches an edge, it should reverse the velocity to make the ball travel in
the opposite direction.
in each case, the size of the ball is included because x.y are the coordinates
of the center of the ball but not the edge of the ball
*/


Ball.prototype.update = function() {
  //checking to see if the ball reaches right side of page
  if((this.x+this.size)> width){
    this.velX = -(this.velX);
  }
  //checking to see if the ball reaches top of page
  if((this.y+this.size)> height){
    this.velY = -(this.velY);
  }
  //checking to see if ball reaches left side of the page
  if((this.x-this.size) <= 0){
    this.velX = -(this.velX);
  }
  //chekcing to see if ball reaches bottom of page
  if((this.y-this.size) <= 0){
    this.velY = -(this.velY);
  }

  // these are to add the velocity values to the position variables, effectively moving the ball
  this.x += this.velX;
  this.y += this.velY;
}

//CollisionDetection JavaScript
Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}
// we need to now add balls to the canvas and animate

var balls = []

while (balls.length < 10){
  var size = random(10,20);
  var ball = new Ball(
    //ball position always drawn at least one ball width
    // away from the dge of the canvas
    random(0+size, width-size),
    random(0+size, height-size),
    random(-7,7),
    random(-7,7),
    'rgb('+ random(0,255) +','+random(0,255)+','+ random(0,255) +')',
    size
  )
  balls.push(ball);
}
//push is append


//sets the canvas fill color to semi transparent black, used to cover up the previous drawing
//loop through all the balls in balls , then draw and update.
//runs the function using request animatoin frame
function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  for(var i =0; i < balls.length; i++){
    balls[i].draw();
    balls[i].update();
  }
  //requestAnimationFrame API used to animate the wholedispplay
  requestAnimationFrame(loop);
  //method is run, and passed the same function name
  //it will run that function a set number of times per second to create a smooth tranisiton
  //generally done recusively
}

//start of loop

loop();
