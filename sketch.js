const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var myengine,myworld,ground,box1,box2,ground;

function setup() {
  createCanvas(800,400);

  myengine = Engine.create();   //.world
  myworld = myengine.world;
 
  box1 = new BOX(240,100,50,100);
  box2 = new BOX(200,300,50,50);

  ground = new GROUND(400,390,800,20);
}

function draw() {
  background("yellow");  

  Engine.update(myengine);

  box1.display();
  box2.display();
  ground.display();
}