function setup() {
  createCanvas(1800, 1000);
  noStroke();
  noLoop();
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);

  for (var x = 20; x <= 300; x = x + 20) {
    for (var y = 20; y <= 60; y = y + 20) {
    fill(255, 0);
    //fill(random(255), 0, random(255, 0));
    //ellipse(x, y, 10, 10)
    rect(x, y, 20, 20)
    }
  }



  strokeWeight(1);
  stroke(255);
  line(20, 60, 500, 60);

}
