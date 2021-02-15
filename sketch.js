var helicopterIMG, helicopterSprite, packageSprite,packageIMG, line1, line2, line3;
var lineB1, lineB2, lineB3;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
/*	line1=createSprite(290, 606, 10, 100);
	line1.shapeColor = "red"
	line2=createSprite(390, 656, 212, 10);
	line2.shapeColor = "red"
	line3=createSprite(490, 606, 10, 100);
	line3.shapeColor = "red"
*/
   lineB1 = Bodies.rectangle(300, 610, 20, 100,{isStatic:true});
   World.add(world, lineB1)
   line1 = createSprite(lineB1.position.x, lineB1.position.y, 20, 100);
   line1.shapeColor = "red"

   lineB2 = Bodies.rectangle(375, 650, 150, 20,{isStatic:true});
   World.add(world, lineB2)
   line2 = createSprite(lineB2.position.x, lineB2.position.y, 150, 20);
   line2.shapeColor = "red"

   lineB3 = Bodies.rectangle(450, 610, 20, 100,{isStatic:true});
   World.add(world, lineB3)
   line3 = createSprite(lineB3.position.x, lineB3.position.y, 20, 100);
   line3.shapeColor = "red"


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 // keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	//World.add(world, packageBody);
	
  }
}