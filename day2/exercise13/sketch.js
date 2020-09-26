function setup() {
  createCanvas(1800, 1000);
  noStroke();
}

function draw() {
  background(0);
  //strokeWeight(1);
  //stroke(255);

  for (var x = 20; x <= mouseX; x += 50) {
    for (var y = 20; y <= mouseX; y += 50) {
    fill(random(255), 0, random(255));
    ellipse(x, y, 10, 10)
    //rect(x, 100, 10, 10)
    //console.log(x)
    }
  }
  //stroke(255);
  fill(247, 197, 221);
  triangle(300, 150, 330, 170, 330, 230);
  fill(241, 147, 189);
  triangle(300, 150, 320, 140, 330, 170);
  fill(239, 131, 179);
  triangle(320, 115, 320, 140, 385, 125);
  fill(251, 227, 240);
  triangle(320, 115, 350, 80, 385, 125);
  fill(241, 147, 189);
  triangle(320, 140, 375, 165, 385, 125);
  fill(234, 78, 150);
  triangle(350, 80, 375, 70, 385, 125);
  fill(239, 126, 176);
  triangle(375, 70, 385, 125, 425, 105);
  fill(241, 147, 189);
  triangle(385, 125, 425, 105, 450, 175);
  fill(237, 108, 165);
  triangle(350, 335, 405, 325, 450, 175);
  fill(234, 78, 150);
  triangle(350, 335, 355, 355, 405, 325);
  fill(251, 227, 240);
  triangle(355, 355, 405, 325, 450, 420);
  fill(239, 131, 179);
  triangle(425, 340, 445, 310, 450, 420);
  fill(242, 157, 195);
  triangle(445, 310, 450, 420, 525, 280);
  fill(239, 126, 176);
  triangle(450, 420, 525, 280, 665, 395);
  fill(251, 227, 240);
  triangle(525, 280, 600, 280, 665, 395);
  fill(234, 78, 150);
  triangle(600, 280, 680, 420, 710, 395);
  fill(237, 108, 165);
  triangle(530, 411, 580, 405, 630, 510);
  fill(241, 147, 189);
  triangle(580, 405, 587, 420, 605, 402);
  fill(251, 227, 240);
  triangle(435, 520, 440, 530, 630, 510);
  fill(239, 131, 179);
  triangle(520, 435, 520, 730, 579, 460);
  fill(242, 157, 195);
  triangle(520, 435, 539, 420, 579, 460);
  fill(234, 78, 150);
  triangle(400, 540, 435, 520, 440, 530);
}


//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
