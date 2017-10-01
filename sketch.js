function setup() {
  createCanvas(500,500);
  background(0,0,0,0);
}

function draw() {
   
  // SETTING THE COLOUR MODE
  // colorMode(HSB);
   
  // SHAPE ATTRIBUTES (vanno prima dell'elemento a cui vuoi attribuirle)
  /* background */
  // background(0,0,0);
  /* weight of the stroke */
  strokeWeight(10);
  /* senza stroke */
  noStroke();
  /* color */
  stroke(168,153,201);
  /* fill or noFill(); aggiungendo un quarto valor emetti l'opacità */
  fill(237,185,201,155);
  
  
  // BASIC SHAPES
  /* disegnare una linea (x del primo punto, y, x del secondo punto) */
  line(190,140,140,190);
  /* disegnare un rettangolo (x del punto in alto a sx, y del punto, width, height) */
  rect(10,10,100,100);
  /* disegnare un ellisse (x del punto centrale, y, width, height) */
  ellipse(250,250,100,100);

  // USING VARIABLES INSTEAD OF VALUES es. width of the canvas
  ellipse(width/2,height/2,200,200);
 // ellipse(mouseX,mouseY,100,100);
  // pMouse = posizione precedente del mouse
  line(pmouseX,pmouseY,mouseX,mouseY);
}