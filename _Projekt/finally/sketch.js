var gui;

var wind = 10;
var distanz = 25;

function setup() {
  createCanvas(1440, 745);
  noStroke();
  gui = createGui('p5.gui');
  gui.addGlobals('wind', 'distanz');
  noLoop();
}

function draw() {
  noStroke();
  background(255, 255, 100);
  fill(10, 200, 50);
  //boden
  fill(10, 10, 10);
  rect(0, 660, 1440, 85);

  translate(-300, -50);

//Hausbody
  fill(237, 237, 237);
  beginShape();
  vertex(740, 380);
  vertex(1020, 380);
  vertex(1040, 700);
  vertex(935, 720);
  vertex(825, 720);
  vertex(720, 700);
  endShape(CLOSE);

//Hausdach
  fill(150, 150, 150);
  beginShape();
  vertex(880, 270);
  vertex(1040, 380);
  vertex(935, 395);
  vertex(825, 395);
  vertex(720, 380);
  endShape(CLOSE);

//Haustür
  fill(70, 70, 70);
  beginShape();
  vertex(880, 560);
  vertex(925, 580);
  vertex(935, 720);
  vertex(825, 720);
  vertex(835, 580);
  endShape(CLOSE);

//fenter-mitte
  stroke(150, 150, 150);
  fill(10, 10, 10);
  rect(866, 426, 28, 28);

//fenter-links
  fill(10, 10, 10);
  beginShape();
  vertex(770, 419);
  vertex(795, 423);
  vertex(795, 451);
  vertex(770, 447);
  endShape(CLOSE);

//fenter-rechts
  fill(10, 10, 10);
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

//wind
strokeWeight(2);
//for (var 1; wind + i; 10;) {
  //strokeWeight(i);
  rect(50, 50, 100, 100);

  strokeWeight(2);
  //background(242, 161, 184);

  for (var i = 1; i <= wind; i++) {
    strokeWeight(i);
    rect(distanz * i, distanz * i, 100, 100);
  }
//}

}





//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
