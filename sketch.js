const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 75, 75);
  initialBallPosition = createVector(width / 2 + 80, height / 2 - 80);

  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();

  if (ball.body.position.y > height + 50 || 
    ball.body.position.y < -50 || 
    ball.body.position.x > width + 50 || 
    ball.body.position.x < -50 ) {

    Matter.Body.setPosition(ball.body, { x: initialBallPosition.x, y: initialBallPosition.y });
    Matter.Body.setVelocity(ball.body, { x: 0, y: 0 })
  }
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.03});

}

