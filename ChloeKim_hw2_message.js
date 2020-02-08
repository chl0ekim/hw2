function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(255);
}


function printA(x,y) {
  // Print A
  //line(20,20,10,100);
  //line(20,20,30,100);
  //line(15,50,25,50);
  line(x,y,x-10,y+80);
  line(x,y,x+10,y+80);
  line(x-5,y+30,x+5,y+30);
}


function printC(x,y) {
  // PrintC
  //line(80,20,100,20)
  //line(80,20,80,100);
  //line(80,100,100,100);
  line(x,y,x+20,y);
  line(x,y,x,y+80);
  line(x,y+80,x+20,y+80);
}


function printE(x,y) {
  // Print E
  //line(160,20,160,100)
  //line(160,20,180,20);
  //line(160,50,180,50);
  //line(160,100,180,100);
  line(x,y,x,y+80);
  line(x,y,x+20,y);
  line(x,y+30,x+20,y+30);
  line(x,y+80,x+20,y+80);
}


function printH(x,y) {
  // Print H
  //line(280,20,280,100)
  //line(300,20,300,100);
  //line(280,50,300,50);
  line(x,y,x,y+80);
  line(x+20,y,x+20,y+80);
  line(x,y+30,x+20,y+30);

}

function printI(x,y) {
  // Print I
  //line(320,20,320,100)
  //line(310,20,330,20);
  //line(310,100,330,100);
  line(x,y,x,y+80);
  line(x-10,y,x+10,y);
  line(x-10,y+80,x+10,y+80);

}


function printL(x,y) {
  // Print L
  //line(40,120,40,200)
  //line(40,200,60,200);
  line(x,y,x,y+80);
  line(x,y+80,x+20,y+80);
}

function printM(x,y) {
  // Print M
  //line(80,120,80,200)
  //line(80,120,90,200);
  //line(90,200,100,120);
  //line(100,120,100,200);
  line(x,y,x,y+80);
  line(x,y,x+10,y+80);
  line(x+10,y+80,x+20,y);
  line(x+20,y,x+20,y+80);

}

function printN(x,y) {
  // Print N
  //line(120,120,120,200)
  //line(120,120,140,200);
  //line(140,200,140,120);
  line(x,y,x,y+80);
  line(x,y,x+20,y+80);
  line(x+20,y+80,x+20,y);

}

function printO(x,y) {
  // Print O
  //line(160,120,160,200)
  //line(160,200,180,200);
  //line(180,200,180,120);
  //line(160,120,180,120);
  line(x,y,x,y+80);
  line(x,y+80,x+20,y+80);
  line(x+20,y+80,x+20,y);
  line(x,y,x+20,y);

}


function printS(x,y) {
  // Print S
  //line(320,120,340,120)
  //line(320,120,320,160);
  //line(320,160,340,160);
  //line(340,160,340,200);
  //line(340,200,320,200);
  line(x,y,x+20,y);
  line(x,y,x,y+40);
  line(x,y+40,x+20,y+40);
  line(x+20,y+40,x+20,y+80);
  line(x+20,y+80,x,y+80);

}



function printY(x,y) {
  // Print Y
  //line(160,220,170,260);
  //line(170,260,180,220);
  //line(170,260,170,300);
  line(x,y,x+10,y+40);
  line(x+10,y+40,x+20,y);
  line(x+10,y+40,x+10,y+80);
  
}


function draw() {
  background(220);
  printA(175,120);
  printC(80,200);
  printE(230,120);
  printE(300,200);
  printH(140,200);
  printI(300,120);
  printL(190,200);
  printM(50,120);
  printM(195,120);
  printN(130,120);
  printO(240,200);
  printS(320,120);
  printY(80,120);

}
