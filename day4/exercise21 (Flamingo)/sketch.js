
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
  flamingo();
	angle = angle + 1;
	}


function flamingo (){
	background(255, 255, 255, 0);
	triangle(300, 150, 330, 170, 330, 230);
	triangle(300, 150, 320, 140, 330, 170);
	triangle(320, 115, 320, 140, 385, 125);
	triangle(320, 115, 350, 80, 385, 125);
	triangle(320, 140, 375, 165, 385, 125);
	triangle(350, 80, 375, 70, 385, 125);
	triangle(375, 70, 385, 125, 425, 105);
	triangle(385, 125, 425, 105, 450, 175);
	triangle(350, 335, 405, 325, 450, 175);
	triangle(350, 335, 355, 355, 405, 325);
	triangle(355, 355, 405, 325, 450, 420);
	triangle(425, 340, 445, 310, 450, 420);
	triangle(445, 310, 450, 420, 525, 280);
	triangle(450, 420, 525, 280, 665, 395);
	triangle(525, 280, 600, 280, 665, 395);
	triangle(600, 280, 680, 420, 710, 395);
	triangle(530, 411, 580, 405, 630, 510);
	triangle(580, 405, 587, 420, 605, 402);
	triangle(435, 520, 440, 530, 630, 510);
	triangle(520, 435, 520, 730, 579, 460);
	triangle(520, 435, 539, 420, 579, 460);
	triangle(400, 540, 435, 520, 440, 530);
	}
