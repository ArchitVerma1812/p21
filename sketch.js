var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20); bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2); 
  wall.shapeColor=rgb(80,80,80);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    bullet.x=wall.x-30;
    damage=(0.5 * weight * speed * speed)/(thickness*thickness*thickness);
    console.log(damage);
    if(damage<10)
  {
    bullet.shapeColor="green";
  }
  else{
    bullet.shapeColor="red";
  }
  }
  
  drawSprites();
}