const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground, player, groundImg, playerImg, cop, copImg, copGroup
function preload(){
 groundImg = loadImage("Images/road.png");
 playerImg = loadAnimation("Images/Runner-1.png","Images/Runner-2.png")
 copImg = loadImage("Images/cop.png");
}
function setup(){
  background("white");
  createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
  world = engine.world;

  ground = createSprite(windowWidth/2,windowHeight/2,2000, windowHeight);
  ground.addImage("road",groundImg)
  ground.scale = 5
ground.velocityY = 10

player = createSprite(windowWidth/2,windowHeight-100);
player.addAnimation("1",playerImg)
player.scale = 0.1

copGroup = new Group()

}
function draw(){
    Engine.update(engine);
    if(ground.y>windowHeight-100){
      ground.y = windowHeight/2;
    }


    rectMode(CENTER);
    spawnCop();
    drawSprites();
}
function spawnCop(){
  if(frameCount%30===0){
    cop = createSprite(windowWidth/2,windowHeight/2,5,5);
    cop.addImage(copImg);
    cop.velocityY = 7
    cop.scale=0.3;
    copGroup.add(cop);
     cop.x = Math.round(random(350,1200));
  }
}