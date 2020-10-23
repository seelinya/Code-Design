var gui;
var wind = 3;
let windMax = 30;
//sliderRange(0, 100, 1);
var tageszeit = 20;
let angle = 0;

function setup() {
  createCanvas(1800, 1000)
  //background(0, 0, 0);
  //noStroke();
  //noLoop();
  angleMode(DEGREES);
  gui = createGui('p5.gui');
  sliderRange(0, 20, 1);
  gui.addGlobals('wind');
  sliderRange(1, 24, 1);
  gui.addGlobals('tageszeit');

}

function draw() {
  for (var i = 2; i <= tageszeit; i++) {
    background(tageszeit * i, 100, tageszeit * i)
  }
  for (var i = 4; i <= tageszeit; i++) {
    background(tageszeit * i, 10, tageszeit * i)
  }

  for (var i = 6; i <= tageszeit; i++) {
    background(10, tageszeit * i, tageszeit * i)
  }

  for (var i = 8; i <= tageszeit; i++) {
    background(255, tageszeit * i, tageszeit * i)
  }

  for (var i = 10; i <= tageszeit; i++) {
    background(tageszeit * i, tageszeit * i, 80)
  }

  for (var i = 12; i <= tageszeit; i++) {
    background(tageszeit * i, 10, 80)
  }

  for (var i = 14; i <= tageszeit; i++) {
    background(tageszeit * i, 255, 80)
  }

  for (var i = 16; i <= tageszeit; i++) {
    background(255, tageszeit * i, 80)
  }

  for (var i = 18; i <= tageszeit; i++) {
    background(255, tageszeit * i, 255)
  }

  for (var i = 20; i <= tageszeit; i++) {
    background(0, tageszeit * i, 0)
  }

  for (var i = 22; i <= tageszeit; i++) {
    background(100, tageszeit * i, 0)
  }

  for (var i = 24; i <= tageszeit; i++) {
    background(255, tageszeit * i, 255)
  }

  background(0, 0, 0, 100);
	noFill();
  windmühle();
  windrad();

  angle = angle + wind; //die letzte Zahl kann die Geschwindigkeit steuern


}

function windrad (){
  push();
  strokeWeight(1);
  stroke(255);
  //translate(1042, 470);
  translate(742, 370);
  rotate(angle);
  translate(-742, -370);
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

    //vertikal
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
    pop();
}

function windmühle (){
  push();
  //noStroke();
  stroke(255, 255, 255, 30);//
  //boden
  //fill(10, 10, 10);
  //rect(0, 660, 1440, 85);

  translate(-137, 100);

//Hausbody
  //fill(237, 237, 237);
  beginShape();
  vertex(740, 383);
  vertex(825, 395);
  vertex(935, 395);
  vertex(1020, 383);
  vertex(1040, 700);
  vertex(935, 720);
  vertex(825, 720);
  vertex(720, 700);
  endShape(CLOSE);

//Hausdach
  //fill(150, 150, 150);
  beginShape();
  vertex(880, 270);
  vertex(1040, 380);
  vertex(935, 395);
  vertex(825, 395);
  vertex(720, 380);
  endShape(CLOSE);

//Haustür
  //fill(70, 70, 70);
  beginShape();
  vertex(880, 560);
  vertex(925, 580);
  vertex(935, 720);
  vertex(825, 720);
  vertex(835, 580);
  endShape(CLOSE);

//fenter-mitte
  //stroke(150, 150, 150);
  //fill(10, 10, 10);
  rect(866, 426, 28, 28);

//fenter-links
  //fill(10, 10, 10);
  beginShape();
  vertex(770, 419);
  vertex(795, 423);
  vertex(795, 451);
  vertex(770, 447);
  endShape(CLOSE);

//fenter-rechts
  //fill(10, 10, 10);
  beginShape();
  vertex(960, 423);
  vertex(985, 419);
  vertex(985, 447);
  vertex(960, 451);
  endShape(CLOSE);

//fenster-linien
//mitte
line(880, 426, 880, 454);
line(866, 440, 894, 440);
//links
line(770, 432, 795, 436);
line(782.5, 421, 782.5, 449);
//rechts
line(960, 436, 985, 432);
line(972.5, 449, 972.5, 421);
pop();
}
