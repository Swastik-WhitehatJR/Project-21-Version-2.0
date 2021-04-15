var twinkle, bingo, blackS, londonBridge, oldMac, ABC, fingerPress, Tsound, Bsound, BRsound, oldMacSound, ABCsound, BBSsound, bg; 
var fingerPressImg, bgIMG;
var textVar;
var starBGimg, dogBG, sheepBG, bridgeBG;

function preload() {
  fingerPressImg = loadImage("ASongFinger.png");
  Tsound = loadSound("Tsound.wav");
  Bsound = loadSound("bingoSong.wav");
  BRsound = loadSound("bridgeSound.wav");
  BBSsound = loadSound("sheepSound.wav");
  oldMacSound = loadSound("oldMacSound.wav");
  ABCsound = loadSound("ABCsound.wav");
  bgIMG = loadImage("bgBG.jpg");
  starBGimg = loadImage("starsBGimg.png");
  // dogBG = loadAnimation("dogWalking.gif");
  dogBG = loadImage("dogBGimg.png");
  sheepBG = loadImage("sheepBGimg.png");
  bridgeBG = loadImage("bridge.png");
  farmerBG = loadImage("farmer.png");
  abcBG = loadImage("abcIMG.png");
}

function setup() {
  createCanvas(1000, 600);

  textVar = "Getting Ready..."

  bg = createSprite(500, 300);
  bg.addImage(bgIMG);
  bg.scale = 0.5;

  twinkle = createSprite(80, 550, 140, 25);
  twinkle.shapeColor = "red";
  // twinkle.debug = true;

  bingo = createSprite(240, 550, 140, 25);
  bingo.shapeColor = "orange";

  blackS = createSprite(405, 550, 150, 25);
  blackS.shapeColor = "yellow";

  londonBridge = createSprite(575, 550, 150, 25);
  londonBridge.shapeColor = "green";

  oldMac = createSprite(745, 550, 150, 25);
  oldMac.shapeColor = "blue";

  ABC = createSprite(915, 550, 150, 25);
  ABC.shapeColor = "purple";

  fingerPress = createSprite(500, 300);
  fingerPress.scale = 0.09;
  fingerPress.addImage(fingerPressImg);
  fingerPress.velocityX = 5;
  fingerPress.velocityY = -5;
  // fingerPress.debug = true;

}

function draw() {
  background(0); 

  edges = createEdgeSprites();
  fingerPress.bounceOff(edges);

  if(fingerPress.isTouching(twinkle) && fingerPress.bounceOff(twinkle)) {
    fingerPress.tint = "red";
    textVar = "Twinkle Twinkle";
    oldMacSound.stop();
    BBSsound.stop();
    BRsound.stop();
    ABCsound.stop();
    Bsound.stop();
    Tsound.stop();
    Tsound.play();
    bg.scale = 0.4;
    bg.addImage(starBGimg);
  } 
  else if(fingerPress.isTouching(bingo) && fingerPress.bounceOff(bingo)) {
      fingerPress.tint = "orange";
      textVar = "B-I-N-G-O";
      Bsound.stop();
      Bsound.play();
      oldMacSound.stop();
      oldMacSound.stop();
      BBSsound.stop();
      BRsound.stop();
      ABCsound.stop();
      Tsound.stop();
      bg.scale = 0.3;
      bg.addImage(dogBG);
  } 
  else if(fingerPress.isTouching(blackS) && fingerPress.bounceOff(blackS)) {
      fingerPress.tint = "yellow";
      textVar = "Black Sheep";
      oldMacSound.stop();
      BBSsound.stop();
      BRsound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
      BBSsound.play();
      bg.scale = 0.3;
      bg.addImage(sheepBG);
  } 
  else if(fingerPress.isTouching(londonBridge) && fingerPress.bounceOff(londonBridge)) {
      fingerPress.tint = "green";
      textVar = "London Bridge";
      oldMacSound.stop();
      BBSsound.stop();
      BRsound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
      BRsound.play();
      bg.scale = 0.4;
      bg.addImage(bridgeBG);
  } 
  else if(fingerPress.isTouching(oldMac) && fingerPress.bounceOff(oldMac)) {
      fingerPress.tint = "blue";
      textVar = "Old Macdonald";
      oldMacSound.stop();
      BBSsound.stop();
      oldMacSound.play();
      BRsound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
      bg.scale = 0.4;
      bg.addImage(farmerBG);
  } 
  else if(fingerPress.isTouching(ABC) && fingerPress.bounceOff(ABC)) {
      fingerPress.tint = "purple";
      textVar = "A-B-C-D-E...";
      oldMacSound.stop();
      BBSsound.stop();
      BRsound.stop();
      ABCsound.stop();
      Bsound.stop();
      Tsound.stop();
      ABCsound.play();
      bg.scale = 0.4;
      bg.addImage(abcBG);  
  }

  drawSprites();

  fill("white");
  textSize(15);
  text("Twinkle Twinkle", 27.5, 555);
  text("B-I-N-G-O", 205, 555);

  fill("black");
  text("Black Sheep", 365, 555);
  text("London Bridge", 525, 555);

  fill("white");
  text("Old Mac.", 720, 555);
  text("A-B-C", 890, 555);

  textSize(18)
  text(textVar, 400, 30)
}


