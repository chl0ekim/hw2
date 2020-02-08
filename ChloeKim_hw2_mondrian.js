function setup() {
  createCanvas(350, 450);
}

function draw() {
  background(220,220,220);
  strokeCap(SQUARE);
  
  //red square
  noStroke();
   fill(190,10,20);
  rect(0,0,150, 150);
  
  stroke(0);
  strokeWeight(7);
  line(150, 0, 150, 450)
  line(240, 0, 240, 450)
  
  strokeWeight(10);
  line(0, 150, 400, 150);
  line(0,300,400,300);
  
  strokeWeight(5);
  line(10,150,10,300);
}
