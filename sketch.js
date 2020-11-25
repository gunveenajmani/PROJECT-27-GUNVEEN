//NAMESPACE: NICK NAMES TO MODULES

//physics- mechanics
const Engine = Matter.Engine;
//environment
const World = Matter.World;
//creatiing obj
const Bodies = Matter.Bodies;
//manipulating objects
const Body = Matter.Body;
//link/constraint
//const Constraint = Matter.Constraint;

var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	//your engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();
	
	bob1 = new Bob(250, 300);
	bob2 = new Bob(300, 300);
	bob3 = new Bob(350, 300);
	bob4 = new Bob(400, 300);
	bob5 = new Bob(450, 300);

	rope1 = new Rope(bob1.Body, roof.Body,-100);
	rope2 = new Rope(bob2.Body, roof.Body,-50);
	rope3 = new Rope(bob3.Body, roof.Body,0);
	rope4 = new Rope(bob4.Body, roof.Body,50);
	rope5 = new Rope(bob5.Body, roof.Body,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("yellow");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
	Matter.Body.applyForce(bob1.Body, bob1.Body.position, {x:-100, y:-150});
}
}

