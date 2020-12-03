
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 var paperObject_options ={
		restitution: 1.0
	}

paperObject = new Paper(200,100,30, paperObject_options);
World.add(world,paperObject);

dustbin1 = new Dustbin(1200,647,20,100);

 dustbin2 = new Dustbin(1120,640,200,20);

dustbin3 = new Dustbin(1030,647,20,100);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbin1.display();
 dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:44,y:-50});
	}
}

