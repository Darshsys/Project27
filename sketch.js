const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload(){
}

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,450,80);
	bob2=new Bob(200,450,80);
	bob3=new Bob(200,450,80);
	bob4=new Bob(200,450,80);
	bob5=new Bob(200,450,80);
	roof=new Roof(400,100,500,50);


	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(220);
  
	drawSprites();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
}