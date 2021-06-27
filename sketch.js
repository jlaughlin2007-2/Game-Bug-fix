var brokenCar,zombieHoard, zombieHazard;
var debrisPile, road, survivor;
var brokenCarImage,zombieHoardImage, zombieHazardImage;
var debrisPileImage, roadImage, survivorImage;

function preload() {
roadImage=loadImage("Images/Static/Road.png")
debrisPileImage=loadImage("Images/Static/Debris-Pile.jpg")
brokenCarImage=loadImage("Images/Static/Broken-Car.png")
zombieHoardImage=loadImage("Images/Animated/Zombie(Hoard).gif")
zombieHazardImage=loadImage("Images/Animated/Zombie(Hazard).gif")
SurvivorImage=loadImage("Images/Animated/Survivor.gif")
}

function setup() {
  createCanvas(1536,750);

  road=createSprite(768,375,1536,750)
  road.addImage(roadImage)

  debrisPile=createSprite(0, 0, 0, 0 )
  debrisPile.addImage(debrisPileImage)

  brokenCar=createSprite(0, 0, 0, 0 )
  brokenCar.addImage(brokenCarImage)

  zombieHoard=createSprite(0, 0, 0, 0 )
  zombieHoard.addImage(zombieHoardImage)

  zombieHazard=createSprite(0, 0, 0, 0 )
  zombieHazard.addImage(zombieHazardImage)

  survivor=createSprite(0, 0, 0, 0 )
  survivor.addImage(survivorImage)
  
  
  

}

function draw() {
  background(0);  

  drawSprites();
}