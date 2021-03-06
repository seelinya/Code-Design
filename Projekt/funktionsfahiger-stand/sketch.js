var gui;
var wind = 3;
let windMax = 180; //30
//sliderRange(0, 100, 1);
var temperatur = -15;
var temperaturMax = 30;
let angle = 0;

function setup() {
  createCanvas(1800, 1000)
  //noStroke();
  //noLoop();
  angleMode(DEGREES);
  gui = createGui('p5.gui');
  sliderRange(0, 20, 1);
  gui.addGlobals('wind');
  sliderRange(1, 24, 1);
  gui.addGlobals('temperatur');

}

function draw() {
	noFill();
  hintergrund();
  windmuehle();
  windrad();
  schnee();
  angle = angle + wind; //die letzte Zahl kann die Geschwindigkeit steuern

}

function hintergrund() {
  //for (var i = -15; i <= temperatur; i++) {

    let c = map(temperatur, -15, 30, 0, 1);
    let from = color(218, 165, 32, 100);
    let to = color(72, 61, 139, 100);
    let newcolor = lerpColor(from, to, c);
    //colorMode(HSL);
    background(newcolor);
    stroke(255,255,255);

}

function windrad (){
  push();
  strokeWeight(1.5);
  translate(237, 0);
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

function schnee (){
  angleMode(RADIANS);
  noStroke();
  translate(0, 0);
  for (var x = 20; x <= 1800; x += 50) {
    for (var y = 20; y <= 1000; y += 50) {
    fill(random(255), 0, random(255));
    rotate(PI / random(90));
    ellipse(x, y, 3, 3)
    }
  }
  angleMode(DEGREES);
}

function windmuehle (){
  push();
  strokeWeight(0.2);
  //noStroke();
  //stroke(255, 255, 255);//
  //boden
  //fill(10, 10, 10);
  //rect(0, 660, 1440, 85);

  translate(100, 100);

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
