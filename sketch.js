//declaring global variables
var ground;
var trex, trex_running, edges;
var groundImage;

//to load images, animations, sounds, etc
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

//to vreate things, runs once
function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation('trex runner',trex_running)
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //creating ground
  ground = createSprite(300,180,600,10)
  ground.addImage(groundImage)
  ground.velocityX = -5
}

//continuous function
function draw(){
  //set background color 
  background("lightgrey");

  if(keyDown('space')){
    trex.velocityY = -10
  }

  if(ground.x<0){
    ground.x = 300
  }

  //adding gravity
  trex.velocityY+=0.5;
  
  //logging the y position of the trex
  console.log(trex.y)

  //to make the trex stand on top of the ground
  trex.collide(ground)

  drawSprites();
}