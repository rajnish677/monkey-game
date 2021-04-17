
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivlalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400, 400);
  
ground = createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x = ground.width /2;
console.log(ground.x);

monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;  
  
  
foodGroup = new Group();
  obstaclesGroup = new Group();
  

  
  
  
  
  
  
  

  
}


function draw() {
 background(255); 
//stroke("white");
//textSize=(20);
//fill("white");
//text("score:"+ score,400,50);
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -10;
    monkey.velocityY = monkey.velocityY + 2
    
    monkey.collide(ground);
     }
  //monkey.gravity=-4;
   monkey.velocityY = monkey.velocityY=-2;

 // monkey.velocityY = monkey.velocityY + -2

  

  stroke("white");
 textSize(20);
  fill("white");
  text("score"+score,350,50);
  
  stroke("black");
  textSize("black");
  survivlalTime=Math.ceil(frameCount/frameRate())
  text("survival Time"+ survivlalTime,100,50) 
    

  
  
  
  
  
 obstacles(); 
bananas();  
  
drawSprites();
  
}
function bananas() {

if (frameCount % 100 === 0) {
banana=createSprite(200,200,20,20);
banana.addImage(bananaImage );
banana.scale=0.1;
banana.x = Math.round(random(400,400));
banana.velocityX = -3;
  

}

}

function obstacles(){
if (frameCount % 180 === 0) {
 obstacle = createSprite(400,310 ,30,30);
obstacle.addImage(obstaceImage); 
obstacle .scale=0.2;
obstacle .x = Math.round(random(400,400));
obstacle.velocityX = -3;
obstaclesGroup.add(obstacle);

  
}
  
  
}

