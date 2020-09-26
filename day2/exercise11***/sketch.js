function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  background(255);
  stroke(100);

  for (let x = 0; x < mouseX; x = x + 10) {
    console.log(x)
    triangle(0, 800, width / 2, x, 800, 800);
    stroke(200, 100, random(255));
  }

//  for (var x = 0; x <= width; x += 50) {
  //  strokeWeight(255, 0, random(255));
  //}
}


//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
