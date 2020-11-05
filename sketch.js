var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var o1, o2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red"

  movingRect = createSprite(100,100,80,50);
  movingRect.shapeColor = "red"
  

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "crimson"
  
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "crimson"

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "crimson"

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "crimson"
  

  o1 = createSprite (120,0,50,50);
  o1.velocityY = 4; 
  o1.shapeColor = "pink"

  o2 = createSprite(100,400,80,50);
  o2.velocityY = -4;
  o2.shapeColor = "pink"

}

function draw() {
  background(0);
  movingRect.x = mouseX;
movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x)

BounceOff();


if(isTouching(movingRect, gameObject1)){
  fixedRect.shapeColor = "lightblue";
  gameObject3.shapeColor = "lightblue";
}else {
  fixedRect.shapeColor = "crimson";
  gameObject3.shapeColor = "crimson";
}
  
  
  drawSprites();
}

