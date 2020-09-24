function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);

  for (var x = 0; x <= width; x += 50) {
    fill(255, 0, random(255));
    ellipse(x, 200, 25, 25)
    console.log(x)
  }
}


//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
