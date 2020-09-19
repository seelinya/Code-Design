function setup() {
  createCanvas(700, 700);
  noStroke();
}

function draw() {
  background(255, 255, 255, 0);
  fill(10, 10, 10, 0);
  stroke(168,248,255,255);
  rotate(PI / 4.2);

  let a=10;
  let b=100;
  let c=20;


  //kreis 1
  a+=60;
  b*=4;
  ellipse(a,c,b,a);
  stroke(137,204,203,255);

  //kreis 2
  a+=60;
  ellipse(a,c,b,a);
  stroke(160,208,173,255);

  //kreis 3
  a+=60;
  ellipse(a,c,b,a);
  stroke(194,221,171,255);

  //kreis 4
  a+=60;
  ellipse(a,c,b,a);
  stroke(247,244,188,255);

  //kreis 5
  a+=60;
  ellipse(a,c,b,a);
  stroke(249,215,180,255);

  //kreis 6
  a+=60;
  ellipse(a,c,b,a);
  stroke(244,172,200,255);

  //kreis 7
  a+=60;
  ellipse(a,c,b,a);
  stroke(222,165,171,255);

  //kreis 8
  a+=60;
  ellipse(a,c,b,a);
  stroke(155,165,208,255);

  //kreis 9
  a+=60;
  ellipse(a,c,b,a);
  stroke(146,118,180,255);

  //kreis 10
  a+=60;
  ellipse(a,c,b,a);
  stroke(118,67,107,255);

}
