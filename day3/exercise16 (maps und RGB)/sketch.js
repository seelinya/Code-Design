function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(mouseX);
  let bgb = map(mouseX, 0, width, 0, 255);
  background(0, 200, bgb);

  let ell = map(mouseY, 0, width, 0, 197);
  ellipse(width / 2, height / 2, ell, ell);
  fill(0, 100, ell);

  let ret = map(mouseX, 0, width, 0, 197);
  fill(100, 255, ret);
  rect(5, 5, 100, 100);
  //let x1 = map(mouseX, 0, 600, 0, 255);

  //fill(255-mouseX);
}
//rect(x, 100, 10, 10)
//console.log(x)



//  for(let x=0;x<100;x++){
//console.log(x)
//  line(x*10,0,width, x*10);
