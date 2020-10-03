//let x = 20;
let angle = 0;

function setup() {
  createCanvas(1800, 1000);
  //noStroke();
  //noLoop();
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0,10);
	noFill();
  strokeWeight(1);
  stroke(255);
  translate(500, 450);
  rotate(angle);
  translate(-500, -450);

  strokeWeight(1);
  stroke(255);
  windrad();


  angle = angle + 1; //die letzte Zahl kann die Geschwindigkeit steuern

}

function windrad (){

  //horizontal
    for (var x = 870; x <= 1320; x = x + 30) {
      for (var y = 310; y <= 425; y = y + 30) {
        fill(255, 0);
        rect(x, y, 30, 30)
      }
    }

    for (var x = 130; x <= 580; x = x + 30) {
      for (var y = 310; y <= 425; y = y + 30) {
        rect(x, y, 30, 30)
      }
    }

    //vertika0
      for (var x = 682; x <= 800; x = x + 30) {
        for (var y = -230; y <= 220; y = y + 30) {
          fill(255, 0);
          rect(x, y, 30, 30)
        }
      }

      for (var x = 682; x <= 800; x = x + 30) {
        for (var y = 510; y <= 960; y = y + 30) {
          rect(x, y, 30, 30)
        }
      }

    line(610, 370, 870, 370);
    line(742, 220, 742, 510);

}
