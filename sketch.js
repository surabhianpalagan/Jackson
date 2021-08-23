
function preload(){
 
  RunnerImg=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  Runner=createSprite(180,340,50,170);
  Runner.addAnimation("running", RunnerImg);
  Runner.scale=0.05

  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
 
  path.velocityY=5;
  Runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;

  
}
  Runner.collide(left_boundary);
  Runner.collide(right_boundary);
  edges=createEdgeSprites();
  Runner.collide(edges[3]);
drawSprites();
}
