var speedX = 5;
var speedY= 5;
var x;
var y;
let img
let img2
let img3

function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
}

function loadImage(){
  img = loadImage('resources/rat1.png')
  img2 = loadImage('resources/rat2.png')
  img3 = loadImage('resources/rat3.png')
}

function draw() {
  background(225);
  x = x + random(-speedX, speedX);
  y = y + random(-speedY, speedY);
  for (i = 0; i < 100; i++);
  push();
  rotate(TWO_PI*i/100)
  ellipse(x, y, i, i)
  //image(img, 0, 0, 50,50);
  pop();
}