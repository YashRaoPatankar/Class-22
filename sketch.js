const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var object1;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,300,400,20,options);
World.add(world,ground);
  
var option_o = {
  restitution : 1
}

  object1 = Bodies.circle(200,200,20,option_o);

  World.add(world,object1);
  
  console.log(object1.position.x);
}

function draw() {
  background("lightblue");  
Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(object1.position.x,object1.position.y,20,20);
}