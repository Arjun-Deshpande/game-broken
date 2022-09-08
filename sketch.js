var orange = [],apple = [],mango = [],pineapple = [],melon = [],orangei,applei,mangoi,pineapplei,meloni;
var oranges,apples,mangoes,pineapples,melons;
var corange,capple,cpineapple,cmango,cmelon;
var edges;
var vx = 1;
var vy= 1;
var vi = 0;

function preload(){
  orangei = loadImage("/assets/orange.png");
  applei = loadImage("assets/apple.png");
  mangoi = loadImage("assets/mago.png");
  meloni = loadImage("assets/melon.png");
  pineapplei = loadImage("assets/pineapple.png");
}

function setup() {
  createCanvas(600,600);
  oranges = new Group()
  apples = new Group()
  pineapples = new Group();
  melons = new Group();
  mangoes = new Group()
  spawnOrange()
  edges = createEdgeSprites()
  setInterval(spawnOrange(), 1000)
}


function draw() {
  background("BLACK");  

  //spawnOrange();

  spawnApple();
  spawnPineapple()
  spawnMango();
  spawnMelon()
  oranges.bounceOff(edges)
  mangoes.bounceOff(edges)
  apples.bounceOff(edges)
  pineapples.bounceOff(edges)
  melons.bounceOff(edges);
  drawSprites();
  destroyFruits();
  
}

function spawnOrange(){
  //console.log("orange" + vi)
  //for(var i = vi; i <= orange; i--){
  //console.log("hhi" + i)
  orange[0] = createSprite(random(0,400),random(0,400),20,20);
  orange[0].addImage(orangei)
  orange[0].scale = 0.12;
  orange[0].velocityX = vx
  orange[0].velocityY = vy;
  corange = orange[0];
  oranges.add(corange)
  //console.log("i"+i)
  vi = 0;
 // }


}

function spawnApple(){

  for(var i = 0; i <= apple; i++){
    apple[i] = createSprite(random(0,400),random(0,400),20,20);
    apple[i].addImage(applei)
    apple[i].scale = 0.12;
    apple[i].velocityX = random(5,-5)
    apple[i].velocityY = random(5,-5);
    capple = apple[i];
    apples.add(capple)
    }
}

function spawnMango(){
  for(var i = 0; i <= mango; i++){
    mango[i] = createSprite(random(0,400),random(0,400),20,20);
    mango[i].addImage(mangoi)
    mango[i].scale = 0.12;
    mango[i].velocityX = random(5,-5)
    mango[i].velocityY = random(5,-5);
    cmango = mango[i];
    mangoes.add(cmango)
    }
}

function spawnPineapple(){
  for(var i = 0; i <= pineapple; i++){
    pineapple[i] = createSprite(random(0,400),random(0,400),20,20);
    pineapple[i].addImage(pineapplei)
    pineapple[i].scale = 0.23;
    pineapple[i].velocityX = random(5,-5)
    pineapple[i].velocityY = random(5,-5);
    cpineapple = pineapple[i];
    pineapples.add(cpineapple)
    }
}

function spawnMelon(){
  for(var i = 0; i <= melon; i++){
    melon[i] = createSprite(random(0,400),random(0,400),20,20);
    melon[i].addImage(meloni)
    melon[i].scale = 0.12;
    melon[i].velocityX = random(5,-5)
    melon[i].velocityY = random(5,-5);
    cmelon = melon[i]
    melons.add(cmelon)
    }
}

function destroyFruits(){
  if(keyIsDown(UP_ARROW)){
    oranges.destroyEach();
    //vx += 1;
    //vy += 1;
    
    //spawnOrange();
  }
  if(keyIsDown(DOWN_ARROW)){
    capple.destroy();
  }
  if(keyIsDown(LEFT_ARROW)){
    cmelon.destroy();
  }
  if(keyIsDown(RIGHT_ARROW)){
    cpineapple.destroy();
  }
  if(keyIsDown(32)){
    cmango.destroy();
  }
}
