var gameState = 0
var playButton,playButtonImg;
var playButton2,playButton2Img;
var bg1,bg1Img;
var spaceShip,spaceShipImg;
var stone,stoneImg;
var bullet,bulletImg;
var score=0;

function preload(){

  playButtonImg = loadImage("images/playButton.jpeg");
  playButton2Img = loadImage("images/play.buttn.png");
  bg1Img = loadImage("images/bg.jpeg");
  spaceShipImg = loadImage("images/spaceship1.png");
  stoneImg = loadImage("images/corona.png");
  bulletImg = loadImage("images/bullet.png");

}
function setup(){
  createCanvas(600,600);

  playButton = createSprite(300,300);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.8
  playButton.visible = true;

  playButton2 = createSprite(200,350);
  playButton2.addImage(playButton2Img);
  playButton2.scale = 0.8
  playButton2.visible = false;

  spaceShip = createSprite(250,400);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;

 
  stoneGrp = new Group();
  bulletGrp = new Group();stoneGrp = new Group();
  bulletGrp = new Group();
  
}
function draw(){
background(0);


 spaceShip.visible = false;
 
  pg1();

  



if(mousePressedOver(playButton)){
  gameState=1;
}

if(gameState === 1){
playButton.visible = false;
playButton2.visible = true;
  pg2();
}


if(mousePressedOver(playButton2)){
  gameState=2;
  console.log("gameState=2",gameState);
}
  if(gameState === 2){
  playButton2.visible = false;
    pg3();

    if(stoneGrp.isTouching(bulletGrp)){
      stoneGrp.destroyEach();
      bulletGrp.destroyEach();
      score = score+1
     
    }
    if(score === 10){
      background("green")
      end();
      
    }
  }

 

  drawSprites();
  
}




function pg1(){
  background(77,0,88);

textSize(50);
fill("yellow");
text("COVID-WAR",150,50);

textSize(70);
fill("red");
text("Welcome",150,200);

textSize(30);
fill("black");
text("press next to continue",150,400);

textSize(20);
fill("white");
text("Guys this is the game we make for you to enjoy. this game contains",5,470);
text("intresting actions. this game is free so please play.",30,500);
}




function pg2(){

console.log("gameState=1",gameState);
background(19,218,200);

textSize(23);
fill("white");
text("Guys To play this game follow the below rules.",5,50);

textSize(23);
fill("yellow");
text("rules: .",5,80);

textSize(23);
fill("white");
text("press the arrow keys to move", 5,100)
text("press the space key to fire",5,140);
text("see the score always",5,180);
text("Kill the corona virus 10 time and win the match",5,220);
text("Guys please wear mask, wash your hands continuosly",5,500);
text("make sure you keep 1m social distancting",5,540);
text("Be safe",5,560);
text("remember we have to kill corona, now play..",5,590);



}
function pg3(){

  createCanvas(1000 ,500);
  background(135,4,4);
  //backGround = createSprite(500,250);
  //backGround.addImage(253,155,5);
  //backGround.scale = 4;
   
 spaceShip.visible = true;

  if(keyDown(LEFT_ARROW)){
    spaceShip.x = spaceShip.x-4
  }
  if(keyDown(RIGHT_ARROW)){
    spaceShip.x = spaceShip.x+4
  }
 
  
 textSize(30)
 text("score: "+ score, 50,100);

  spwanStones();
  drawSprites();

}

function spwanStones(){
  if(frameCount%40===0){
    
    
    stone1 = createSprite();
      stone1.addImage(stoneImg);
      stone1.scale =- 0.5;
      stone1.x = Math.round(random(1,1000));
      //stone1.y = Math.round(random(1000,100));
    stone1.velocityY = 3;
     stone1.lifetime =100;
      stoneGrp.add(stone1);
     
   
    }


}
function spwanbullet(){
  bullet = createSprite(250,400);
  bullet.addImage(bulletImg);
  bullet.scale = 0.4
  bullet.velocityY = -10;
  bullet.x= spaceShip.x
  bullet.depth = spaceShip.depth-5
  bulletGrp.add(bullet);
  
}
function keyPressed(){
  if(keyCode === 32){
    spwanbullet();
  }
}
function end(){

  createCanvas(1000,1000);
  background("green")
  console.log("Game Ended");
  //game.update(2);
  //clear();
  fill("blue");
  textSize(60);
  text("GameOver", 350,300);
  fill("yellow");
  textSize(40);
  text("Good Job now You are free from The Covid-19",50,400);
  text("You are been vaccinated now",100,450);
  spaceShip.destroy();
  stoneGrp.destroyEach();
  bulletGrp.destroyEach();
}

