function setup() {
  createCanvas(1800, 1000);
  rectMode(CENTER)
  //noStroke();
  //noLoop();
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
  //rectMode(CENTER);
randomSeed(5);
  for (var x = 20; x <= 1800; x += 50) {
    for (var y = 20; y <= 1000; y += 50) {
    fill(random(255), 0, random(255));
    rotate(PI / random(90));
    rect(x, y, 10, 10)
    }
  }

}
