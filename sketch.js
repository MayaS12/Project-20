var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

speed = random(55,90);
weight = random(400,1500);

car = createSprite(50,200,50,50);

wall = createSprite(1500,200,60,height/2);
wall.shapeColour(80,80,80);

}

function draw() {
  background("black");  

  drawSprites();
}