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
  translate(450, 450);
  rotate(angle);

  strokeWeight(1);
  stroke(255);
  //line(0, 0, 600, 90);

  //rotate(PI / 10);
  translate(180, -60);
  for (var x = 30; x <= 450; x = x + 30) {
    for (var y = 30; y <= 120; y = y + 30) {
    fill(255, 0);
    //fill(random(255), 0, random(255, 0)); //kann eigentlich ausgeblendet werden
    //ellipse(x, y, 10, 10) //kann eigentlich ausgeblendet werden
    rect(x, y, 20, 20)
    //line(0, 0, 600, 90);
    }
  }

    for (var x = 30; x <= 450; x = x + 30) {
      for (var y = 30; y <= 120; y = y + 30) {
      fill(255, 0);
      rect(x, y, 20, 20)
      }
  }
  angle = angle + 0.3; //die letzte Zahl kann die Geschwindigkeit steuern


}
