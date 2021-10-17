  var score;
  var trex ,trex_running;
  var ground,groundImage,invisibleGround;
  var cloud,cloudImage;
  var obstacle,obstacleImage1,obstacleImage2,obstacleImage3,obstacleImage4,obstacleImage5,obstacleImage6

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")
  obstacleImage1=loadImage("obstacle1.png")
  obstacleImage2=loadImage("obstacle2.png")
  obstacleImage3=loadImage("obstacle3.png")
  obstacleImage4=loadImage("obstacle4.png")
  obstacleImage5=loadImage("obstacle5.png")
  obstacleImage6=loadImage("obstacle6.png")

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
  score = 0
}

function draw(){
  background(190)
  text("S c o r e: " +score,500,40 )
  score = score+Math.round(frameCount/60)
  if(keyDown("space")&& trex.y >= 160){
    trex.velocityY = -7.77789799
  }
  trex.velocityY = trex.velocityY+0.5
  ground.velocityX = -4
  if(ground.x<0){
    ground.x = ground.width/2
  }
 trex.collide(invisibleGround)
 spawnClouds()
 spawnObstacles();
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
    cloud.lifetime = 130
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1
  }

}

function spawnObstacles(){
  if(frameCount% 50 === 0)
  {
    obstacle = createSprite(600,165,40,12)
    obstacle.velocityX = -5
    obstacle.lifetime = 130
    obstacle.scale=0.5
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1:obstacle.addImage(obstacleImage1)
      break;
      case 2:obstacle.addImage(obstacleImage2)
      break;
      case 3:obstacle.addImage(obstacleImage3)
      break;
      case 4:obstacle.addImage(obstacleImage4)
      break;
      case 5:obstacle.addImage(obstacleImage5)
      break;
      case 6:obstacle.addImage(obstacleImage6)
      break;
      default:break;
    }
  }

}