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

function printB(x,y) {
  // Print B
  //line(40,20,60,20);
  //line(40,20,40,100);
  //line(40,50,60,50);
  //line(40,100,60,100);
  //line(60,20,60,100);
  line(x,y,x+20,y);
  line(x,y,x,y+80);
  line(x,y+30,x+20,y+30);
  line(x,y+80,x+20,y+80);
  line(x+20,y,x+20,y+80);
  
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

function printD(x,y) {
  // Print D
  //line(120,20,140,70)
  //line(140,70,120,100);
  //line(120,100,120,20);
  line(x,y,x+20,y+50);
  line(x+20,y+50,x,y+80);
  line(x,y+80,x,y);
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

function printF(x,y) {
  // Print F
  //line(200,20,200,100)
  //line(200,20,220,20);
  //line(200,50,220,50);
  line(x,y,x,y+80);
  line(x,y,x+20,y);
  line(x,y+30,x+20,y+30);
  
}

function printG(x,y) {
  // Print G
  //line(240,20,240,100)
  //line(240,20,260,20);
  //line(240,100,260,100);
  //line(260,100,260,50);
  //line(260,50,250,50);
  line(x,y,x,y+80);
  line(x,y,x+20,y);
  line(x,y+80,x+20,y+80);
  line(x+20,y+80,x+20,y+30);
  line(x+20,y+30,x+10,y+30);

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

function printJ(x,y) {
  // Print J
  //line(360,20,380,20)
  //line(370,20,370,100);
  //line(360,100,370,100);
  line(x,y,x+20,y);
  line(x+10,y,x+10,y+80);
  line(x,y+80,x+10,y+80);
}

function printK(x,y) {
  // Print K
  //line(10,120,10,200)
  //line(10,160,30,120);
  //line(10,160,30,200);
  line(x,y,x,y+80);
  line(x,y+40,x+20,y);
  line(x,y+40,x+20,y+80);

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

function printP(x,y) {
  // Print P
  //line(200,120,200,200)
  //line(200,120,220,120);
  //line(220,120,220,160);
  //line(220,160,200,160);
  line(x,y,x,y+80);
  line(x,y,x+20,y);
  line(x+20,y,x+20,y+40);
  line(x+20,y+40,x,y+40);

}

function printQ(x,y) {
  // Print Q
  //line(240,120,240,200);
  //line(240,200,260,200);
  //line(260,120,260,200);
  //line(240,120,260,120);
  //line(250,180,270,210);
  line(x,y,x,y+80);
  line(x,y+80,x+20,y+80);
  line(x+20,y,x+20,y+80);
  line(x,y,x+20,y);
  line(x+10,y+60,x+30,y+90);

}

function printR(x,y) {
  // Print R
  //line(280,120,280,200)
  //line(280,120,300,120);
  //line(300,120,300,160);
  //line(300,160,280,160);
  //line(280,160,300,200);
  line(x,y,x,y+80);
  line(x,y,x+20,y);
  line(x+20,y,x+20,y+40);
  line(x+20,y+40,x,y+40);
  line(x,y+40,x+20,y+80);

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

function printT(x,y) {
  // Print T
  //line(360,120,380,120)
  //line(370,120,370,200);
  line(x,y,x+20,y);
  line(x+10,y,x+10,y+80);

}

function printU(x,y) {
  // Print U
  //line(10,220,10,300)
  //line(10,300,30,300);
  //line(30,300,30,220);
  line(x,y,x,y+80);
  line(x,y+80,x+20,y+80);
  line(x+20,y+80,x+20,y);

}

function printV(x,y) {
  // Print V
  //line(40,220,50,300)
  //line(60,220,50,300);
  line(x,y,x+10,y+80);
  line(x+20,y,x+10,y+80);
  
}

function printW(x,y) {
  // Print W
  //line(80,220,85,300)
  //line(85,300,90,220);
  //line(90,220,95,300);
  //line(95,300,100,220);
  line(x,y,x+5,y+80);
  line(x+5,y+80,x+10,y);
  line(x+10,y,x+15,y+80);
  line(x+15,y+80,x+20,y);
}

function printX(x,y) {
  // Print X
  //line(120,220,140,300)
  //line(140,220,120,300);
  line(x,y,x+20,y+80);
  line(x+20,y,x,y+80);
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

function printZ(x,y) {
  // Print Z
  //line(200,220,220,220);
  //line(220,220,200,300);
  //line(200,300,220,300);
  line(x,y,x+20,y);
  line(x+20,y,x,y+80);
  line(x,y+80,x+20,y+80);
  
}

function draw() {
  background(220);
  printA(20, 20);
  printB(40,20)
  printC(80,20);
  printD(120,20);
  printE(160,20);
  printF(200,20);
  printG(240,20);
  printH(280,20);
  printI(320,20);
  printJ(360,20);
  printK(10,120);
  printL(40,120);
  printM(80,120);
  printN(120,120);
  printO(160,120);
  printP(200,120);
  printQ(240,120);
  printR(280,120);
  printS(320,120);
  printT(360,120);
  printU(10,220);
  printV(40,220);
  printW(80,220);
  printX(120,220);
  printY(160,220);
  printZ(200,220);
}
