
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var roof;
var chain1, chain2, chain3, chain4, chain5;
var blob, blob2, blob3, blob4, blob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(200,50,200,20);

	blob1 = new Blob(200,200);
	blob2 = new Blob(250,200);
	blob3 = new Blob(300,200);
	blob4 = new Blob(350,200);
	blob5 = new Blob(400,200);

	chain1 = new Rope(blob1, roof);
	chain2 = new Rope(blob2, roof);
	chain3 = new Rope(blob3, roof);
	chain4 = new Rope(blob4, roof);
	chain5 = new Rope(blob5, roof);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
}



