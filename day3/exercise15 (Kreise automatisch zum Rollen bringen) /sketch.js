var x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);

  if (x > width) {
   speed = -3;
  }
  x = x + speed;

}


//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
