function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  background(255, 255, 255, 0);
  fill(10, 10, 10, 0);
  stroke(100);

  for (let x = 0; x < 800; x = x + 10) {
    console.log(x)
    beginShape();
    vertex(10+x, 10+x);
    vertex(10+x, 60+x);
    vertex(60+x, 60+x);
    vertex(60+x, 110+x);
    vertex(110+x, 110+x);
    vertex(110+x, 10+x);
    endShape(CLOSE);
  }
}


//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
