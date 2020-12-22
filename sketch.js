//Declaring variables globally
var fixedRect, movingRect;

function setup() {
  //creating canvas
  createCanvas(1200,800);
  
  //fixed Rectangle
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  //Moving Rectangle
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  //Creating Background
  background(0,0,0); 

  // moving rectangles by the mouse 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //Condition for colours
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }
else{

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

//creating Sprites
  drawSprites();
}