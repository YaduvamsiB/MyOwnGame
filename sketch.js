const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var maxDrops = 300;
var drops = [];

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  if (frameCount % 100 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new Drops(random(0, 800), random(0, 300)));
    }
  }
  leftEdge = new Block(300, 550, 20, 200);
  rightEdge = new Block(500, 550, 20, 200);
  bottomEdge = new Block(400, 650, 220, 20);
}

function draw() {
  Engine.update(engine);
  background("black");
  for (var i = 0; i < maxDrops; i++) {
    drops[i].display();
    drops[i].update();
  }
  rightEdge.display();
  leftEdge.display();
  bottomEdge.display();
  drawSprites();
}
