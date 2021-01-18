const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
var roof;

function preload(){
}

function setup(){
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2, 0)

	/*constraint1={
		bodyA:bob1.body,
		bodyB:roof.body,
		pointB: {x:-bobDiameter*2, y:0}
	}

	constraint2={
		bodyA:bob2.body,
		bodyB:roof.body,		
		pointB: {x:-bobDiameter, y:0}
	}

	constraint3={
		bodyA:bob3.body,
		bodyB:roof.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bob4.body,
		bodyB:roof.body,		
		pointB: {x:bobDiameter, y:0}	

	}

	constraint5={
		bodyA:bob5.body,
		bodyB:roof.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(230);

	roof.display();
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
}