const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,ground;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var objectOptions = {
    isStatic: true
  }
  var options ={
    restitution:1
  }
  object = Bodies.circle(200, 100, 25 ,options);
  World.add(world, object);
  console.log(object);
  console.log(object.position);
ground = Bodies.rectangle(200,390,400,25,objectOptions )
console.log(object.position.x);
World.add(world,ground)
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,400,25)
  ellipseMode(RADIUS);
  ellipse(object.position.x, object.position.y, 25)
}