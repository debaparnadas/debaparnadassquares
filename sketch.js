var fixrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  fixrect.shapeColor= "pink";
  movingrect=createSprite(700,200,50,50);
  movingrect.shapeColor= "pink";

  fixrect.debug= true;
  movingrect.debug= true;
}

function draw() {
  background(0);  

  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;

  if (fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
      && movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2
      && fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2
      && movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2
    ) {
    fixrect.shapeColor= "red";
    movingrect.shapeColor= "red";
  }
  else {
    fixrect.shapeColor= "pink";
    movingrect.shapeColor= "pink";
  }
  drawSprites();
}