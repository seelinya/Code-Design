//let x = 20;
let angle = 0;

function setup() {
  createCanvas(1800, 1000);
  //noStroke();
  //noLoop();
  angleMode(DEGREES);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
  translate(400, 400);
  rotate(angle);

  strokeWeight(1);
  stroke(255);
  line(20, 60, 500, 60);

  for (var x = 20; x <= 300; x = x + 20) {
    for (var y = 20; y <= 80; y = y + 20) {
    fill(255, 0);
    //fill(random(255), 0, random(255, 0)); //kann eigentlich ausgeblendet werden
    //ellipse(x, y, 10, 10) //kann eigentlich ausgeblendet werden
    rect(x, y, 20, 20)
    }
  }
  angle = angle + 1; //die letzte Zahl kann die Geschwindigkeit steuern


}
