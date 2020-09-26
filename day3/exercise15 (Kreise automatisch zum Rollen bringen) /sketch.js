function setup() {
  createCanvas(1800, 1000);
  noStroke();
  noLoop();
}

function draw() {
  background(0);
  //strokeWeight(1);
  //stroke(255);


  for (var x = 20; x <= 100; x = x + 1) {
    for (var y = 20; y <= 100; y = y + 1) {
    fill(random(255), 0, random(255));
    ellipse(x, y, 10, 10)
    //rect(x, 100, 10, 10)
    //console.log(x)
    }
  }
}


//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
