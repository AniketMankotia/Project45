var Person, PersonImg;
var Gorilla, GorillaImg;

function preload(){

  PersonImg = loadAnimation("Images/845673.gif");
}


function setup() {
  createCanvas(800,400);

  Person = createSprite(200,200,20,20);
  Person.addAnimation("PersonImg",PersonImg,PersonImg);

}

function draw() {
  background(255, 255, 255);  
  drawSprites();
}