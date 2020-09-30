let angle = 0;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  //noStroke();
  //noLoop();
}

function draw() {
  background(0);
  //strokeWeight(4);
  //stroke(255);
  //noFill();
  translate(200, 200);
  rotate(angle);
  stroke(255);
  line(0, 0, 50, 50);
  //line(0, 25, 100, 100);
  fill(255);
  rect(50, 50, 100, 50);

  angle = angle + 1;

}
