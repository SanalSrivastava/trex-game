 var trex ,trex_running;
function preload(){
 
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 ground_running = loadImage("ground2.png");
 cloud_running = loadImage("cloud.png");
 }
 function setup(){
 
 createCanvas(600,200)
 trex = createSprite(20,150,20,22);
 trex.shapeColor = "lightgreen"
//create a trex sprite
 trex.addAnimation("dinosaur",trex_running);
 trex.scale=0.5;
 ground = createSprite(20,160,600,20);
 ground.addImage("ground",ground_running);
 //ground.scale = 0.5;
 ground.velocityX = -7;
 invisibleground= createSprite(20,180,400,20);
 invisibleground.visible = false;
 var rand = Math.round(random(1,100)) 
 console.log(rand)
}
 function draw(){
 
 background("blue")
 if(ground.x < 0 ) {
 ground.x = ground.width/2;
 }
 if(keyDown("space")) {
 trex.velocityY = -4;
 }
 trex.velocityY = trex.velocityY + 0.5;
 trex.collide(invisibleground);
 spawnclouds();
 drawSprites();
 }
 function spawnclouds() {
 if (frameCount%60==0) {
 cloud = createSprite(600,100,40,10);
 cloud.velocityX = -3
 cloud.y = Math.round(random(10,60))
 cloud.addImage(cloud_running);
 cloud.scale = 0.5;
 }
 }