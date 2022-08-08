const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var body;
var ball;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  var ground_options = {
    isStatic:true
  }
  body = Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world,body);
  
  var ball_options = {
    restitution:1
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
}

function draw() 
{
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
  fill("green");
  rect(body.position.x,body.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}

