
  var trex ,trex_running;
  var ground,groundImage,invisibleGround;
  var cloud,cloudImage;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
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

  var rand = Math.round(random(10,60))
  console.log(rand)
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
 spawnClouds()
  drawSprites()

}
function spawnClouds(){
  if(frameCount% 34 === 0)
  {
    cloud = createSprite(600,100,40,12)
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,100))
    cloud.scale = 0.5
    cloud.velocityX = -5
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
  }

}
