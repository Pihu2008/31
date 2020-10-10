const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,480,5);
  division1 = new Ground(100,700,5,200);
  division2 = new Ground(150,700,5,200);
  division3 = new Ground(200,700,5,200);
  division4 = new Ground(250,700,5,200);
  division5 = new Ground(300,700,5,200);
  division6 = new Ground(350,700,5,200);
  division7 = new Ground(400,700,5,200);
  division8 = new Ground(50,700,5,200);
}

function draw() {
  background(0); 
  ground.display(); 
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  drawSprites(); 
}