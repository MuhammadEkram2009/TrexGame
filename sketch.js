
  var trex ,trex_running;
  var ground,groundImage,invisibleGround;


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
    //create a trex sprite
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.4
  
  ground=createSprite(300,180,600,20);
  ground.addImage("ground",groundImage)
  invisibleGround = createSprite(300,190,600,10)
  invisibleGround.visible = false
  edges = createEdgeSprites();
}

function draw(){
  background(190)
  if(keyDown("space")&& trex.y >= 150){
    trex.velocityY = -8
  }
  trex.velocityY = trex.velocityY+0.5
  ground.velocityX = -4
  if(ground.x<0){
    ground.x = ground.width/2
  }
 trex.collide(invisibleGround)
  drawSprites()

}
