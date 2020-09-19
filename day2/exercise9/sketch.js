
function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(0);
  stroke(255);

  for(let x=0;x<12;x++){
    console.log(x)
    line(x*10,0,x*10,height);


  }
}
