var teddy , teddy_Img , rabbit , rabbit_Img ;
var forest , forest_Img ;
var apple , apple_Img , banana , banana_Img , grapes , grapes_Img , mango , mango_Img ;
var stone1 , stone1_Img , stone2 , stone2_Img , porcupine , porcupine_Img ;
var coin , coin_Img , basket , basket_Img ;
var forBgm , gameoverBgm , hitBgm , jumpBgm , lifeloseBgm , winBgm ;

function preload() {
   
    teddy_Img = loadImage("Images/teddy1.png");
    rabbit_Img = loadImage("Images/rabbit1.png");
    forest_Img = loadImage("Images/forest1.jpg");
    apple_Img = loadImage("Images/apple1.png");
    banana_Img = loadImage("Images/banana1.png");
    grapes_Img = loadImage("Images/grapes1.png");
    mango_Img = loadImage("Images/mango.png");
    stone1_Img = loadImage("Images/stone1.png");
    stone2_Img = loadImage("Images/stone2.png");
    porcupine_Img = loadImage("Images/porcupine1.png");
    coin_Img = loadImage("Images/coin1.png");
    basket_Img = loadImage("Images/basket1.png");

    forBgm = loadSound("Sounds/forest1.wav");
    gameoverBgm = loadSound("Sounds/Game_over.wav");
    hitBgm = loadSound("Sounds/Hit.wav");
    jumpBgm = loadSound("Sounds/Jump.wav");
    lifeloseBgm = loadSound("Sounds/Life_lose.wav");
    winBgm = loadSound("Sounds/Win.wav");

}

function setup() {
  createCanvas(800,400);

  forest = createSprite(400,200,800,400);
  forest.addImage("forest",forest_Img);
  forest.scale = 3 ;

  forBgm.play();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}